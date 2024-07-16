import React from "react";
import Image from "next/image";
import work from "./works";

export default function ProjectCard({ end }) {
  console.log(end);
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {work.slice(0, end).map((item) => (
        <div key={item.name} className="border w-full">
          <Image src={item.image} alt="ez" className="w-full h-[15em]" />
          <p className="border-y text-[14px] text-[#ABB2BF] p-2">
            {item.stacks}
          </p>
          <div className="p-4 flex flex-col gap-4">
            <h1 className="font-bold">{item.name}</h1>
            <p className="text-[14px] text-[#ABB2BF]">{item.description}</p>
            <div>
              <a
                href={`${item.link}`}
                className="border border-[#C778DD] hover:border-[white] hover:bg-[#C778DD] p-2"
              >
                Live {"<--->"}
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
