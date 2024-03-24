import Image from "next/image";
import Stalk from "@/../public/projects/stalkgg.png";
import Poe from "@/../public/projects/poebot.png";
import Laflaneur from "@/../public/projects/laflaneur.png";
import Geniusula from "@/../public/projects/geniusula.png";
import UseAlarm from "@/../public/projects/usealarm.png";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Stalk.gg ~ Closed :(",
      tags: [
        "React.js",
        "Next.js",
        "Vue.js",
        "Tailwindcss",
        "Material Ui",
        "ShadcnUi",
        "SWR",
      ],
      image: Stalk,
      role: "front-end developer",
      link: "https://stalk.gg",
    },
    {
      title: "UseAlarm",
      tags: [
        "React.js",
        "Next.js",
        "PrimeReact",
        "Primeflex"
      ],
      image: UseAlarm,
      role: "site and backend made by entirely me",
      link: "https://use-alarm.vercel.app",
    },
    {
      title: "Laflaneur.com",
      tags: [
        "React.js",
        "Next.js",
        "Tailwindcss"
      ],
      image: Laflaneur,
      role: "site and design made by entirely me",
      link: "https://laflaneur.com",
    },
    {
      title: "Poebot.xyz",
      tags: ["React.js", "Next.js", "Tailwindcss", "Material Ui", "ShadcnUi"],
      image: Poe,
      role: "site made by entirely me",
      link: "https://poebot.xyz",
    },
    {
      title: "Geniusula.com",
      tags: ["React.js", "Next.js", "Tailwindcss"],
      image: Geniusula,
      role: "site made by entirely me",
      link: "https://www.geniusula.com",
    },
    {
      title: "Private Project (for now)",
      tags: [
        "React.js",
        "Next.js",
        "Tailwindcss",
        "ShadcnUi",
        "MSW (Mock Service Worker)",
      ],
      image: "https://placehold.co/350x192/ff9130/fff",
      role: "front-end lead",
      link: "https://github.com/Yefee8",
    },
  ];

  return (
    <div className="flex justify-center gap-8 flex-col items-center container">
      <h1 className="text-3xl mt-16 text-primary text-center font-bold flex sm:justify-start justify-center relative gap-1">
        I&apos;ve coded on these projects
        <div className="sm:w-full w-4/5 h-2 bg-second-primary -z-10 rounded-full absolute translate-y-[2px] bottom-0"></div>
      </h1>

      <div className="w-full flex items-start gap-x-64 gap-y-12 flex-wrap justify-center">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className={`md:w-1/3 flex justify-center ${
                !!(index & 1) && "md:mt-64"
              }`}
            >
              <Link
                href={project.link}
                className="justify-center flex w-full"
                target="_blank"
              >
                <div
                  className="sm:w-96 w-3/4 rounded-3xl border-black duration-500 group cursor-pointer hover:border-primary p-4 border-[2.5px] items-center flex flex-col gap-4"
                  data-aos={!!(index & 1) ? "fade-down" : "fade-up"}
                >
                  {typeof project.image !== "string" ? (
                    <Image
                      src={project.image}
                      alt={project.title + " ~ Yefee, Yavuz Efe"}
                      className="w-full border-4 border-transparent group-hover:border-primary duration-200 rounded-2xl h-48 object-cover object-center"
                    />
                  ) : (
                    <img
                      src={project.image}
                      className="w-full border-4 border-transparent group-hover:border-primary duration-200 rounded-2xl h-48 object-cover object-center"
                      alt=""
                    />
                  )}
                  <div className="w-full flex flex-col">
                    <h1 className="font-bold text-black group-hover:text-primary duration-200 text-xl">
                      {project.title}
                    </h1>
                    <p className="font-medium text-base text-black group-hover:text-primary duration-200 flex gap-1">
                      Role:
                      <span className="group-hover:text-second-primary font-medium duration-200 text-primary">
                        {project.role}
                      </span>
                    </p>

                    <div className="flex-wrap gap-1 flex mt-4 items-center justify-start">
                      {project.tags.map((tag) => {
                        return (
                          <span
                            key={index}
                            className="px-2 text-white py-1 font-medium sm:text-xs text-[10px] bg-primary/70 group-hover:bg-second-primary/70 duration-200 rounded-full"
                          >
                            {tag}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}

        <div className="w-1/3">
          <div className="w-96 h-[375px]"></div>
        </div>
      </div>
    </div>
  );
}
