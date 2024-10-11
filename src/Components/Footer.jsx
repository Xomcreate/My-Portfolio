import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  // Scroll-to-Top functionality
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black py-5 text-white">
      <div className="container mx-auto px-4 text-center">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          {/* <a
            href="https://www.linkedin.com/in/david-igboanusi-757a66270/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-500 transition duration-300"
          >
            <FaLinkedin />
          </a> */}
          <a
            href="https://github.com/Xomcreate"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-400 transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://web.facebook.com/prisca.ojimba.52"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 text-3xl transition-colors duration-300"
          >
            <FaFacebook />
          </a>

          
        </div>

        {/* Footer Links */}
        <div className="mb-8">
          <ul className="flex justify-center space-x-6 text-sm">
            <li>
              <a href="#about" className="hover:underline hover:text-blue-500 transition duration-300">
                About Me
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:underline hover:text-blue-500 transition duration-300">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline hover:text-blue-500 transition duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Scroll-to-Top Button */}
        <button
          onClick={handleScrollToTop}
          className="text-white bg-[orangered] hover:bg-blue-800 p-2 rounded-full transition duration-300"
          aria-label="Scroll to top"
        >
          ↑
        </button>

        {/* Footer Text */}
        <div className="mt-8 text-sm text-white-400">
          <p>&copy; {new Date().getFullYear()} Ojimba Prisca Chisom. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
