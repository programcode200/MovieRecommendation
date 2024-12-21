import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const name = useRef("");
  const email = useRef("");
  const password = useRef("");

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const HandleButtonClick = () => {
    //validate the form data
    // console.log(email.current.value);
    // console.log(password.current.value);

    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return; //if return msg then return do go ahead of code else go

    //sign in or sign up
    if (!isSignInForm) {
      //signup logic because denote to !isSignInForm check top

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:"https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
          })
            .then(() => {
              // Profile updated!
              //below done because when dispatch the action get the updated data from the body.js
               const { uid, email, displayName, photoURL } = auth.currentUser;
                      dispatch(
                        addUser({
                          uid: uid,
                          email: email,
                          displayName: displayName,
                          photoURL: photoURL,
                        })
                      );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });

          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
          // ..
        });
    } else {
      //sign in logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse"); //when use login or signup successfully then navigate to browse
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  return (
    <div className="relative h-screen">
      <Header />
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_medium.jpg"
          alt="Background-Image"
          // className="w-full h-full object-cover"
        />
        {/* Dark overlay on the background image */}
        {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-16 w-4/12 absolute my-24 mx-auto right-0 left-0 bg-black bg-opacity-75"
      >
        <h1 className="font-bold text-white text-3xl mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full name"
            className="text-white w-full box-border my-2 p-4 bg-transparent border border-gray-600 rounded-md"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email or mobile number"
          className="text-white w-full box-border my-2 p-4 bg-transparent border border-gray-600 rounded-md"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="text-white w-full box-border my-2 p-4 bg-transparent border border-gray-600 rounded-md"
        />
        <p className="text-red-600">{errorMessage}</p>
        <button
          onClick={HandleButtonClick}
          className="text-white font-semibold w-full bg-red-600 hover:bg-red-700 my-3 p-2 rounded-md"
        >
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
