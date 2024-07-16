import React from "react";
import Aboutme from "../components/aboutme";
import SkillCard from "../components/skillsCard";
// import ProjectCard from "../components/projectCards";
// import works from "../components/works";

const Projects = () => {
  return (
    <section className="px-6 py-2 md:px-8 lg:px-14 xl:px-[10em] mb-8">
      <div className="mb-8 md:mb-12 lg:mb-16">
        <h1 className="text-2xl md:text-3xl lg:text-3xl font-semibold">
          <span className="text-[#C778DD]">/</span>about-me
        </h1>
        <p className="text-sm md:text-base font-bold mt-2">Who am I?</p>
      </div>
      <div>
        {/* <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
          <span className="text-[#C778DD] ">#</span>Complete-apps
        </h1> */}
        {/* <ProjectCard end={works.length} /> */}
        <Aboutme hideBtn={true} />
        <div className="mt-[4em]">
          <h1 className="text-xl md:text-2xl lg:text-2xl font-semibold mb-4">
            <span className="text-[#C778DD] ">#</span>skills
          </h1>
          <SkillCard />
        </div>
        <div className="mt-[4em]">
          <h1 className="text-xl md:text-2xl lg:text-2xl font-semibold mb-4">
            <span className="text-[#C778DD] ">#</span>my-fun-facts
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-fit text-[#ABB2BF]">
            <h1 className="border p-2 w-fit">
              I love <span className="text-white">skating board</span> 🛹🛹🛹
            </h1>
            <h1 className="border p-2 w-fit">
              I love playing <span className="text-white">basketball</span>{" "}
              &#127936;&#127936;&#127936;{" "}
            </h1>
            <h1 className="border p-2 w-fit">
              I like <span className="text-white">pizza </span>{" "}
              &#127829;&#127829;&#127829; more than{" "}
              <span className="text-white">
                pasta &#127837;&#127837;&#127837;
              </span>
            </h1>
            <h1 className="border p-2 w-fit">
              I <span className="text-white">smile</span> a lot
              &#128522;&#128522;&#128522;
            </h1>
            <h1 className="border p-2 w-fit">
              I love <span className="text-white">shawties</span> &#128131;&#128131;&#128131;
            </h1>
            <h1 className="border p-2 w-fit">
              I am still in <span className="text-white">college 🏫🏫🏫</span>
            </h1>
            <h1 className="border p-2 w-fit">
              I am the <span className="text-white">last born</span>{" "}
              &#128118;&#128118;&#128118;
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
