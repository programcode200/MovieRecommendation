import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LANHUAGES, LOGO, PROFILE_PIC } from "../utils/constant";
import { toggleGptSearchAction } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

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

  const handleGptSearch = () => {
    //toggle gpt search
    dispatch(toggleGptSearchAction());
  };

  const handleLangChange = (e) => {
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="flex absolute bg-gradient-to-b from-black justify-between items-center w-full py-2 px-24 z-10 ">
      <img className="w-44 contrast-125 " src={LOGO} alt="Logo" />

      {user && (
        <div className="flex">
          {showGptSearch && (
            <select
              onChange={handleLangChange}
              className="text-white font-semibold my-auto bg-gray-500 py-2 rounded-md px-5"
            >
              {/*moduler coding */}
              {LANHUAGES.map((lang) => (
                <option
                  key={lang.identifier}
                  className="bg-gray-900"
                  value={lang.identifier}
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGptSearch}
            className="text-white font-semibold hover:bg-red-700 my-auto m-10 bg-red-600 py-2 rounded-md px-4"
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>

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
