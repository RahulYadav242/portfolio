import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import React, { useState, useEffect } from "react";
import IMG from './components/IMG.jpg';

const ProfileSection = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="max-h-screen flex items-center justify-center bg-white-50 px-4 pt-20">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-10 max-w-6xl">
        {/* Text Section */}
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Hello! I'm Rahul, a{" "}
            <span className="text-white-900 font-bold">developer</span>
          </h1>

          <p className="mt-6 text-lg text-gray-700">
            I love building tools that are user-friendly, simple, and delightful.
          </p>

          <p className="mt-4 text-gray-700">
            I recently completed a full-stack internship at Empoweer Bharat where I developed a
            production-ready web application using the MERN stack, working across both frontend and backend web development and integrating third-party APIs.
          </p>

          <p className="mt-4 text-gray-700">
            Through these experiences, I’ve contributed to real-world projects both independently and in teams, building responsive interfaces, scalable APIs, and managing data with MongoDB.
            I've developed a working style that values clarity, flexibility, and collaboration across the development process.
          </p>

          <p className="mt-4 text-gray-800">
            I'm currently looking for a new role as a developer.{" "}
            <span className="font-semibold">Hire me?</span>
          </p>

          {/* Links */}
          <div className="mt-6 flex gap-4">
            <a
              href="https://www.linkedin.com/in/rahul-yadav-b565b5298"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-5 py-2 rounded hover:bg-gray-800 transition inline-block"
            >
              View LinkedIn
            </a>
            <a
              href="https://github.com/RahulYadav242"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-400 px-5 py-2 rounded hover:bg-gray-100 transition inline-block"
            >
              View Github
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div>
          <img
            src={IMG}
            alt="Rahul"
            className="w-70 h-80 object-cover rounded-3xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
