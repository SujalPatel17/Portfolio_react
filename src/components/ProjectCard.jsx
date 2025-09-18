import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({  imageDesktop,imageMobile,  link }) => {
  const cardRef = useRef(null);

  useLayoutEffect(() => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        opacity: 0,
        scale: 0.97,
        filter: "blur(6px)",
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
          pinSpacing: false,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <a
      href={link || "#"}        // clickable link
      target="_blank"
      rel="noopener noreferrer"
      className="block cursor-pointer"   // pointer effect
    >
      <div
        ref={cardRef}
        className="sticky top-0 h-screen w-full overflow-hidden rounded-2xl"
      >
        {/* Desktop Image */}
        <img
          src={imageDesktop}
          alt={name}
          className="hidden md:block absolute top-0 left-0 h-full w-full object-cover rounded-2xl bg-[#1c232d]"
        />
        {/* Mobile Image */}
        <img
          src={imageMobile}
          alt={name}
          className="block md:hidden absolute top-0 left-0 h-full w-full object-cover rounded-2xl bg-[#1c232d]"
        />


        {/* Overlay for text with slight blur */}
        {/* <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 bg-neutral-900/10 backdrop-blur-sm z-10">
          <div className="ml-20 py-8">
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-serif font-semibold text-blue-500">
              {name}
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-neutral-300">{summary}</p>
          </div>
        </div> */}
      </div>
    </a>
  );
};

export default ProjectCard;
