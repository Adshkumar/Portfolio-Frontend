import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const LowerHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen bg-[#f5f7fa] py-16 px-6 sm:px-10 font-sans">
      <div className="max-w-5xl mx-auto">
        <div 
          className={`text-center mb-10 transition-all duration-700 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-10'
          }`}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Learning, Growing, Building
          </h1>
          <p className="text-lg text-gray-600">
            Always learning, always building — turning ideas into meaningful experiences.
          </p>
        </div>

        <div 
          className={`max-w-3xl mx-auto mb-16 transition-all duration-700 delay-200 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-lg sm:text-xl sm:text-[18px] text-gray-700 leading-relaxed text-center font-normal font- text-[#626d78] leading-relaxed">
            I'm a passionate full-stack developer based in Delhi specializing in React,
            Node.js, and modern web technologies. With a focus on clean code, user
            experience, and scalable solutions, I transform ideas into powerful digital products.
          </p>
        </div>

        <div 
          className={`grid grid-cols-1 md:grid-cols-3 gap-10 mb-16 text-center transition-all duration-700 delay-400 ${
            isVisible 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-95'
          }`}
        >
          <div className="transition-all duration-500 hover:scale-105">
            <div className="text-4xl font-bold text-[#5cbcbc] mb-2">As Intern</div>
            <div className="text-lg font-semibold text-gray-800 mb-1">Years Experience</div>
            <div className="text-gray-600 text-sm">
              Professional journey collaborating with teams
            </div>
          </div>

          {/* Projects */}
          <div className="transition-all duration-500 hover:scale-105">
            <div className="text-4xl font-bold text-[#5cbcbc] mb-2">5+</div>
            <div className="text-lg font-semibold text-gray-800 mb-1">Projects Completed</div>
            <div className="text-gray-600 text-sm">
              From frontend-only to full-stack applications
            </div>
          </div>

          {/* Learning */}
          <div className="transition-all duration-500 hover:scale-105">
            <div className="text-4xl font-bold text-[#5cbcbc] mb-2">∞</div>
            <div className="text-lg font-semibold text-gray-800 mb-1">Learning Journey</div>
            <div className="text-gray-600 text-sm">
              Constantly exploring new technologies and best practices
            </div>
          </div>
        </div>

        {/* Divider - Fades in */}
        {/* <div 
          className={`border-t border-gray-300 my-10 transition-all duration-700 delay-600 ${
            isVisible 
              ? 'opacity-100' 
              : 'opacity-0'
          }`}
        ></div> */}

        {/* Footer Section - Slides up */}
          <footer 
          className={`text-center  border-t border-gray-200 pt-5 mt-10 transition-all duration-700 delay-1000 ${
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
};

export default LowerHero;