import React from "react";
import ProjectCard from "../components/projectCards";
import works from "../components/works";

const Projects = () => {
  return (
    <section className="px-6 py-2 md:px-8 lg:px-14 xl:px-[10em] mb-8">
      <div className="mb-8 md:mb-12 lg:mb-16">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          <span className="text-[#C778DD]">/</span>Projects
        </h1>
        <p className="text-sm md:text-base">List of my projects</p>
      </div>
      <div>
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
          <span className="text-[#C778DD] ">#</span>Complete-apps
        </h1>
        <ProjectCard end={works.length} />
      </div>
    </section>
  );
};

export default Projects;
