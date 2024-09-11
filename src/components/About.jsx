import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  document.title = "AMDB | About Us";

  return (
    <div className="about-container flex flex-col w-full h-full px-10 py-10 bg-gradient-to-r from-[#1F1E24] to-[#292834]">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line"
          ></i>{" "}
          Back
        </h1>
      </div>

      <h1 className="text-4xl text-white font-bold mb-5 text-center">
        Welcome to AMDB: Your Movie Obsession Starts Here
      </h1>
      <p className="text-lg text-gray-300 mb-10 text-center leading-relaxed">
        AMDB is more than just a movie database - it's a community of film fanatics
        like yourself. We're a one-stop shop for everything movies, TV shows, and
        celebrities, with a mission to fuel your love for cinema.
      </p>

      <section className="flex flex-wrap justify-center gap-10 mb-10">
        <div className="about-section text-center">
          <h2 className="text-2xl text-white font-bold mb-3">Our Story</h2>
          <p className="text-lg text-gray-300 mb-5">
            Born from a shared frustration with scattered movie information, AMDB
            was built by a team of passionate cinephiles. We envisioned a platform
            that empowers you with accurate, up-to-date content, making film
            discovery an effortless adventure.
          </p>
        </div>
        <div className="about-section text-center">
          <h2 className="text-2xl text-white font-bold mb-3">Our Team</h2>
          <p className="text-lg text-gray-300 mb-5">
            We're a diverse crew of movie lovers, developers, and designers,
            united by a burning passion for cinema. We're constantly innovating,
            striving to bring you the best possible experience and ensure you have
            access to the most comprehensive movie world knowledge.
          </p>
        </div>
      </section>

      <div className="text-center mb-10">
        <h2 className="text-2xl text-white font-bold mb-3">Join the Conversation</h2>
        <p className="text-lg text-gray-300 mb-5">
          Whether you have a burning question, a hidden gem recommendation, or
          just want to chat movies, we'd love to connect with you! Reach out to us
          at:
        </p>
        <a href="mailto:contact@amdb.com" className="text-white hover:text-blue-500">
          contact@amdb.com
        </a>
      </div>
    </div>
  );
};

export default About;
