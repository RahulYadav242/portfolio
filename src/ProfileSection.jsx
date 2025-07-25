import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import React, { useState, useEffect } from "react";
import IMG from './components/IMG.jpg'

const ProfileSection = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="max-h-screen flex items-center justify-center bg-white px-4 pt-20">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-10 max-w-6xl">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            <RoughNotationGroup show={show}>
              Hello! I'm Rahul, a{' '}
              <RoughNotation type="highlight" order={2}>
                <span className="font-bold">developer</span>
              </RoughNotation>
            </RoughNotationGroup>
          </h1>

          <p className="mt-6 text-lg text-gray-700">
            I love building tools that are{' '}
            <RoughNotationGroup show={show}>
              <RoughNotation type="highlight" order={2}>
                user-friendly, simple
              </RoughNotation>
            </RoughNotationGroup>{' '}
            and{' '}
            <RoughNotationGroup show={show}>
              <RoughNotation type="highlight" order={2}>
                delightful
              </RoughNotation>
            </RoughNotationGroup>
          </p>

          <p className="mt-4 text-gray-700">
            I recently completed a full-stack internship at Empower Bharat
            where I developed a production-ready web application using the MERN
            stack, working across both{" "}
            <RoughNotationGroup show={show}>
              <RoughNotation type="highlight" order={2}>
                frontend
              </RoughNotation>
            </RoughNotationGroup>{" "}
            and{" "}
            <RoughNotationGroup show={show}>
              <RoughNotation type="highlight" order={2}>
                back-end web development
              </RoughNotation>
            </RoughNotationGroup>{" "}
            and integrating third-party APIs.
          </p>

          <p className="mt-4 text-gray-700">
            Through these experiences, I’ve contributed to real-world projects
            both independently and in teams, building responsive interfaces,
            scalable APIs, and managing data with MongoDB. I've developed a
            working style that values{" "}
            <RoughNotationGroup show={show}>
              <RoughNotation type="highlight" order={2}>
                clarity
              </RoughNotation>
            </RoughNotationGroup>
            ,{" "}
            <RoughNotationGroup show={show}>
              <RoughNotation type="highlight" order={2}>
                flexibility
              </RoughNotation>
            </RoughNotationGroup>
            , and{" "}
            <RoughNotationGroup show={show}>
              <RoughNotation type="highlight" order={2}>
                collaboration
              </RoughNotation>
            </RoughNotationGroup>{" "}
            across the development process.
          </p>

          <p className="mt-4 text-gray-800">
            I'm currently looking for a new role as a developer.{" "}
            <RoughNotationGroup show={show}>
              <RoughNotation type="circle" order={2}>
                <span className="font-semibold">Hire me?</span>
              </RoughNotation>
            </RoughNotationGroup>
          </p>

          <div className="mt-6 flex gap-4">
            <button className="bg-black text-white px-5 py-2 rounded hover:bg-gray-800 transition">
              View Linkedin
            </button>
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
