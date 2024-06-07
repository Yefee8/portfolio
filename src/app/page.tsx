import Link from "next/link";

import { CgScrollV } from "react-icons/cg";
import { FcBinoculars } from "react-icons/fc";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

import Projects from "@/components/Projects";
import Repostories from "@/components/Repostories";
import Skills from "@/components/Skills";
import UseAos from "@/components/UseAos";

export default function Home() {
  return (
    <main className="flex flex-col pb-4 items-center">
      <div className="flex justify-center gap-4 flex-col items-center w-full h-screen container">
        <h1 className="text-3xl text-primary font-bold flex justify-start relative">
          Hey, I&apos;m Yavuz!
          <div className="w-full h-2 changeWidth bg-second-primary -z-10 rounded-full absolute translate-y-[2px] bottom-0"></div>
        </h1>

        <div className="text-center font-medium flex justify-center items-center flex-col text-black">
          As I said, I&apos;m Yavuz and I&apos;m a front-end developer who can
          code express & node apps. <br />
          <div className="flex gap-1 text-center items-center">
            So you can say I&apos;m a full-stack{" "}
            <FcBinoculars className="text-xl" />
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <a
            href="https://www.linkedin.com/in/yavuz-efe-f%C4%B1nd%C4%B1kl%C4%B1-ab214621a/"
            target="_blank"
          >
            <FaLinkedin className="text-2xl duration-100 cursor-pointer hover:text-primary focus:text-primary outline-primary" />
          </a>
          <a href="https://github.com/Yefee8" target="_blank">
            <FaGithub className="text-2xl duration-100 cursor-pointer hover:text-primary focus:text-primary outline-primary" />
          </a>
          <a href="mailto:findikliyavuzefe@gmail.com" target="_blank">
            <IoMdMail className="text-2xl duration-100 cursor-pointer hover:text-primary focus:text-primary outline-primary" />
          </a>
        </div>

        <div className="absolute bottom-8 flex gap-2 text-base items-center font-bold text-primary justify-center">
          <CgScrollV className="text-xl animate-bounce" /> Scroll Down For More
        </div>
      </div>

      <Projects />

      <Repostories />

      <Skills />

      <div className="text-3xl text-black rounded-3xl p-8 font-bold items-center flex gap-2 mt-16">
        If you want to work with me, you can reach me from:
        <Link href="https://discord.com/users/420291800905940992">
          <div className="text-primary relative !cursor-pointer">
            Discord
            <div className="w-full h-2 bg-second-primary -z-10 rounded-full absolute translate-y-[2px] bottom-0"></div>
          </div>
        </Link>
      </div>

      <UseAos />
    </main>
  );
}
