import React from "react";
import SkillCard from "../skillsCard.js";
import Image from "next/image";
import group36 from "../../assets/Group-36.png";

const Skills = () => {
  return (
    <>
      <section className="mt-16 px-4 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-8 gap-4 lg:gap-0">
          <div className="flex items-center gap-4 w-full lg:w-auto">
            <h1 className="text-2xl md:text-3xl">
              <span className="text-[#C778DD]">#</span>Skills
            </h1>
            <div className="flex-grow lg:w-[22em] h-[2px] bg-[#C778DD] hidden lg:block"></div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex justify-center w-full lg:w-auto">
            <Image src={group36} alt="group" className="w-full max-w-sm" />
          </div>
          <SkillCard />
        </div>
      </section>
    </>
  );
};

export default Skills;
