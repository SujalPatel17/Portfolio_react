import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { animate, stagger } from "motion";
import imggg from '../assets/filemenu.svg'

const handleScrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  setIsOpen(false); // close mobile menu
};


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    animate(
      ".desktop-nav li",
      { opacity: [0, 1], y: [50, 0] },
      { delay: stagger(0.35) }
    );
  }, []);

  useEffect(() => {
    if (isOpen) {
      animate(
        ".mobile-nav li",
        { opacity: [0, 1], y: [50, 0] },
        { delay: stagger(0.35) }
      );
    }
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-around items-center transition-all duration-300
      ${scrolled ? "bg-black/50 backdrop-blur-md" : "bg-transparent"}`}
    >
      <h1 className="text-white text-lg text-left md:text-xl lg:text-2xl font-[montserratAlt1] tracking-widest ">SUJAL PATEL</h1>

      {/* Desktop Menu */}
      <ul className="hidden text-base md:flex gap-12 desktop-nav">
        <li><a onClick={handleScrollToTop} className="text-white hover:text-blue-600 cursor-pointer">About</a></li>
        <li><a href="#projects" className="text-white hover:text-blue-600">Projects</a></li>
        <li><a href="#Expertise" className="text-white hover:text-blue-600">Skills</a></li>
        <li><a href="#contact" className="text-white hover:text-blue-600">Contact</a></li>
      </ul>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <img src={imggg} alt="menu" className="w-8 h-8" />
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full text-white bg-black/30 backdrop-blur-md flex flex-col gap-4 py-4 items-center mobile-nav md:hidden">
          <li><a href="" onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setIsOpen(false); // close mobile menu
            }}>About</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#Expertise" onClick={() => setIsOpen(false)}>Skills</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
        
      )}
    </nav>
  );
};

export default Header;
