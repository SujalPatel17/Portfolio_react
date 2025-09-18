import React from "react";
import resppp from '../assets/work_logo/responsive.png'
export default function Extras() {
  return (
    <section className="bg-black text-white py-16 px-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-light font-serif leading-snug sm:text-5xl md:text-6xl">
          Crafting Code,
        </h2>
        <h2 className="text-3xl font-light font-serif leading-snug sm:text-5xl md:text-6xl">
          Creating Impact.
        </h2>
      </div>

      {/* Grid */}
        
      <div className="columns-1 md:columns-2 gap-6 max-w-5xl mx-auto [align-items:start]">
      {/* Card 1 - Innovative Solutions */}
      <div className="break-inside-avoid mb-6 bg-neutral-900 p-6 rounded-2xl shadow hover:shadow-xl transition">
        <h3 className="text-lg font-semibold font-[MontserratAlt1] mb-2">Innovative Solutions</h3>
        <p className="text-gray-400 text-sm sm:text-base">
          I design and deliver forward-thinking solutions that simplify processes, boost efficiency, and empower businesses to scale. Whether it’s automating repetitive tasks or creating systems for growth, I build solutions that make a real impact.
        </p>
      </div>

      {/* Card 2 - Responsive Web */}
      <div className="break-inside-avoid mb-6 bg-neutral-900 p-6 rounded-2xl shadow hover:shadow-xl transition">

      <h3 className="text-lg font-semibold mb-2 font-[MontserratAlt1]">Performance & Scalability</h3>
      <pre className="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto mb-3">
      {`// Example: Optimized API call
      async function fetchData() {
        try {
          const res = await fetch("/api/data");
          if (!res.ok) throw new Error("Error fetching data");
          return await res.json();
        } catch (err) {
          console.error(err);
        }
      }`}
        </pre>
        <p className="text-gray-400 text-sm sm:text-base">
          My code isn’t just functional — it’s optimized for speed, scalability, and maintainability.
        </p>
      </div>


      {/* Card 3 - Performance & Scalability */}
      <div className="break-inside-avoid mb-6 bg-neutral-900 p-6 rounded-2xl shadow hover:shadow-xl transition">

        <h3 className="text-lg font-semibold mb-4 font-[MontserratAlt1]">Responsive Web</h3>
        <img
          src = {resppp}
          alt="Responsive Web Design"
          className="w-full h-auto mb-3 rounded-lg"
        />
        <p className="text-gray-400 text-sm sm:text-base">
          I design interfaces that are intuitive, accessible, and visually engaging across all devices and screen sizes.
        </p>
      </div>

      {/* Card 4 - Passion Projects */}
      <div className="break-inside-avoid mb-6 bg-neutral-900 p-6 rounded-2xl shadow hover:shadow-xl transition">
        <h3 className="text-lg font-semibold mb-1 font-[MontserratAlt1]">Passion Projects</h3>
        <p className="text-gray-400 text-sm sm:text-base">
          In my free time, I explore creative coding and contribute to open-source communities.
Most projects start as fun experiments and end up teaching me something new.
        </p>
      </div>
      </div>

    </section>
  );
}
