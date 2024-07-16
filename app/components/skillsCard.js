import React from "react";

const SkillCard = () => {
  return (
    <section className="flex flex-wrap gap-4 w-full lg:w-3/4">
      {/* Languages */}
      <div className="border h-fit w-full sm:w-1/2 lg:w-auto">
        <h1 className="border-b font-bold p-2">Languages</h1>
        <p className="text-sm text-[#ABB2BF] p-2">Javascript, Python</p>
      </div>
      {/* Databases */}
      <div className="border h-fit w-full sm:w-1/2 lg:w-auto">
        <h1 className="border-b font-bold p-2">Databases</h1>
        <p className="text-sm text-[#ABB2BF] p-2">
          MySQL, MongoDB, SQLite, Postgres
        </p>
      </div>
      {/* Tools */}
      <div className="border h-fit w-full sm:w-1/2 lg:w-auto">
        <h1 className="border-b font-bold p-2">Tools</h1>
        <p className="text-sm text-[#ABB2BF] p-2">
          VSCode, Git, Font-Awesome, Vercel, Netlify
        </p>
      </div>
      {/* Other */}
      <div className="border h-fit w-full sm:w-1/2 lg:w-auto">
        <h1 className="border-b font-bold p-2">Other</h1>
        <p className="text-sm text-[#ABB2BF] p-2">
          HTML, CSS, TailwindCSS, Bootstrap, MaterialUI
        </p>
      </div>
      {/* Frameworks */}
      <div className="border h-fit w-full sm:w-1/2 lg:w-auto">
        <h1 className="border-b font-bold p-2">Frameworks</h1>
        <p className="text-sm text-[#ABB2BF] p-2">
          ReactJS/NextJS, VueJS, Discord.js, Electron.js, ExpressJS, FastAPI
        </p>
      </div>
    </section>
  );
};

export default SkillCard;
