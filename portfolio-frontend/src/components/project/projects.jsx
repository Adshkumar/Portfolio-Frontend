import React, { useState, useEffect } from "react";

function Projects(props) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const defaultProjects = [
    {
      title: "DTEST Website",
      desc: "A comprehensive multi-page responsive website featuring modern UI components. Developed an admin dashboard for analytics, client portal for personalized views, service demonstration interfaces, business statistics display with charts, contact forms with validation, and fully responsive design across all devices.",
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      category: "Frontend",
      img: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fxpu17ov2ocz183dnayzn.png",
      codeLink: "https://github.com/Adshkumar/DTEST-Website",
      liveLink: "#",
    },
    {
      title: "UBER Backend",
      desc: "A comprehensive backend system simulating Uber's core functionality including user authentication, and driver management. Secured endpoints using JWT authentication, implemented real-time communication with Socket.IO for driver-passenger coordination, and designed efficient MongoDB schemas for data storage.",
      tags: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Socket.IO",
        "REST API",
      ],
      category: "Backend",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMnN_rKECoJRASNN1MVE7-9h_ZnkbNobckqQ&s",
      codeLink: "https://github.com/Adshkumar/UBER-Backend",
      liveLink: "#",
    },
    {
      title: "BLOGGIFY",
      desc: "A full-stack blog application with user authentication and CRUD operations for blog posts. Implemented secure user registration and login using JWT authentication with protected routes for personalized blog management. Features include user registration, blog creation, editing, deletion, and personal blog management dashboard.",
      tags: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "CRUD Operations",
        "Authentication",
      ],
      category: "Full Stack",
      img: "data:image/jpeg;base64,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",
      codeLink: "https://github.com/Adshkumar/BLOGGIFY",
      liveLink: "#",
    },
    {
      title: "Weather App",
      desc: "A responsive weather application that fetches real-time weather data using live weather API. Dynamically updates the UI based on API responses to provide an intuitive user experience across all device sizes.",
      tags: ["HTML", "CSS", "JavaScript", "Weather API"],
      category: "Frontend",
      img: "https://is1-ssl.mzstatic.com/image/thumb/Purple125/v4/ee/11/bd/ee11bd0a-7957-4f8f-ff3b-2578b235026f/pr_source.jpg/643x0w.jpg",
      codeLink: "https://github.com/Adshkumar/Weather-App",
      liveLink: "https://weather-tawny-zeta.vercel.app",
    },
  ];

  const projects = props.projects || defaultProjects;
  const sectionTitle = props.title || "My Projects";
  const sectionSubtitle =
    props.subtitle ||
    "A showcase of my development work and technical expertise";

  return (
    <section className="min-h-screen bg-[#f5f7fa] py-20 px-6 font-sans mt-5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-10 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          <h1 className="text-4xl sm:text-4xl font-bold text-gray-900 mb-3">
            {sectionTitle}
          </h1>
          <p className="text-gray-600 text-lg font-medium">{sectionSubtitle}</p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden border border-gray-100 transition-all duration-700 delay-${
                300 + index * 100
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative w-full h-44 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2 left-2 bg-[#00bfa6] text-white text-xs font-semibold px-2 py-1 rounded-full">
                  {project.category}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-xs mb-3 line-clamp-3">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded border border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <button className="flex items-center gap-1 bg-gray-900 text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-gray-800">
                    <i className="fa-solid fa-eye text-xs"></i> View
                  </button>
                  <div className="flex gap-2">
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 border border-gray-300 px-2 py-1.5 text-xs rounded-lg text-gray-700 hover:bg-gray-50 font-medium"
                    >
                      <i className="fa-brands fa-github text-xs"></i> Code
                    </a>

                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 border border-gray-300 px-2 py-1.5 text-xs rounded-lg text-gray-700 hover:bg-gray-50 font-medium"
                    >
                      <i className="fa-solid fa-link text-xs"></i> Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`bg-[#eef6f9] rounded-xl shadow-md text-center py-12 px-6 mb-16 transition-all duration-700 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mb-4 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it and discuss how we
            can bring your ideas to life.
          </p>
          <a
            href="/contact"
            className="mt-2 bg-[#0b2545] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#113a63] transition flex items-center justify-center mx-auto gap-2 w-fit"
          >
            Start a Project
            <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
          </a>
        </div>

          <footer 
          className={`text-center  border-t border-gray-200 pt-8 mt-10 transition-all duration-700 delay-1000 ${
            isVisible 
              ? 'opacity-100' 
              : 'opacity-0'
          }`}
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Adarsh Kumar</h3>
          <p className="text-gray-600 mb-4">
            New Delhi, India |{" "}
            <a
              href="mailto:adarsh99733207@gmail.com"
              className="text-[#0077b6] hover:underline"
            >
              adarsh99733207@gmail.com
            </a>
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 text-gray-600 mb-4">
            <a href="https://www.linkedin.com/in/adarsh-kumar-b52276343/" className="hover:text-[#0077b6] transition transform hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://github.com/Adshkumar" className="hover:text-[#333] transition transform hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="" className="hover:text-[#1DA1F2] transition transform hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/adsingh9.1/" className="hover:text-[#E1306C] transition transform hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Adarsh Kumar. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
}

export default Projects;
