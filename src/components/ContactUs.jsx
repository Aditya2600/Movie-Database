import React from "react";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const navigate = useNavigate();

  return (
    <div className="contact-us-container flex flex-col w-full h-full px-10 bg-gradient-to-r from-[#1F1E24] to-[#292834] overflow-hidden">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line"
          ></i>{" "}
          Back
        </h1>
      </div>
      <h1 className="text-4xl text-white font-bold mb-5 text-center">
        Contact Us
      </h1>
      <p className="text-lg text-gray-300 mb-10 text-center leading-relaxed">
        Have a question, suggestion, or feedback? We'd love to hear from you!
      </p>

      <div className="flex flex-col items-center justify-center gap-10 mb-10">
        <div className="contact-form text-center">
          <h2 className="text-2xl text-white font-bold mb-3">Get in Touch</h2>
          <form className="flex flex-col gap-5">
            <input
              type="text"
              className="w-full px-4 py-3 rounded-md border-gray-300 focus:border-blue-500"
              placeholder="Your Name"
            />
            <input
              type="email"
              className="w-full px-4 py-3 rounded-md border-gray-300 focus:border-blue-500"
              placeholder="Your Email"
            />
            <textarea
              className="w-full h-32 px-4 py-3 rounded-md border-gray-300 focus:border-blue-500"
              placeholder="Your Message"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-3 rounded-md hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="text-center mb-10">
        <h2 className="text-2xl text-white font-bold mb-3">
          Other Ways to Contact Us
        </h2>
        <p className="text-lg text-gray-300 mb-5">
          You can also reach us by email or social media:
        </p>
        <ul className="flex flex-col gap-3">
          <li>
            <a
              href="mailto:contact@amdb.com"
              className="text-white hover:text-blue-500"
            >
              contact@amdb.com
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/yourwebsite"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500"
            >
              Facebook
            </a>
          </li>
          <li style={{ color: 'white' }}>
            <a
              href="https://www.twitter.com/yourwebsite"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500"
            >
              Twitter
            </a>
          </li>
          <li style={{ color: 'white' }}>
            <a
              href="https://www.instagram.com/yourwebsite"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactUs;
