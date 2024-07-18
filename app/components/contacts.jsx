import Image from "next/image";
import discord from "../assets/Discord.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faInstagram,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function ContactSection() {
  return (
    <section className="flex flex-col lg:flex-row gap-[2em] lg:gap-[10em] md:px-8 lg:px-0">
      <div className="w-full lg:w-1/2">
        <p className="text-[#ABB2BF] text-base md:text-[14px]">
          I’m interested in freelance opportunities. However, if you have other
          request or question, don’t hesitate to contact me
        </p>
      </div>
      <div className="border p-4 w-fit lg:w-fit">
        <h1 className="font-bold text-lg">Message me here</h1>
        <a
          href={`https://wa.me/2348104515305
          )}`}
          className="group hover:text-[#C778DD]"
          rel="noopener noreferrer"
        >
          <div className="flex gap-2 items-center mb-2">
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="w-[1.8em] h-[1.8em]"
            />
            <p className="text-sm md:text-[16px] text-[#ABB2BF] group-hover:underline  group-hover:text-[#C778DD]">
              @solo-dev
            </p>
          </div>
        </a>
        <a
          href={`https://t.me/SOLODEV999`}
          className="group hover:text-[#C778DD]"
          rel="noopener noreferrer"
        >
          <div className="flex gap-2 items-center mb-2">
            <FontAwesomeIcon
              icon={faTelegram}
              className="w-[1.8em] h-[1.8em]"
            />
            <p className="text-sm md:text-[16px] text-[#ABB2BF] group-hover:underline  group-hover:text-[#C778DD]">
              @SOLO DEV
            </p>
          </div>
        </a>
        <a
          href="https://www.instagram.com/direct/t/solodev999/"
          className="group hover:text-[#C778DD]"
          rel="noopener noreferrer"
        >
          <div className="flex gap-2 items-center mb-2">
            <FontAwesomeIcon
              icon={faInstagram}
              className="w-[1.8em] h-[1.8em]"
            />
            <p className="text-sm md:text-[16px] text-[#ABB2BF] group-hover:underline  group-hover:text-[#C778DD]">
              @solodev999
            </p>
          </div>
        </a>
        <a
          href="https://discord.com/users/1065547759278624788"
          className="group hover:text-[#C778DD]"
          rel="noopener noreferrer"
        >
          <div className="flex gap-2 items-center mb-2">
            <FontAwesomeIcon icon={faDiscord} className="w-[1.8em] h-[1.8em]" />
            <p className="text-sm md:text-[16px] text-[#ABB2BF] group-hover:underline  group-hover:text-[#C778DD]">
              @emwrlddev
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}
