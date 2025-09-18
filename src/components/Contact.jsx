import React, { useRef } from "react";
import useStore from "../store/store";
import { useViewportAnimation } from "../store/useViewportAnimation";

const Contact = () => {
  const { setIsContactFormOpen } = useStore();
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const buttonRef = useRef(null);

  useViewportAnimation([headingRef, subHeadingRef, buttonRef]);

  return (
    <section id="contact"
    className="flex h-full w-full items-center justify-center bg-background px-4 py-24 sm:px-12">
      <div className="flex flex-col items-center gap-4 sm:gap-8 lg:w-[1024px]">
        {/* Heading */}
        <h2
          ref={headingRef}
          className="text-center text-white text-3xl font-light leading-snug opacity-0 sm:pt-12 md:text-6xl lg:text-7xl"
        >
          Let&apos;s Explore New <br /> Possibilities.
        </h2>

        {/* Sub-Heading */}
        <p
          ref={subHeadingRef}
          className="text-center text-sm font-light text-neutral-400 opacity-0 sm:w-3/4 md:w-2/3 md:text-xl"
        >
          Reach out by filling out the form below, and let&apos;s start turning
          your ideas into reality!
        </p>

        {/* Contact Button */}
        <button
          ref={buttonRef}
          onClick={setIsContactFormOpen}
          className="mt-2 gap-4 rounded-full border border-blue-600 bg-blue-600 px-10 py-2 opacity-0 transition-colors duration-500 hover:bg-neutral-900"
        >
          Contact
        </button>
      </div>
    </section>
  );
};

export default Contact;
