import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, PROFILE_PIC } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  //useEffect is use for setup or call for once for signin,signup and logout, just need to call once of onAuthStateChanged()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //this will called unsubscribe when component unmount.
    return () => unsubscribe();
  }, []);

  return (
    <div className="flex absolute bg-gradient-to-b from-black justify-between items-center w-full py-2 px-24 z-10 ">
      <img className="w-44 contrast-125 " src={LOGO} alt="Logo" />

      {user && (
        <div className="flex">
          <button className="text-white font-semibold hover:bg-red-700 my-auto m-10 bg-red-600 py-2 rounded-md px-4"> GPT Search</button>
          <div>
            <img
              className="w-10 mx-auto rounded-sm"
              src={user?.photoURL || PROFILE_PIC}
              alt="Icon"
            />
            <button
              onClick={handleSignOut}
              className="text-white font-semibold"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
