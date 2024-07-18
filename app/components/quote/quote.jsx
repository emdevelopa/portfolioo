import React from "react";
import exclam from "../../assets/exclam.png";
import Image from "next/image";

const Quote = () => {
  return (
    <section className="border mt-16 border-gray-400 p-4 md:p-8 relative text-center max-w-lg mx-auto">
      <Image
        src={exclam}
        alt="exclam"
        className="w-8 h-8 absolute top-[-10%] left-4 md:left-8"
      />
      <p className="text-sm md:text-base lg:text-lg">
        Be strong no matter what you're going through.
      </p>
      <Image
        src={exclam}
        alt="exclam"
        className="w-8 h-8 absolute bottom-[-10%] right-4 md:right-8"
      />
    </section>
  );
};

export default Quote;
