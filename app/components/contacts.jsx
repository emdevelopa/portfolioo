import Image from "next/image";
import discord from "../assets/Discord.png";

export default function ContactSection() {
  return (
    <section className="flex flex-col lg:flex-row justify-between gap-8 md:px-8 lg:px-4">
      <div className="w-full lg:w-1/2">
        <p className="text-[#ABB2BF] text-base md:text-[14px]">
          I’m interested in freelance opportunities. However, if you have other
          request or question, don’t hesitate to contact me
        </p>
      </div>
      <div className="border p-4 w-full lg:w-fit">
        <h1 className="font-bold text-lg">Message me here</h1>
        <div className="flex gap-4 items-center ">
          <Image src={discord} alt="discord" />
          <p className="text-sm md:text-[14px] text-[#ABB2BF]">@Emwrld</p>
        </div>
        <div className="flex gap-4 items-center ">
          <Image src={discord} alt="discord" />
          <p className="text-sm md:text-[14px] text-[#ABB2BF]">@Emwrld</p>
        </div>
        <div className="flex gap-4 items-center ">
          <Image src={discord} alt="discord" />
          <p className="text-sm md:text-[14px] text-[#ABB2BF]">@Emwrld</p>
        </div>
        <div className="flex gap-4 items-center ">
          <Image src={discord} alt="discord" />
          <p className="text-sm md:text-[14px] text-[#ABB2BF]">@Emwrld</p>
        </div>
      </div>
    </section>
  );
}
