import { useEffect, useState, useRef } from "react";

const CursorBlob = ({ hidden = false, color = "white" }) => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [blobPos, setBlobPos] = useState({ x: -100, y: -100 });
  const requestRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        setMousePos({ x: touch.clientX, y: touch.clientY });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  const animate = () => {
    setBlobPos((prev) => ({
      x: prev.x + (mousePos.x - prev.x) * 0.15,
      y: prev.y + (mousePos.y - prev.y) * 0.15,
    }));
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [mousePos]);

  if (hidden) return null;

  return (
    <div
      className="pointer-events-none fixed w-16 h-16 rounded-full opacity-60 blur-2xl mix-blend-screen shadow-[0_0_80px_white] z-20"
      style={{
        transform: `translate(${blobPos.x - 32}px, ${blobPos.y - 32}px)`,
        backgroundColor: color, // allows different blob color
      }}
    />
  );
};

export default CursorBlob;
