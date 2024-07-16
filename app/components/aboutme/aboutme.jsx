import React from "react";
import Aboutme from "../aboutme";

const AboutMe = () => {
  return (
    <>
      <section className="mt-16 px-2 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-8 gap-4 lg:gap-0">
          <div className="flex items-center gap-4 w-full lg:w-auto">
            <h1 className="text-2xl md:text-3xl">
              <span className="text-[#C778DD]">#</span>AboutMe
            </h1>
            <div className="flex-grow lg:w-[22em] h-[2px] bg-[#C778DD] hidden lg:block"></div>
          </div>
        </div>
        <div>
          <Aboutme />
        </div>
      </section>
    </>
  );
};

export default AboutMe;
