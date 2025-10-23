import React, { useState, useEffect } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="h-screen bg-[#cfdce5] px-4 font-sans flex items-center justify-center overflow-hidden relative">

      <div className="max-w-3xl mx-auto w-full mt-10">
        <div className="text-center mb-8">
          <div 
            className={`inline-block bg-[#2BABA930] rounded-lg px-4 py-2 mb-4 transition-all duration-700 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-10'
            }`}
          >
            <h1 className="text-xl font-bold text-gray-900">Hi there! I'm</h1>
          </div>

          <h1 
            className={`text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 transition-all duration-800 delay-200 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            Adarsh <span className="text-teal-500">Kumar</span>
          </h1>

          {/* Tagline - Fades in */}
          <p 
            className={`text-lg sm:text-2xl text-gray-600 mb-6 max-w-2xl mx-auto transition-all duration-700 delay-400 ${
              isVisible 
                ? 'opacity-100' 
                : 'opacity-0'
            }`}
          >
            Crafting Seamless Experiences with{" "}
            <span className="font-semibold text-gray-800 text-2xl">
              Code & Creativity
            </span>
          </p>

          <p 
            className={`text-[18px] sm:text-[16px] text-[#626d78] max-w-[780px] mx-auto mb-8 text-center leading-relaxed tracking-wide transition-all duration-700 delay-600 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            Full-stack developer passionate about building modern web
            applications that solve real-world problems with elegant,
            user-centered design.
          </p>
        </div>

        <div 
          className={`flex flex-col sm:flex-row gap-4 justify-center mb-8 transition-all duration-700 delay-800 ${
            isVisible 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-95'
          }`}
        >
          <a
            href="/contact"
            className="bg-[#0C2640] text-white hover:bg-[#6B7280] font-medium py-3 px-8 rounded-lg transition-all duration-300 inline-block text-center hover:scale-105 transform"
          >
            Get In Touch →
          </a>
          <a
            href="/projects"
            className="bg-white text-black hover:bg-[#2BABA930] font-medium py-3 px-8 rounded-lg transition-all duration-300 inline-block text-center hover:scale-105 transform"
          >
            Explore Projects →
          </a>
        </div>

    
       <div 
          className={`text-center mb-6 transition-all duration-700 delay-1000 ${
            isVisible 
              ? 'opacity-100' 
              : 'opacity-0'
          }`}
        >
          <a
            href="/experiences"
            className="bg-[#2BABA9] text-white font-medium text-gray-800 mb-4 inline-block hover:text-gray-600 border-b-2 border-transparent hover:border-gray-800 hover:bg-gray-100 transition-all duration-300 py-3 px-7 rounded-lg no-underline hover:scale-105 transform"
          >
            Work Experience 💼
          </a>
        </div>
      </div>

      <div 
        className={`absolute bottom-13 left-0 right-0 text-center transition-all duration-700 delay-1200 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <a
          href="/more"
          className="text-teal-400 transition-all duration-300 font-medium text-lg no-underline flex flex-col items-center gap-2"
        >
          <span className="animate-bounce text-[#626d78] font-medium">Explore More</span>
          <span className="text-2xl animate-bounce">🖱️</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;