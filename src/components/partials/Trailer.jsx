import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Trailer = () => {
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector((state) => state[category].info.videos);
  console.log(ytvideo);
  return (
    <div className="absolute z-[100] top-0 left-0 bg-[rgba(0,0,0,.9)] w-screen h-screen flex items-center justify-center">
      <ReactPlayer
      height={1080}
      width={1920} 
      url={`https://www.youtube.com/watch?v=${ytvideo.key}`} 
      />
    </div>
  );
};

export default Trailer;
