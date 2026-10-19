// import { useState } from "react";
// import login from "./login.png";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate=useNavigate()
//   const [signup,setsignup]=useState(true)
//   const [formdata,setformdata]=useState({
//     name:"",
//     email:"",
//     phone:"",
//     password:"",
//     confirmpass:""
//   })

//   const handlechnge=(e)=>{
//     const {name,value}=e.target
   
// setformdata((prev) => ({
//     ...prev,
//     [name]: value
//   }));
//   }

//   const handlesubmit=(e)=>{
// e.preventDefault()

// if(signup){
//   if(!formdata.name || !formdata.email || !formdata.phone || !formdata.password || !formdata.confirmpass){
//     return alert("All feilds are required")
   
//   }
//     if(formdata.password !== formdata.confirmpass){
//  return   alert("Password doesnot match")
//   }

//  localStorage.setItem("users",JSON.stringify(formdata))
//  return alert("Signup sucessfully")
//  setsignup(!login)
//   }
//   else{
//     const getuser=JSON.parse(localStorage.getItem("users"))
//     if(formdata.email == getuser.email && formdata.password == getuser.password){
//       return alert("Login Sucessfully")
//       navigate("/")
//     }
//     else{
//       alert("incorect email")
//     }
//   }

// }
  

//   return (
//     <div className="pt-24 mt-20 "
//       style={{
//         backgroundImage: `url(${login})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         width: "100%",
//         height: "100vh",
//       }}
//     >
//      <div className="h-full w-full flex items-center pl-[20%]">

// <div className="w-[480px] max-w-[90%] 
// bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl p-8">
//     {/* Heading */}
//     <div className="text-center mb-10">
//       <h1 className="text-4xl font-bold text-[#20543d] mb-3">
//         Welcome Back
//       </h1>

//       <p className="text-lg text-[#285842]">
//         {signup ? "Signup" :"Login"} to continue shopping
//       </p>
//     </div>
//     <form action="" onSubmit={handlesubmit} >
//     {signup && (

   
//      <div className="mb-5">
//       <input
//         type="text"
//         name="name"
//         value={formdata.name}
//         placeholder="Name"
//         onChange={handlechnge}
//         className="w-full h-[56px] px-5 border border-gray-200 rounded-xl outline-none focus:border-[#4d8065]"
//       />
//     </div>
//  )}
//     {/* Email */}
//     <div className="mb-5">
//       <input
//         type="text"
//          name="email"
//            value={formdata.email}
//         placeholder="Email"
//           onChange={handlechnge}
//         className="w-full h-[56px] px-5 border border-gray-200 rounded-xl outline-none focus:border-[#4d8065]"
//       />
//     </div>
//     {signup && (

  
//      <div className="mb-5">
//       {/* <input
//         type="numbers"
//          name="phone"
//          maxLength={14}
//            value={formdata.phone}
//         placeholder="Phone"
//           onChange={handlechnge}
//         className="w-full h-[56px] px-5 border border-gray-200 rounded-xl outline-none focus:border-[#4d8065]"
//       /> */}

//       <div className="flex w-full h-[56px] border border-gray-200 rounded-xl overflow-hidden focus-within:border-[#4d8065]">
//   <select
//     name="countryCode"
//     value={formdata.countryCode}
//     onChange={handlechnge}
//     className="px-3 bg-transparent border-r border-gray-200 outline-none text-gray-700"
//   >
//     <option value="+91">🇮🇳 +91</option>
//     <option value="+1">🇺🇸 +1</option>
//     <option value="+44">🇬🇧 +44</option>
//     <option value="+7">🇷🇺 +7</option>
//     <option value="+1">🇨🇦 +1</option>
//     <option value="+61">🇦🇺 +61</option>
//   </select>

//   <input
//     type="tel"
//     name="phone"
//     maxLength={14}
//     value={formdata.phone}
//     placeholder="Phone"
//     onChange={handlechnge}
//     className="flex-1 px-5 outline-none"
//   />
// </div>

//     </div>
//       )}

//      <div className="mb-5">
//       <input
//         type="text"
//          name="password"
//            onChange={handlechnge}
//            value={formdata.password}
//         placeholder="Password"
//         className="w-full h-[56px] px-5 border border-gray-200 rounded-xl outline-none focus:border-[#4d8065]"
//       />
//     </div>
// {signup && (
   
//     <div className="mb-5">
//       <input
//         type="password"
//         name="confirmpass"
//           onChange={handlechnge}
//           value={formdata.confirmpass}
//         placeholder="Confirm Password"
//         className="w-full h-[56px] px-5 border border-gray-200 rounded-xl outline-none focus:border-[#4d8065]"
//       />
//     </div>
//        )}

//     {/* Remember + Forgot */}
//     <div className="flex justify-between items-center mb-7 text-sm">

