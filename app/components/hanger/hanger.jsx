import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faWhatsapp, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const SocialHanger = () => {
  return (
    <section className="fixed w-full flex flex-col  top-0">
      <div className="flex flex-col items-center absolute left-10 max-md-[900px]:left-0">
        <div className="w-[1px] h-[10em] bg-[#ffffff52] max-md-[900px]:h-[1em]"></div>
        <a
          href="https://github.com/emdevelopa"
          className="w-[2em] h-[2em] hover:border border-[#C778DD] rounded-[50%] p-1 flex justify-center items-center"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://x.com/Emwrld999"
          className="w-[2em] h-[2em] hover:border border-[#C778DD] rounded-[50%] p-1 flex justify-center items-center"
        >
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
        <a
          href="https://wa.me/2348104515305"
          className="w-[2em] h-[2em] hover:border border-[#C778DD] rounded-[50%] p-1 flex justify-center items-center"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
    </section>
  );
};

export default SocialHanger;
