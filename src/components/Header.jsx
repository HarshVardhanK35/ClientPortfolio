import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white py-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">Lakshmi Pravallika Bhupathi</h1>
        <nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none text-3xl"
            >
              {isOpen ? '✕' : '☰'}
            </button>
          </div>

          <ul
            className={`${
              isOpen
                ? 'fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex flex-col justify-center items-center space-y-6'
                : 'hidden'
            } md:flex md:space-x-4 md:items-center`}
          >
            <li>
              <a
                href="#home"
                className="bg-white text-blue-600 px-3 py-1.5 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="bg-white text-blue-600 px-3 py-1.5 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="bg-white text-blue-600 px-3 py-1.5 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="bg-white text-blue-600 px-3 py-1.5 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="bg-white text-blue-600 px-3 py-1.5 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="bg-white text-blue-600 px-3 py-1.5 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