//       <label className="flex items-center gap-2 text-[#285842]">
//         <input
//           type="checkbox"
//           className="w-5 h-5 accent-[#4d8065]"
//         />
//         Remember me
//       </label>

//       <a href="#" className="text-[#285842] font-medium">
//         Forgot password?
//       </a>

//     </div>

//     {/* Login Button */}
//     <button className="w-full h-[54px] bg-[#4d8065] hover:bg-[#3d6d54] text-white text-lg font-semibold rounded-xl">
//        {signup ? "Signup" :"Login"}
//     </button>
//  </form>

//     {/* Divider */}
//     <div className="flex items-center gap-4 my-8">

//       <div className="h-px bg-gray-200 flex-1"></div>

//       <span className="text-gray-500 text-sm">
//         or continue with
//       </span>

//       <div className="h-px bg-gray-200 flex-1"></div>

//     </div>

//     {/* Social Buttons */}
//     {/* <div className="flex justify-center gap-6">

//       <button className="w-[90px] h-[60px] border border-gray-200 rounded-xl text-2xl">
//         G
//       </button>

//       <button className="w-[90px] h-[60px] border border-gray-200 rounded-xl text-2xl">
//         f
//       </button>

//       <button className="w-[90px] h-[60px] border border-gray-200 rounded-xl text-2xl">
//         
//       </button>

//     </div> */}

//     {/* Sign Up */}
//     <p className="text-center text-gray-500 mt-8">
//      {signup  ? "Already have a Account ? " :" Don't have an account?"}
//       <span onClick={()=>{
//         setsignup(!signup)
//       }}  className="text-[#20543d] font-semibold ml-1">
//        {signup ? "Login" :"Signup"}
//       </span>
//     </p>
//   </div>

// </div>

//     </div>
   
//   );
// };

// export default Login;


import { useState } from "react";
import login from "./login.png";
import { useNavigate } from "react-router-dom";

import PhoneInputModule from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneInput = PhoneInputModule.default;

