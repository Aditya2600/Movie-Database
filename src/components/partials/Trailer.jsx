import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NotFound from "../NotFound";

// Assuming you have a NotFound component for the case when the video isn't available


const Trailer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector((state) => state[category]?.info?.videos);

  // Use useEffect to disable scrolling when the modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden"; // Disable scroll

    return () => {
      document.body.style.overflow = "auto"; // Re-enable scroll when unmounting
    };
  }, []);

  const closeModal = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="fixed inset-0 z-[100] bg-[rgba(0,0,0,0.9)] flex items-center justify-center">
      {/* Modal Overlay */}
      <div
        className="absolute inset-0 bg-transparent"
        onClick={closeModal}
      />

      {/* Modal Content */}
      <div className="relative z-10">
        {/* Close Button */}
        <Link
          onClick={closeModal}
          className="absolute hover:text-[#6556CD] ri-close-fill text-3xl text-white right-[-5%] top-[-10%]"
        ></Link>

        {/* Trailer Video */}
        {ytvideo ? (
          <ReactPlayer
            controls
            height={600}
            width={1200}
            url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
          />
        ) : (
          <NotFound />
        )}
      </div>
    </div>
  );
};

export default Trailer;
