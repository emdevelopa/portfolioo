import Image from "next/image";
import github from "../../assets/Github.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <section className="border-t flex flex-col gap-10 py-6 px-4 md:px-8 lg:px-16 xl:px-32">
      <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-0">
        <div className="flex flex-col gap-4 text-center lg:text-left">
          <h1 className="font-bold">EM-DEV</h1>
          <p className="text-[#ABB2BF] text-[14px]">
            Full-Stack Website Developer and Web App developer
          </p>
        </div>
        <div className="flex flex-col gap-4 text-center lg:text-left">
          <h1 className="font-bold">Media</h1>
          <div className="flex justify-center lg:justify-start gap-2">
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
              href="https://www.instagram.com/solodev999/"
              className="w-[2em] h-[2em] hover:border border-[#C778DD] rounded-[50%] p-1 flex justify-center items-center"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
      <p className="text-[#ABB2BF] text-[14px] text-center mb-[4em]">
        &copy; Copyright 2024. Made by Emmanuel
      </p>
    </section>
  );
}
