import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="relative h-screen">
      <Header />
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_medium.jpg"
          alt="Background-Image"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay on the background image */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <form className="p-16 w-4/12 absolute my-24 mx-auto right-0 left-0 bg-black bg-opacity-75">
        <h1 className="font-bold text-white text-3xl mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && <input
          type="text"
          placeholder="Full name"
          className="text-white w-full box-border my-2 p-4 bg-transparent border border-gray-600 rounded-md"
        />}
        <input
          type="text"
          placeholder="Email or mobile number"
          className="text-white w-full box-border my-2 p-4 bg-transparent border border-gray-600 rounded-md"
        />
        
        <input
          type="password"
          placeholder="Password"
          className="text-white w-full box-border my-2 p-4 bg-transparent border border-gray-600 rounded-md"
        />
        <button className="text-white font-semibold w-full bg-red-600 hover:bg-red-700 my-3 p-2 rounded-md">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-gray-400">
          {isSignInForm ? "New to Netflix?" : "Already a Registered?"}
          <span
            onClick={toggleSignInForm}
            className="text-white font-semibold mt-3 cursor-pointer"
          >
            {" "}
            {isSignInForm ? "Sign up now." : "Sign in now."}{" "}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
