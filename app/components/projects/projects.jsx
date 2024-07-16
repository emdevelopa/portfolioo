import React from "react";
import viewAll from "../../assets/View all ~~_.png";
import Image from "next/image";

import ProjectsCard from "../projectCards.js";

const Projects = () => {
  return (
    <>
      <section className="mt-16 px-4 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-8 gap-4 lg:gap-0">
          <div className="flex items-center gap-4 w-full lg:w-auto">
            <h1 className="text-2xl md:text-3xl">
              <span className="text-[#C778DD]">#</span>Projects
            </h1>
            <div className="flex-grow lg:w-[35em] h-[2px] bg-[#C778DD] hidden lg:block"></div>
          </div>
          <div className="flex-shrink-0">
            <a href="/projects">
              <Image
                src={viewAll}
                alt="view all"
                className="hover:border-b-2"
              />
            </a>
          </div>
        </div>
        <ProjectsCard end={3} />
      </section>
    </>
  );
};

export default Projects;
