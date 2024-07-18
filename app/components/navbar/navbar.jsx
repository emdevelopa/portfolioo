"use client"
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const isActive = (path) => pathname === path;

  return (
    <section className="fixed bottom-4 w-full flex justify-center z-10">
      <nav className="bg-[#171717] w-full sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] px-4 py-2 md:px-8 md:py-4 rounded-full">
        <ul className="flex justify-between text-sm md:text-base text-[#ABB2BF]">
          <li>
            <a
              href="/"
              className={`group hover:text-[#C778DD] hover:underline ${
                isActive("/") ? "font-bold text-white" : ""
              }`}
            >
              <span className="text-[#C778DD] group-hover:text-[#fff] ">#</span>
              home
            </a>
          </li>
          <li>
            <a
              href="/projects"
              className={`group hover:text-[#C778DD] hover:underline ${
                isActive("/projects") ? "font-bold text-white" : ""
              }`}
            >
              <span className="text-[#C778DD] group-hover:text-[#fff] ">#</span>
              works
            </a>
          </li>
          <li>
            <a
              href="/aboutme"
              className={`group hover:text-[#C778DD] hover:underline ${
                isActive("/aboutme") ? "font-bold text-white" : ""
              }`}
            >
              <span className="text-[#C778DD] group-hover:text-[#fff] ">#</span>
              about-me
            </a>
          </li>
          <li>
            <a
              href="/contacts"
              className={`group hover:text-[#C778DD] hover:underline ${
                isActive("/contacts") ? "font-bold text-white" : ""
              }`}
            >
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
