import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = ({ onAnimationComplete }) => {
  const [startAnimation, setStartAnimation] = useState(false);
  const containerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
    setStartAnimation(true);

    // notify parent
    const timer = setTimeout(() => {
      onAnimationComplete && onAnimationComplete();
    }, 1500);

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

useLayoutEffect(() => {
  if (containerRef.current) {
    gsap.to(containerRef.current, {
      opacity: 0,         // fade out
      scale: 0.9,         // shrink slightly
      filter: "blur(6px)",// blur
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",   // start animating when About hits top
        end: "bottom top",  // finish when About scrolls out
        scrub: true,
        pin: true,          // keep About "stuck" while fading
        pinSpacing: false,  // don’t add extra white space
      },
    });
  }

  return () => {
    ScrollTrigger.getAll().forEach((t) => t.kill());
  };
}, []);

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative h-screen flex justify-center items-center bg-black overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-white/5
            bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),
                linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)]
            bg-[size:6rem_4rem]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF/30,transparent)] animate-pulse-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_30%_40%,#FF00B6/15,transparent)] animate-pulse-slow delay-500" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_70%_70%,#00FFFF/10,transparent)] animate-pulse-slow delay-1000" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.05),rgba(255,255,255,0))] animate-move-slow" />
      </div>

      {/* Top Line */}
      <motion.div
        initial={{ y: 0, opacity: 1 }}
        animate={startAnimation ? { y: "-300px", opacity: 0 } : { y: 0, opacity: 1 }}
        transition={{ duration: 2.2, ease: "easeOut", delay: 0.2  }}
          className="absolute left-0 right-0 h-[2px] bg-white top-1/2"
  style={{ transform: "translateY(-50%)" }}
      />

      {/* Bottom Line */}
      <motion.div
        initial={{ y: 0, opacity: 1 }}
        animate={startAnimation ? { y: "300px", opacity: 0 } : { y: 0, opacity: 1 }}
        transition={{ duration: 2.2, ease: "easeOut", delay: 0.2  }}
          className="absolute left-0 right-0 h-[2px] bg-white top-1/2"
  style={{ transform: "translateY(-50%)" }}
      />

      {/* Left Blob */}
    <div className="absolute top-1/2 left-10 h-[300px] w-[300px] rounded-full 
    bg-[radial-gradient(circle,rgba(255,0,182,0.2),transparent)] 
    animate-blob-left z-0"
    style={{ transform: "translateY(-50%)" }}
    ></div>
    
{/* Right Blob */}
<div
  className="absolute top-1/2 right-[-250px] h-[300px] w-[300px] rounded-full 
  bg-[radial-gradient(circle,rgba(0,255,255,0.15),transparent)] 
  animate-blob-right z-0"
  style={{ transform: "translateY(-50%)" }}
></div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={startAnimation ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.0, duration: 1.5, ease: "easeOut" }}
        className="flex flex-col text-center justify-center items-center px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="md:text-8xl text-5xl font-[rockville] font-bold mb-9 tracking-[0.15em] text-white"
          data-aos="fade-down"
        >
          Sujal Patel
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={startAnimation ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-4xl mb-4 font-[asimovian] text-blue-400"
          data-aos="fade-up"
        >
          <TypeAnimation
            sequence={["Javascript Developer", 2000, "React . Js Developer", 2000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-xl sm:text-base md:text-lg lg:text-2xl max-w-full md:max-w-2xl text-white font-serif tracking-wide"
          />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={startAnimation ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl max-w-full md:max-w-2xl  mb-4 sm:mb-5  font-poppins text-gray-500 text-center "
          data-aos="fade-up"
        >
          I am a passionate Web Developer with expertise in HTML, CSS, JavaScript, React Js, Tailwind CSS, and modern web technologies. I enjoy building clean, responsive, and user-friendly applications while constantly exploring new tools to bring creative ideas to life.
        </motion.p>

        <motion.a
          href="./src/assets/SujalPatel_Resume.pdf"
          download
          initial={{ scale: 0.8, opacity: 0 }}
          animate={startAnimation ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
          data-aos="zoom-in"
        >
          Download Resume
        </motion.a>

        <motion.div
          className="flex gap-6 mt-6 text-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          data-aos="fade-up"
        >
          <a href="https://github.com/SujalPatel17" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-300 hover:text-black transition-transform hover:scale-110" />
          </a>
          <a href="https://www.linkedin.com/in/sujalpatelll/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-gray-300 hover:text-blue-500 transition-transform hover:scale-110" />
          </a>
          <a href="https://instagram.com/sujalpatell_" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-gray-300 hover:text-pink-500 transition-transform hover:scale-110" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
