import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    // name: "Mukesh Engineering Works",
    // summary: "Developed a Static Business Website.",
    imageDesktop: "/assets/work_logo/project1.png",
    imageMobile:"/assets/work_logo/project1_m.jpg",
    link: "https://mukeshengworks.in",
  },
  {
    // name: "MT Clinic HealthCare",
    // summary: "Second project description here.",
    imageDesktop: "/assets/work_logo/project2.png",
    imageMobile:"./assets/work_logo/project2_m.jpg",
    link: "https://www.meshdroid.com/Mtclinic/",
  },
  {
    // name: "Employee Management System",
    // summary: "Web app to manage employee records efficiently.",
    imageDesktop: "assets/work_logo/project3.png",
    imageMobile:"../assets/work_logo/project3_m.jpg",
    link: "https://employee-management-system-iota-livid.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section className="relative" id="projects">
      {/* Heading */}
      <div className="max-w-6xl mx-auto w-full text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-serif leading-snug text-white">
          Highlighting <br/> My Best Work.
       </h2>
      </div>

      {/* Project Cards */}
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} index={index} />
      ))}
    </section>
  );
};

export default Projects;
