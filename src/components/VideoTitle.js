import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-36 px-14 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-extrabold">{title}</h1>
      <p className="py-5 text-base w-1/3">{overview}</p>
      <div>
        <button className="bg-white py-2 px-9 rounded-md text-black mr-3 font-semibold hover:bg-opacity-80">
          Play
        </button>
        <button className="bg-gray-400 bg-opacity-50 py-2 px-8 rounded-md ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
