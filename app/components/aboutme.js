import Image from "next/image";
import BirdsPage from "./threeDFace";

export default function Aboutme({hideBtn}) {
  return (
    <section className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-2 md:px-8 lg:px-4">
      <div className="flex flex-col gap-6 w-full lg:w-1/2">
        <p className="text-[#ABB2BF] text-sm md:text-base">
          Hello, I’m Emmanuel!
        </p>
        <p className="text-[#ABB2BF] text-sm md:text-base">
          I’m a self-taught fullstack website/web app developer based in Ibadan,
          Nigeria. I can develop responsive websites and web apps from scratch
          and raise them into modern user-friendly web experiences.
        </p>
        <p className="text-[#ABB2BF] text-sm md:text-base">
          Transforming my creativity and knowledge into websites has been my
          passion for over a year. I have been helping various clients to
          establish their presence online. I always strive to learn about the
          newest technologies and frameworks.
        </p>
        {!hideBtn ? (
          <div>
            <a
              href="/aboutme"
              className="border border-[#C778DD] hover:border-white hover:bg-[#C778DD] p-2"
            >
              Read more {"->"}
            </a>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="w-full lg:w-1/2 h-64 md:h-80 lg:h-[30em] bg-[#00000067] rounded-2xl flex justify-center stars ">
        <Image
          width={300}
          height={300}
          className="w-[33%] h-"
          src={"/believe.jpeg"}
        />
        <Image
          width={300}
          height={300}
          className="w-[34%] h-"
          src={"/Focus.jpeg"}
        />
        <Image
          width={300}
          height={300}
          className="w-[33%] h-"
          src={"/never.jpeg"}
        />
        {/* <BirdsPage />
        <div className="star-sky"></div> */}
      </div>
    </section>
  );
}
