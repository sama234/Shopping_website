import { useState } from "react";
import login from "./login.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate=useNavigate()
  const [signup,setsignup]=useState(true)
  const [formdata,setformdata]=useState({
    name:"",
    email:"",
    phone:"",
    password:"",
    confirmpass:""
  })

  const handlechnge=(e)=>{
    const {name,value}=e.target
   
setformdata((prev) => ({
    ...prev,
    [name]: value
  }));
  }

  const handlesubmit=(e)=>{
e.preventDefault()

if(signup){
  if(!formdata.name || !formdata.email || !formdata.phone || !formdata.password || !formdata.confirmpass){
    return alert("All feilds are required")
   
  }
    if(formdata.password !== formdata.confirmpass){
 return   alert("Password doesnot match")
  }

 localStorage.setItem("users",JSON.stringify(formdata))
 return alert("Signup sucessfully")
 setsignup(!login)
  }
  else{
    const getuser=JSON.parse(localStorage.getItem("users"))
    if(formdata.email == getuser.email && formdata.password == getuser.password){
      return alert("Login Sucessfully")
      navigate("/")
    }
    else{
      alert("incorect email")
    }
  }

}
  

  return (
    <div className="pt-24 mt-20 "
      style={{
        backgroundImage: `url(${login})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
      }}
    >
     <div className="h-full w-full flex items-center pl-[20%]">

<div className="w-[480px] max-w-[90%] 
bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl p-8">
    {/* Heading */}
    <div className="text-center mb-10">
      <h1 className="text-4xl font-bold text-[#20543d] mb-3">
        Welcome Back
      </h1>

      <p className="text-lg text-[#285842]">
        {signup ? "Signup" :"Login"} to continue shopping
      </p>
    </div>
    <form action="" onSubmit={handlesubmit} >
    {signup && (

   
     <div className="mb-5">
      <input
        type="text"
        name="name"
        value={formdata.name}
        placeholder="Name"
        onChange={handlechnge}
        className="w-full h-[56px] px-5 border border-gray-200 rounded-xl outline-none focus:border-[#4d8065]"
      />
    </div>
 )}
    {/* Email */}
    <div className="mb-5">
      <input
        type="text"
         name="email"
           value={formdata.email}
        placeholder="Email"
          onChange={handlechnge}
        className="w-full h-[56px] px-5 border border-gray-200 rounded-xl outline-none focus:border-[#4d8065]"
      />
    </div>
    {signup && (

  
     <div className="mb-5">
      <input
        type="text"
         name="phone"
           value={formdata.phone}
        placeholder="Phone"
          onChange={handlechnge}
        className="w-full h-[56px] px-5 border border-gray-200 rounded-xl outline-none focus:border-[#4d8065]"
      />

    </div>
      )}

     <div className="mb-5">
      <input
        type="text"
         name="password"
           onChange={handlechnge}
           value={formdata.password}
        placeholder="Password"
        className="w-full h-[56px] px-5 border border-gray-200 rounded-xl outline-none focus:border-[#4d8065]"
      />
    </div>
{signup && (
   
    <div className="mb-5">
      <input
        type="password"
        name="confirmpass"
          onChange={handlechnge}
          value={formdata.confirmpass}
        placeholder="Confirm Password"
        className="w-full h-[56px] px-5 border border-gray-200 rounded-xl outline-none focus:border-[#4d8065]"
      />
    </div>
       )}

    {/* Remember + Forgot */}
    <div className="flex justify-between items-center mb-7 text-sm">

      <label className="flex items-center gap-2 text-[#285842]">
        <input
          type="checkbox"
          className="w-5 h-5 accent-[#4d8065]"
        />
        Remember me
      </label>

      <a href="#" className="text-[#285842] font-medium">
        Forgot password?
      </a>

    </div>

    {/* Login Button */}
    <button className="w-full h-[54px] bg-[#4d8065] hover:bg-[#3d6d54] text-white text-lg font-semibold rounded-xl">
       {signup ? "Signup" :"Login"}
    </button>
 </form>

    {/* Divider */}
    <div className="flex items-center gap-4 my-8">

      <div className="h-px bg-gray-200 flex-1"></div>

      <span className="text-gray-500 text-sm">
        or continue with
      </span>

      <div className="h-px bg-gray-200 flex-1"></div>

    </div>

    {/* Social Buttons */}
    {/* <div className="flex justify-center gap-6">

      <button className="w-[90px] h-[60px] border border-gray-200 rounded-xl text-2xl">
        G
      </button>

      <button className="w-[90px] h-[60px] border border-gray-200 rounded-xl text-2xl">
        f
      </button>

      <button className="w-[90px] h-[60px] border border-gray-200 rounded-xl text-2xl">
        
      </button>

    </div> */}

    {/* Sign Up */}
    <p className="text-center text-gray-500 mt-8">
     {signup  ? "Already have a Account ? " :" Don't have an account?"}
      <span onClick={()=>{
        setsignup(!signup)
      }}  className="text-[#20543d] font-semibold ml-1">
       {signup ? "Login" :"Signup"}
      </span>
    </p>
  </div>

</div>

    </div>
   
  );
};

export default Login;