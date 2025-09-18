import { useEffect, useRef } from "react";
import gsap from "gsap";

const defaultOptions = {
  threshold: 0.25,
  rootMargin: "50px",
  animationDuration: 0.75,
  animationEase: "power3.out",
  initialScale: 0.75,
};

export const useViewportAnimation = (elements, options = {}) => {
  const observerRef = useRef(null);

  useEffect(() => {
    const { threshold, rootMargin, animationDuration, animationEase, initialScale } = {
      ...defaultOptions,
      ...options,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            entry.target,
            { opacity: 0, scale: initialScale },
            {
              opacity: 1,
              scale: 1,
              duration: animationDuration,
              ease: animationEase,
            }
          );
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, { threshold, rootMargin });

    // Observe all refs
    elements.forEach((ref) => {
      if (ref.current) {
        observerRef.current.observe(ref.current);
      }
    });

    // Cleanup
    return () => observerRef.current?.disconnect();
  }, [elements, options]);
};
