import React, { useEffect, useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'adarsh99733207@gmail.com'
      }

      const result = await emailjs.send(
        'service_x0sy42u',
        'template_7bo0vzp',
        templateParams,
        '_eHBMY-KRplqBDnul'
      )



      // const response = await fetch('http://localhost:5000/contact', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData)
      // });

      // if (response.ok)
           if (result.status === 200) {

        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {

        setSubmitStatus('error');
      }
    } catch (error) {

      setSubmitStatus('error');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#f5f7fa] py-18 px-6 sm:px-10 font-sans mt-10">
      <div className="max-w-4xl mx-auto">
        <div 
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-10'
          }`}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Get in Touch</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            Let's discuss your project and how I can help bring your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          <div 
            className={`transition-all duration-700 delay-300 ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-10'
            }`}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Let's Start a Conversation</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I'm always excited to work on new projects and collaborate with passionate people. Whether you have a specific project in mind or just want to explore possibilities, I'd love to hear from you.
            </p>

            <div className="space-y-6 mb-8">
              {/* Email */}
              <div 
                className={`flex items-start gap-4 transition-all duration-500 delay-400 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-5'
                }`}
              >
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#2BABA9]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <a href="mailto:adarsh99733207@gmail.com?subject=Hello&body=Hi%20there," className="text-[#2BABA9] hover:text-[#248a88] transition-colors">
                    adarsh99733207@gmail.com
                  </a>
                  <p className="text-gray-600 text-sm mt-1">Send me an email anytime!</p>
                </div>
              </div>

              {/* Location */}
              <div 
                className={`flex items-start gap-4 transition-all duration-500 delay-500 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-5'
                }`}
              >
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#2BABA9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                  <a href="Delhi" target="_blank" rel="noopener noreferrer" className="text-[#2BABA9] hover:text-[#248a88] transition-colors">
                    New Delhi
                  </a>
                  <p className="text-gray-600 text-sm mt-1">Available for remote work worldwide!</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-300 my-8"></div>

            {/* Services */}
            <div 
              className={`transition-all duration-700 delay-600 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">What I Can Help With</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#2BABA9] rounded-full"></span>
                  Full-stack web application development
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#2BABA9] rounded-full"></span>
                  E-commerce and business solutions
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#2BABA9] rounded-full"></span>
                  Code review and technical consultation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#2BABA9] rounded-full"></span>
                  Performance optimization and scaling
                </li>
              </ul>
            </div>
          </div>

          <div 
            className={`transition-all duration-700 delay-400 ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-10'
            }`}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send me a message</h2>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div 
                className={`transition-all duration-500 delay-500 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-5'
                }`}
              >
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name
                </label>
                <div className="border border-gray-300 rounded-lg px-4 py-3 bg-white">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className="w-full outline-none text-gray-700 placeholder-gray-400"
                    required
                  />
                </div>
              </div>

              {/* Email Input */}
              <div 
                className={`transition-all duration-500 delay-600 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-5'
                }`}
              >
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address
                </label>
                <div className="border border-gray-300 rounded-lg px-4 py-3 bg-white">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="w-full outline-none text-gray-700 placeholder-gray-400"
                    required
                  />
                </div>
              </div>

              {/* Message Input */}
              <div 
                className={`transition-all duration-500 delay-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-5'
                }`}
              >
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Message
                </label>
                <div className="border border-gray-300 rounded-lg px-4 py-3 bg-white">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, ideas, or how I can help you..."
                    rows="4"
                    className="w-full outline-none text-gray-700 placeholder-gray-400 resize-none"
                    required
                  ></textarea>
                </div>
              </div>

              {submitStatus === 'success' && (
                <div className="p-3 bg-green-100 text-green-700 rounded-lg">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-3 bg-red-100 text-red-700 rounded-lg">
                  Sorry, there was an error sending your message. Please try again.
                </div>
              )}

              <div 
                className={`transition-all duration-500 delay-800 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-5'
                }`}
              >
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-[#2BABA9] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 ${
                    isSubmitting 
                      ? 'opacity-50 cursor-not-allowed' 
                      : 'hover:bg-[#248a88]'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>

            <div 
              className={`mt-8 p-4 bg-gray-50 rounded-lg transition-all duration-700 delay-900 ${
                isVisible 
                  ? 'opacity-100' 
                  : 'opacity-0'
              }`}
            >
              <p className="text-gray-600 text-center">
                You can also reach me directly at{" "}
                <strong className="text-gray-900">adarsh99733207@gmail.com</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
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
};

export default Contact;