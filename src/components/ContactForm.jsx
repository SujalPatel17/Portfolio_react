import React, { useRef } from "react";
import useStore from "../store/store"; // Zustand or your custom store
// import CloseButton from "./CloseButton";

const ContactForm = () => {
  const { isContactFormOpen, setIsContactFormOpen } = useStore();
  const cardRef = useRef(null);

  const handleClose = () => {
    setIsContactFormOpen();
  };

  return (
    <div
      className={`fixed inset-0 top-0 flex h-full w-full items-center justify-center bg-neutral-900/50 backdrop-blur-3xl transition-all duration-500 ${
        isContactFormOpen
          ? "pointer-events-auto z-40 opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      <div ref={cardRef} className="w-full sm:w-[32rem]">
        {/* Contact Form UI */}
        <form className="flex w-full flex-col gap-4 rounded-3xl bg-neutral-950 p-6 sm:px-8">
          {/* Close Button */}
          <CloseButton onClick={handleClose} />

          {/* Name */}
          <div className="flex flex-col gap-1">
            <p className="text-sm">Full Name *</p>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full rounded-lg bg-neutral-900 px-4 py-3 text-white placeholder-neutral-500 outline-none focus:border focus:border-blue-600"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <p className="text-sm">Email *</p>
            <input
              type="email"
              placeholder="example@email.com"
              className="w-full rounded-lg bg-neutral-900 px-4 py-3 text-white placeholder-neutral-500 outline-none focus:border focus:border-blue-600"
            />
          </div>

          {/* Subject */}
          <div className="flex flex-col gap-1">
            <p className="text-sm">Subject *</p>
            <input
              type="text"
              placeholder="Let's collaborate!"
              className="w-full rounded-lg bg-neutral-900 px-4 py-3 text-white placeholder-neutral-500 outline-none focus:border focus:border-blue-600"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1">
            <p className="text-sm">Message *</p>
            <textarea
              rows={3}
              placeholder="Your message here..."
              className="w-full resize-none rounded-lg bg-neutral-900 px-4 py-3 text-white placeholder-neutral-500 outline-none focus:border focus:border-blue-600"
            />
          </div>

          {/* Submit Button (UI only) */}
          <button
            type="button"
            className="mt-2 w-full gap-4 rounded-full border border-blue-600 bg-blue-600 px-8 py-3 transition-colors duration-500 hover:bg-neutral-900"
          >
            Send Message
          </button>

          {/* Direct Email Option */}
          <p className="mb-2 text-center text-xs text-neutral-400">
            Do not like forms?{" "}
            <a
              href="mailto:someone@example.com"
              className="text-neutral-300 hover:underline"
            >
              someone@example.com
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
