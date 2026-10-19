
import { useState } from "react";
import login from "./login.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import PhoneInputModule from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneInput = PhoneInputModule.default;

const Login12 = () => {
  const navigate = useNavigate();

  // true = Signup
  // false = Login
  const [signup, setsignup] = useState(true);

  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
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
  // FORM SUBMIT
  // =========================

  const handlesubmit = async (e) => {
    e.preventDefault();

    // ==================================================
    // SIGNUP
    // ==================================================

    if (signup) {
      // Check all fields
      if (
        !formdata.name.trim() ||
        !formdata.email.trim() ||
        !formdata.phone ||
        !formdata.country.trim() ||
        !formdata.password ||
        !formdata.confirmpass
      ) {
        return alert("All fields are required");
      }

      // Check password match
      if (formdata.password !== formdata.confirmpass) {
        return alert("Password does not match");
      }

      // Check password length
      if (formdata.password.length < 6) {
        return alert("Password must be at least 6 characters");
      }

      try {
        // Send signup data to backend
        const response = await axios.post(
          "http://localhost:4000/api/createuser",
          {
            name: formdata.name,
            email: formdata.email,
            phone: formdata.phone,
            country: formdata.country,
            password: formdata.password,
          }
        );

        console.log("Signup response:", response.data);

        alert("Signup successfully");

        // Change Signup -> Login
        setsignup(false);

        // Clear password fields
        setformdata((prev) => ({
          ...prev,
          password: "",
          confirmpass: "",
        }));
      } catch (error) {
        console.log("Signup error:", error);

        alert(
          error.response?.data?.message ||
            "Something went wrong"
        );
      }

      return;
    }

    // ==================================================
    // LOGIN
    // ==================================================

    // Check login fields
    if (!formdata.email.trim() || !formdata.password) {
      return alert("Email and password are required");
    }

    try {
      // Login API
      const response = await axios.post(
        "http://localhost:4000/api/loginwithemail",
        {
          email: formdata.email,
          password: formdata.password,
        }
      );

      console.log("Login response:", response.data);

      alert("Login Successfully");

      // Go to home
      navigate("/");

    } catch (error) {
      console.log("Login error:", error);

      alert(
        error.response?.data?.message ||
          "Incorrect email or password"
      );
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
                    !z-[50]
                  "

                  searchClass="
                    !w-[90%]
                    !h-[40px]
                    !mx-auto
                  "

                  placeholder="Phone number"
                />

              </div>
            )}

            {/* =========================
                COUNTRY
            ========================= */}

            {signup && (
              <div className="mb-5">

                <input
                  type="text"
                  name="country"
                  value={formdata.country}
                  placeholder="Country"
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

                // Clear password fields
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

export default Login12;