const Login = () => {
  const navigate = useNavigate();

  // true = signup
  // false = login
  const [signup, setsignup] = useState(true);

  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmpass: "",
  });

  // =========================
  // NORMAL INPUT CHANGE
  // =========================

  const handlechnge = (e) => {
    const { name, value } = e.target;

    setformdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =========================
  // PHONE CHANGE
  // =========================

  const handlePhoneChange = (phone) => {
    setformdata((prev) => ({
      ...prev,
      phone: phone,
    }));
  };

  // =========================
  // SUBMIT
  // =========================

  const handlesubmit = (e) => {
    e.preventDefault();

    // =========================
    // SIGNUP
    // =========================

    if (signup) {
      // Check empty fields
      if (
        !formdata.name.trim() ||
        !formdata.email.trim() ||
        !formdata.phone ||
        !formdata.password ||
        !formdata.confirmpass
      ) {
        return alert("All fields are required");
      }

      // Password validation
      if (formdata.password !== formdata.confirmpass) {
        return alert("Password does not match");
      }

      // Check password length
      if (formdata.password.length < 6) {
        return alert("Password must be at least 6 characters");
      }

      // Save user
      localStorage.setItem("users", JSON.stringify(formdata));

      alert("Signup successfully");

      // Switch Signup -> Login
      setsignup(false);

      // Clear password fields
      setformdata((prev) => ({
        ...prev,
        password: "",
        confirmpass: "",
      }));

      return;
    }

    // =========================
    // LOGIN
    // =========================

    const savedUser = localStorage.getItem("users");

    if (!savedUser) {
      return alert("No account found. Please signup first.");
    }

    const getuser = JSON.parse(savedUser);

    if (
      formdata.email.trim() === getuser.email &&
      formdata.password === getuser.password
    ) {
      alert("Login Successfully");

      navigate("/");
    } else {
      alert("Incorrect email or password");
    }
  };

  return (
    <div
      className="pt-24 mt-20"
      style={{
        backgroundImage: `url(${login})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        minHeight: "100vh",
      }}
    >
      {/* =========================
          MAIN CONTAINER
      ========================= */}

      <div className="min-h-[calc(100vh-80px)] w-full flex items-center pl-[20%]">
        {/* =========================
            FORM CARD
        ========================= */}

        <div
          className="
            w-[480px]
            max-w-[90%]
            bg-white/20
            backdrop-blur-lg
            border
            border-white/30
            rounded-2xl
            p-8
          "
        >
          {/* =========================
              HEADING
          ========================= */}

          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-[#20543d] mb-3">
              Welcome Back
            </h1>

            <p className="text-lg text-[#285842]">
              {signup ? "Signup" : "Login"} to continue shopping
            </p>
          </div>
          {/* =========================

              FORM
          ========================= */}

          <form onSubmit={handlesubmit}>
            {/* =========================
                NAME
            ========================= */}

            {signup && (
              <div className="mb-5">
                <input
                  type="text"
                  name="name"
                  value={formdata.name}
                  placeholder="Name"
                  onChange={handlechnge}
                  className="
                    w-full
                    h-[56px]
                    px-5
                    bg-transparent
                    border
                    border-gray-200
                    rounded-xl
                    outline-none
                    focus:border-[#4d8065]
                    placeholder:text-gray-600
                  "
                />
              </div>
            )}

            {/* =========================
                EMAIL
            ========================= */}

            <div className="mb-5">
              <input
                type="email"
                name="email"
                value={formdata.email}
                placeholder="Email"
                onChange={handlechnge}
                className="
                  w-full
                  h-[56px]
                  px-5
                  bg-transparent
                  border
                  border-gray-200
                  rounded-xl
                  outline-none
                  focus:border-[#4d8065]
                  placeholder:text-gray-600
                "
              />
            </div>

            {/* =========================
                PHONE
            ========================= */}

            {signup && (
              <div className="mb-5">
                <PhoneInput
                  country="in"
                  value={formdata.phone}
                  onChange={handlePhoneChange}
                  enableSearch={true}
                  searchPlaceholder="Search country..."
                  countryCodeEditable={false}
                  autoFormat={true}
                  disableSearchIcon={false}
                  inputProps={{
                    name: "phone",
                    required: true,
                  }}
                  containerClass="phone-container"
                  inputClass="
                    !w-full
                    !h-[56px]
                    !pl-[52px]
                    !bg-transparent
                    !border
                    !border-gray-200
                    !rounded-xl
                    !outline-none
                    focus:!border-[#4d8065]
                    !text-gray-700
                  "
                  buttonClass="
                    !bg-transparent
                    !border-gray-200
                    !rounded-l-xl
                  "
                  dropdownClass="
                    // !bg-white
                    !z-[50]
                  "
                  searchClass="
                    !w-[90%]
                    !h-[40px]
                    !mx-auto
                    // !bg-white
                  "
                  placeholder="Phone number"
                />
              </div>
            )}

            {/* =========================
                PASSWORD
            ========================= */}

            <div className="mb-5">
              <input
                type="password"
                name="password"
                value={formdata.password}
                onChange={handlechnge}
                placeholder="Password"
                className="
                  w-full
                  h-[56px]
                  px-5
                  bg-transparent
                  border
                  border-gray-200
                  rounded-xl
                  outline-none
                  focus:border-[#4d8065]
                  placeholder:text-gray-600
                "
              />
            </div>

            {/* =========================
                CONFIRM PASSWORD
            ========================= */}

            {signup && (
              <div className="mb-5">
                <input
                  type="password"
                  name="confirmpass"
                  value={formdata.confirmpass}
                  onChange={handlechnge}
                  placeholder="Confirm Password"
                  className="
                    w-full
                    h-[56px]
                    px-5
                    bg-transparent
                    // border
                    // border-gray-200
                    rounded-xl
                    outline-none
                    focus:border-[#4d8065]
                    placeholder:text-gray-600
                  "
                />
              </div>
            )}

            {/* =========================
                REMEMBER + FORGOT
            ========================= */}

            <div className="flex justify-between items-center mb-7 text-sm">
              <label className="flex items-center gap-2 text-[#285842] cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 accent-[#4d8065]"
                />

                Remember me
              </label>

              <button
                type="button"
                className="text-[#285842] font-medium hover:underline"
              >
                Forgot password?
              </button>
            </div>

            {/* =========================
                SUBMIT BUTTON
            ========================= */}

            <button
              type="submit"
              className="
                w-full
                h-[54px]
                bg-[#4d8065]
                hover:bg-[#3d6d54]
                text-white
                text-lg
                font-semibold
                rounded-xl
                transition
              "
            >
              {signup ? "Signup" : "Login"}
            </button>
          </form>

          {/* =========================
              DIVIDER
          ========================= */}

          <div className="flex items-center gap-4 my-8">
            <div className="h-px bg-gray-200 flex-1"></div>

            <span className="text-gray-500 text-sm">
              or continue with
            </span>

            <div className="h-px bg-gray-200 flex-1"></div>
          </div>

          {/* =========================
              LOGIN / SIGNUP SWITCH
          ========================= */}

          <p className="text-center text-gray-500">
            {signup
              ? "Already have an Account?"
              : "Don't have an account?"}

            <span
              onClick={() => {
                setsignup(!signup);

                // Clear form when switching
                setformdata((prev) => ({
                  ...prev,
                  password: "",
                  confirmpass: "",
                }));
              }}
              className="
                text-[#20543d]
                font-semibold
                ml-1
                cursor-pointer
                hover:underline
              "
            >
              {signup ? "Login" : "Signup"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
