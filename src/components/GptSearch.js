import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSuggestion from "./GptSuggestion";
import { BACKGROUND } from "../utils/constant";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed inset-0 -z-10">
        <img
          src={BACKGROUND}
          alt="Background-Image"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay on the background image */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <GptSearchBar />
      <GptSuggestion />
    </div>
  );
};

export default GptSearch;
