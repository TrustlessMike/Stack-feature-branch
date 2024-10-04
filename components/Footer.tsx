import React, { useState, useEffect } from 'react';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset + window.innerHeight >= document.documentElement.scrollHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <footer className={`bg-gray-50 py-6 px-4 text-gray-600 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        <nav className="flex space-x-6 mb-4 md:mb-0">
          <a
            href="#"
            className="hover:text-green-600 transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#"
            className="hover:text-green-600 transition-colors duration-200"
          >
            Privacy
          </a>
          <a
            href="#"
            className="hover:text-green-600 transition-colors duration-200"
          >
            Terms
          </a>
          <a
            href="#"
            className="hover:text-green-600 transition-colors duration-200"
          >
            Contact
          </a>
        </nav>
        <div>
          © 2024 <span className="text-green-600 font-semibold">Stack</span>.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}
