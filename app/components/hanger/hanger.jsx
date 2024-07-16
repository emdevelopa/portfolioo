import React from "react";
import hangerImage from "../../assets/Github.png";
import Image from "next/image";

const SocialHanger = () => {
  return (
    <section className="fixed w-full flex flex-col  top-0">
      <div className="flex flex-col items-center absolute left-10 max-md-[900px]:left-0">
        <div className="w-[1px] h-[10em] bg-[#ffffff52]"></div>
        <Image
          src={hangerImage}
          alt="Hanger"
          className="w-[2em] h-[2em]  hover:border border-[#C778DD] rounded-[50%] cursor-pointer "
        />
        <Image
          src={hangerImage}
          alt="Hanger"
          className="w-[2em] h-[2em] hover:border border-[#C778DD] rounded-[50%] cursor-pointer"
        />
        <Image
          src={hangerImage}
          alt="Hanger"
          className="w-[2em] h-[2em] hover:border border-[#C778DD] rounded-[50%] cursor-pointer"
        />
        <Image
          src={hangerImage}
          alt="Hanger"
          className="w-[2em] h-[2em] hover:border border-[#C778DD] rounded-[50%] cursor-pointer"
        />
      </div>
    </section>
  );
};

export default SocialHanger;
