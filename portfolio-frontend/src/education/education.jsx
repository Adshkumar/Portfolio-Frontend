import React, { useEffect, useState } from 'react';

const Education = () => {
  const educationData = [
   {
      degree: "School",
      institution: "Kids Camp International School",
      period: "2019 – 2023", 
      location: "India",
      description: "Completed primary education with focus on holistic development. Participated in various extracurricular activities and developed strong foundational knowledge.",
      gpa: "Passed with Distinction"
    },
    {
      degree: "Collage",
      institution: "Chhotu Ram Rural Institute Of Technology",
      period: "2024 – 2027", 
      location: "India",
      description: "Pursuing undergraduate studies with a focus on COMPUTER SCIENCE. Actively involved in academic and extracurricular activities, developing technical skills, teamwork, and problem-solving abilities.",
      gpa: "Ongoing – Expected Graduation in 2027"
    }
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f7fa] w-full py-18 px-6 sm:px-10 font-sans">
      <div className="max-w-4xl mx-auto px-5 py-8">
        {/* Header Section */}
        <div
          className={`text-center mb-8 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-800">Education</h2>
          <p className="text-gray-600 mt-2 text-xl font-medium">
            My academic journey and learning milestones
          </p>

          <div className="border-t border-gray-300 my-6"></div>
        </div>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`bg-white border border-gray-200 rounded-lg p-6 shadow-sm transition-all duration-500 ease-out hover:shadow-xl hover:-translate-y-1 hover:scale-100 hover:border-gray-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >

              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-2 hover:text-[#2BABA9] transition-colors duration-300">
                  {edu.degree}
                </h3>
                <h4 className="text-lg font-semibold text-gray-700 hover:text-[#2BABA9] transition-colors duration-300">
                  {edu.institution}
                </h4>
              </div>

              <p className="text-gray-600 mb-4 font-normal text-[18px] sm:text-[16px] text-[#626d78]  leading-relaxed hover:text-gray-700 transition-colors duration-300">
                {edu.description}
              </p>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-3">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="font-medium hover:text-blue-600 transition-colors duration-300">{edu.period}</span>
                  <span>•</span>
                  <span className="hover:text-blue-600 transition-colors duration-300">{edu.location}</span>
                </div>
                <div className="text-sm font-semibold text-gray-800 bg-green-100 px-3 py-1 rounded-full hover:bg-green-200 hover:scale-105 transition-all duration-300">
                  {edu.gpa}
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mt-4 hover:border-blue-200 transition-colors duration-300">
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`bg-[#eef6f9] rounded-xl shadow-md text-center py-12 px-6 max-w-3xl mx-auto transition-all duration-700 hover:shadow-xl hover:-translate-y-1 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 hover:text-[#2BABA9] transition-colors duration-300">
          Let's Work Together
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mb-6 hover:text-gray-700 transition-colors duration-300">
          I'm always interested in hearing about new opportunities and exciting projects.
        </p>
        <a
          href="/contact"
          className="bg-[#0b2545] text-white px-6 py-3 rounded-md text-sm sm:text-base font-medium hover:bg-[#113a63] hover:scale-105 hover:shadow-lg transition-all duration-300"
        >
          Get in Touch
        </a>
      </div>

      {/* Footer */}
      <footer
        className={`text-center border-t border-gray-200 pt-8 mt-10 transition-all duration-700 delay-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-black-600 transition-colors duration-300">
          Adarsh Kumar
        </h3>
        <p className="text-gray-600 mb-4">
          New Delhi, India |{" "}
          <a
            href="mailto:adarsh99733207@gmail.com"
            className="text-[#0077b6] hover:text-gary-700 hover:underline transition-colors duration-300"
          >
            adarsh99733207@gmail.com
          </a>
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-gray-600 mb-4">
          <a
            href="https://www.linkedin.com/in/adarsh-kumar-b52276343/"
            className="hover:text-[#0077b6] transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="https://github.com/Adshkumar"
            className="hover:text-[#333] transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href=""
            className="hover:text-[#1DA1F2] transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/adsingh9.1/"
            className="hover:text-[#E1306C] transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>

        <p className="text-gray-500 text-sm hover:text-gray-600 transition-colors duration-300">
          © {new Date().getFullYear()} Adarsh Kumar. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Education;