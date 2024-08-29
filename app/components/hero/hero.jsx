import Image from "next/image";
import React from "react";
import BirdsPage from "../threeDFace";


const Hero = () => {
  
  return (
    <section className="flex flex-col lg:flex-row gap-8 lg:gap-0 p-4 md:p-8">
      <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:gap-8">
        <h1 className="text-2xl md:text-4xl lg:text-[32px] font-semibold">
          Emmanuel is a{" "}
          <span className="text-[#C778DD]">Full-Stack Website Developer</span>{" "}
          and <span className="text-[#C778DD]">Web App Developer</span>
        </h1>
        <p className="text-[#ABB2BF] text-base md:text-[18px]">
          He crafts responsive websites where technologies{" "}
          <br className="hidden md:block" />
          meet creativity
        </p>
        <div>
          <a href="/contacts">
            <button className="px-4 py-2 md:px-6 md:py-3 border border-[#C778DD] font-semibold hover:text-[#C778DD] hover:border-gray-400">
              Contact me!!
            </button>
          </a>
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-64 md:h-80 lg:h-[30em] bg-[#00000067] rounded-2xl flex justify-center items-center stars relative">
        {/* <BirdsPage /> */}
        <Image width={300} height={300} src={"/motivation.jpeg"} />
        <Image
          width={300}
          height={300}
          className="w-[6em] h-"
          src={"/_ .jpeg"}
        />
        <Image width={300} height={300} src={"/StayTrue.jpeg"} />
        {/* <div className="star-sky"></div> */}
      </div>
    </section>
  );
};

export default Hero;
