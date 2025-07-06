import React from "react";
import IMG from '../src/components/IMG.jpg'

const projects = [
  {
    id: 1,
    title: "🚐 VanGo - Full Stack Van Rental Platform",
    description:
      "Developed a dynamic, full-stack van rental website using React.js, Node.js, Express, and MongoDB, with secure JWT-based authentication.",
    link: "https://vango-td7i.onrender.com/login"
  },
  {
    id: 2,
    title: "Weather Dashboard (Frontend Web Application)",
    description:
      "Designed and developed a fully responsive weather application using HTML5, CSS3, and vanilla JavaScript, integrating the OpenWeatherMap API ",
    link: "https://weather-tifv.onrender.com"
  },
];

const ProjectsSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Projects</h2>
        <p className="text-gray-600 mb-10">
          Some of the side projects I'm currently working on:
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
               

    <iframe 
  src={project.link}
  width="100%" 
  height="400" 
  >
</iframe>
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  className="mt-3 inline-block text-sm text-blue-600 font-medium hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
