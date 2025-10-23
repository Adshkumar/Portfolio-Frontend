import React, { useState, useEffect } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const navLinks = [
    { href: "/home", label: "Home", color: "text-[#5cbcbc]" },
    { href: "/about", label: "About", color: "text-[#748393]" },
    { href: "/experiences", label: "Experiences", color: "text-[#748393]" },
    { href: "/education", label: "Education", color: "text-[#748393]" },
    { href: "/projects", label: "Projects", color: "text-[#748393]" },
    { href: "/contact", label: "Contact", color: "text-[#748393]" },
    { 
      href: "/Adarsh kumar Resume.pdf",  
      label: "Get My Resume", 
      color: "text-[#5cbcbc]",
      
      download: "Adarsh-Kumar-Resume.pdf"
    }
  ];

  return (
    <nav 
      className={`flex items-center justify-between px-4 sm:px-8 lg:px-22 py-4 shadow-sm fixed w-full top-0 z-50 font-sans bg-[#e0e8f1] transition-all duration-500 ${
        isScrolled ? 'bg-gradient-to-r from-blue-50 to-indigo-50 backdrop-blur-lg border-b border-white/20 shadow-xl py-3'  : 'bg-[#e0e9f1]'
      } ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
      }`}
    >
      {/* Logo Section */}
      <div 
        className={`flex items-center space-x-2 gap-3 transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}
      >
        <img
          className="w-7 h-7 object-contain transition-all duration-300 hover:scale-110"
          src="https://www.sarthaksharma.com.np/Logo.png"
          alt="Adarsh Kumar Logo"
        />
        <span className="text-lg sm:text-xl font-medium text-gray-800 transition-all duration-300 hover:text-[#5cbcbc]">
          Adarsh Kumar
        </span>
      </div>

      <div className="hidden md:flex items-center space-x-6 lg:space-x-8 font-medium">
        {navLinks.map((link, index) => (
          <a 
            key={link.href}
            href={link.href} 
            className={`${link.color} hover:text-black transition-all duration-300 relative group ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-5'
            }`}
            style={{
              transitionDelay: isVisible ? `${index * 100 + 300}ms` : '0ms'
            }}
            {...(link.download && { 
              target: "_blank", 
              rel: "noopener noreferrer" 
            })}
          >
            {link.label}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5cbcbc] transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>

      <div 
        className={`md:hidden transition-all duration-700 delay-400 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}
      >
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-700 hover:text-[#5cbcbc] transition-all duration-300 transform hover:scale-110"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>
      </div>

      <div 
        className={`absolute top-full left-0 w-full bg-white shadow-lg md:hidden transition-all duration-500 ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0 max-h-96' 
            : 'opacity-0 -translate-y-10 max-h-0 overflow-hidden'
        }`}
      >
        <div className="flex flex-col py-4 px-6 space-y-4">
          {navLinks.map((link, index) => (
            <a 
              key={link.href}
              href={link.href} 
              className={`text-gray-700 hover:text-[#5cbcbc] transition-all duration-300 transform text-center font-medium text-xl ${
                isMenuOpen 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-10'
              }`}
              style={{
                transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms'
              }}
              onClick={() => setIsMenuOpen(false)}
              {...(link.download && { 
                target: "_blank", 
                rel: "noopener noreferrer" 
              })}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;