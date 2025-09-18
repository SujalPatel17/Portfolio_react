import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <section className="flex w-full justify-center px-4 py-10 sm:px-12 md:pr-2">
      <div className="flex w-[1200px] flex-col-reverse items-center justify-between gap-2 md:flex-row md:gap-6">
        <div>
          <p className="text-sm text-neutral-400">
            © 2025 Sujal Patel . All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/sujalpatelll/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-4 py-2 text-sm text-neutral-400 transition-colors duration-300 hover:bg-white/10"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Sujalpatel17"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-4 py-2 text-sm text-neutral-400 transition-colors duration-300 hover:bg-white/10"
          >
            GitHub
          </a>
          <a
            href="mailto:patelsujal7624@gmail.com"
            className="rounded-lg px-4 py-2 text-sm text-neutral-400 transition-colors duration-300 hover:bg-white/10"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
