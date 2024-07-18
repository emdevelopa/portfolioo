import React from "react";

const Navbar = () => {
  return (
    <section className="fixed bottom-4 w-full flex justify-center z-10">
      <nav className="bg-[#171717] w-full sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] px-4 py-2 md:px-8 md:py-4 rounded-full">
        <ul className="flex justify-between text-sm md:text-base">
          <li>
            <a href="/" className="group hover:text-[#C778DD] hover:underline">
              <span className="text-[#C778DD] group-hover:text-[#fff] ">#</span>
              home
            </a>
          </li>
          <li>
            <a href="/projects" className="group hover:text-[#C778DD] hover:underline">
              <span className="text-[#C778DD] group-hover:text-[#fff] ">#</span>
              works
            </a>
          </li>
          <li>
            <a href="/aboutme" className="group hover:text-[#C778DD] hover:underline">
              <span className="text-[#C778DD] group-hover:text-[#fff] ">#</span>
              about-me
            </a>
          </li>
          <li>
            <a href="/contacts" className="group hover:text-[#C778DD] hover:underline">
              <span className="text-[#C778DD] group-hover:text-[#fff] ">#</span>
              contacts
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
