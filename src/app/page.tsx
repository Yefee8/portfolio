"use client"
import AOS from "aos";
import "aos/dist/aos.css";
import { CgScrollV } from "react-icons/cg";
import { FcBinoculars } from "react-icons/fc";
import Projects from "@/components/Projects"
export default function Home() {
  AOS.init();

  return (
    <main className="flex flex-col pb-24 items-center">
      <div className="flex justify-center gap-4 flex-col items-center w-full h-screen container">
        <h1 className="text-3xl text-primary font-bold flex justify-start relative">
          Hey, I&apos;m Yavuz!
          <div className="w-full h-2 changeWidth bg-second-primary -z-10 rounded-full absolute translate-y-[2px] bottom-0"></div>
        </h1>

        <div className="text-center font-medium flex justify-center items-center flex-col text-black">
          As I said, I'm Yavuz and I'm a front-end developer who can code express & node apps. <br />
          <div className="flex gap-1 text-center items-center">
            So you can say I'm a full-stack <FcBinoculars className="text-xl" />
          </div>
        </div>

        <div className="absolute bottom-8 flex gap-2 text-base items-center font-bold text-primary justify-center">
          <CgScrollV className="text-xl animate-bounce" />  Scroll Down For More
        </div>
      </div>

      <Projects />
    </main>
  )
}
