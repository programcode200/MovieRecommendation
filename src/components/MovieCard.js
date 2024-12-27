import React from "react";
import { IMG_CDN } from "../utils/constant";

const MovieCard = ({ movieImg, title }) => {
  if (!movieImg) return;
  return (
    <div className="ml-2 w-36 mr-3 ">
      <img
        className="rounded-md hover:scale-110 transition-transform duration-500 ease-out my-3"
        src={IMG_CDN + movieImg}
        alt="movieposter"
      />
      <div className="mt-2 text-center">
        <h3 className="text-white text-sm font-medium text-ellipsis overflow-hidden whitespace-nowrap">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default MovieCard;
