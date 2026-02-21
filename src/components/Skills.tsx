export default function Skills() {
  const projects = [
    {
      title: "React.js",
      tags: [
        "Next.js 14",
        "MSW (Mock Service Worker)",
        "i18n",
        "Tailwind CSS",
        "Material UI",
        "TypeScript",
      ],
      description:
        "I've been working with React since 2022 and have gained solid experience with various tools and libraries. React is the technology I’m most comfortable and confident with.",
    },
    {
      title: "Vue.js",
      tags: [
        "Nuxt.js 3",
        "MSW (Mock Service Worker)",
        "i18n",
        "Tailwind CSS",
        "TypeScript",
      ],
      description:
        "I started working with Vue in 2020—it was my first front-end framework. Although I don’t use it as frequently these days, I still enjoy building occasional projects with Vue.",
    },
    {
      title: "Pure/Native Techs",
      tags: [
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "MSW (Mock Service Worker)",
        "JavaScript",
        "TypeScript",
      ],
      description:
        "I have a strong foundation in core web technologies like HTML, CSS, and JavaScript. These skills continue to support everything I build.",
    },
    {
      title: "Node.js",
      tags: ["Express.js", "MongoDB", "Multer"],
      description:
        "I've been using Node.js since 2021. While I don't consider myself an expert, I’ve built several projects with it and feel comfortable creating APIs and handling server-side logic.",
    },
  ];

  return (
    <div className="flex justify-center gap-8 flex-col items-center container h-full">
      <h1 className="text-3xl mt-16 text-primary text-center font-bold flex sm:justify-start justify-center relative gap-1 max-md:px-4">
        My Skills
        <div className="w-full max-sm:hidden h-2 bg-second-primary -z-10 rounded-full absolute translate-y-[2px] bottom-0"></div>
      </h1>

      <div className="w-full flex items-start gap-x-64 gap-y-12 flex-wrap justify-center">
        {projects.map((project, index) => {
          return (
            <>
              <div
                key={index}
                className={`md:w-1/3 flex justify-center ${
                  !!(index & 1) && "md:mt-48"
                }`}
                data-aos={!!(index & 1) ? "fade-right" : "fade-left"}
              >
                <div className="sm:w-96 border-transparent border-4 group !duration-200 hover:border-primary w-3/4 rounded-3xl cursor-pointer shadow-xl p-8 items-center flex flex-col gap-4">
                  {" "}
                  <div className="w-full flex flex-col">
                    <h1 className="font-bold text-black duration-200 text-2xl">
                      {project.title}
                    </h1>

                    <p className="font-medium text-lg mt-2 text-black duration-200 flex gap-1">
                      {project.description}
                    </p>

                    <div className="flex-wrap gap-1 flex mt-4 items-center justify-start">
                      {project.tags.map((tag) => {
                        return (
                          <span
                            key={index}
                            className="px-2 text-white py-1 font-medium sm:text-sm text-[10px] relative bg-primary/70 group-hover:bg-primary duration-200 rounded-full"
                          >
                            {tag}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
