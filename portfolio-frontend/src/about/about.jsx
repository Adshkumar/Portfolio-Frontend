import React, { useState, useEffect } from "react";
import LowerAbout from './lowerabout';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen bg-[#f5f7fa] pt-24 pb-12 px-6 sm:px-8 font-sans">
      <div className="max-w-4xl mx-auto">

        <div 
          className={`text-center mb-8 transition-all duration-700 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-10'
          }`}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-1">About Me</h1>
          <p className="text-lg text-gray-600 sm:text-[15px] text-[#626d78] font-medium text-center leading-relaxed tracking-wide">
            Get to know the person behind the code
          </p>
        </div>

        <div 
          className={`flex justify-center transition-all duration-700 delay-200 ${
            isVisible 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-90'
          }`}
        >
          <div className="w-48 h-48 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center">
            <img
              src="/images/adarsh.jpg"
              alt="Your Photo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div 
            className={`lg:col-span-2 transition-all duration-700 delay-300 ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-10'
            }`}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Who I Am</h2>
            <div className="sm:text-[14px] text-[#626d78] font-medium mx-auto mb-8 text-center leading-relaxed tracking-wide">
              <p className="mb-4">
                Hello! I'm Adarsh Kumar, a passionate full-stack developer based
                in the beautiful city of New Delhi. My journey in software
                development began with a simple curiosity about how websites
                work, and it has evolved into a deep passion for creating
                meaningful digital experiences.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or hiking through the
                stunning landscapes of Nepal. I believe that the best software
                is built by developers who understand both the technical and
                human sides of technology.
              </p>
            </div>

            <div 
              className={`mt-8 transition-all duration-700 delay-500 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                What am I up to Recently?
              </h2>
              <div className="bg-gray-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md">
                <p className="text-gray-700">
                  I am currently studying:{" "}
                  <span className="font-semibold">
                    Data Structures & Algorithms with JavaScript
                  </span>
                </p>
                <p className="text-gray-700 py-1">
                  - Self learning through Youtube
                </p>

                <div 
                  className={`mt-3 transition-all duration-700 delay-700 ${
                    isVisible 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-95'
                  }`}
                >
                  <h3 className="text-gray-700 font-semibold mb-2">
                    Progress Bar
                  </h3>
                  <div className="w-full bg-gray-100 rounded-full h-2.5">
                    <div
                      className="bg-[#2BABA9] h-2.5 rounded-full transition-all duration-1000 delay-1000"
                      style={{ 
                        width: isVisible ? "40%" : "0%",
                        transition: "width 1s ease-in-out 1s"
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div 
                className={`mt-8 transition-all duration-700 delay-800 ${
                  isVisible 
                    ? 'opacity-100' 
                    : 'opacity-0'
                }`}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  What Drives Me
                </h2>
                <p className="sm:text-[16px] text-[#626d78] font-medium mx-auto mb-8 leading-relaxed tracking-wid">
                  I'm driven by the desire to solve real-world problems through
                  technology. Whether it's building an e-commerce platform that
                  helps local businesses reach global markets or creating
                  educational tools that make learning more accessible, I find
                  purpose in code that makes a difference.
                </p>
              </div>
            </div>
          </div>
          <div 
            className={`lg:col-span-1 transition-all duration-700 delay-400 ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-10'
            }`}
          >
            <h2 className="text-2xl font-medium font-black text-gray-900 mb-6">
              Core Values
            </h2>
            <div className="space-y-8">
              <div 
                className={`flex items-start gap-4 transition-all duration-500 delay-500 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-5'
                }`}
              >
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:scale-110">
                  <svg
                    className="w-5 h-5 text-[#2BABA9]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    User First
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-[13px] text-[#626d78] font-medium mx-auto leading-relaxed tracking-wide">
                    Every line of code I write is with the end user in mind,
                    creating intuitive and accessible experiences.
                  </p>
                </div>
              </div>

              <div 
                className={`flex items-start gap-4 transition-all duration-500 delay-600 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-5'
                }`}
              >
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:scale-110">
                  <svg
                    className="w-5 h-5 text-[#2BABA9]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Quality Code
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-[13px] text-[#626d78] font-medium mx-auto leading-relaxed tracking-wide">
                    I believe in writing clean, maintainable code that stands
                    the test of time and scales with your business.
                  </p>
                </div>
              </div>
              <div 
                className={`flex items-start gap-4 transition-all duration-500 delay-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-5'
                }`}
              >
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:scale-110">
                  <svg
                    className="w-5 h-5 text-[#2BABA9]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Always Learning
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-[13px] text-[#626d78] font-medium mx-auto leading-relaxed tracking-wide">
                    Technology evolves rapidly, and I stay at the forefront by
                    continuously learning and experimenting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div 
          className={`transition-all duration-700 delay-900 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          {/* <LowerAbout /> */}
        </div>

       <footer 
          className={`text-center  border-t border-gray-200 pt-8 mt-10 transition-all duration-700 delay-1000 ${
            isVisible 
              ? 'opacity-100' 
              : 'opacity-0'
          }`}
        >
          {/* <h3 className="text-lg font-semibold text-gray-900 mb-2">Adarsh Kumar</h3> */}
          <p className="text-gray-600 mb-4">
            New Delhi, India |{" "}
            <a
              href="mailto:adarsh99733207@gmail.com"
              className="text-[#0077b6] hover:underline"
            >
              adarsh99733207@gmail.com
            </a>
          </p>

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
};

export default About;