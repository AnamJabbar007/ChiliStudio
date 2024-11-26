import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", url: "#home" },
    { name: "What we do", url: "#WhatWeDo" },
  ];

  return (
    <nav className=" z-50 border-b border-neutral-700/80  p-5">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h3 className="text-xl">studio36</h3>

        {/* Hamburger Menu for Mobile */}
        <button
          className=" text-2xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                className="hover:underline underline-offset-[27px] transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navigation */}
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden mt-4 space-y-4 text-center`}
      >
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.url}
              className="hover:underline underline-offset-8 decoration-white transition-colors block"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
