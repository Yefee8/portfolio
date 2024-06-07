export default function Skills() {
    const projects = [
        {
            title: "React.js",
            tags: ["Next.js 14", "MSW(Mock Service Worker)", "i18n", "Tailwindcss", "Material Ui", "Typescript"],
            description: "I have been working with React about two years and I have a lot of experience with various technologies. It's the technology at which I'm best!"
        },
        {
            title: "Vue.js",
            tags: ["Nuxt.js 3", "MSW(Mock Service Worker)", "i18n", "Tailwindcss", "Typescript"],
            description: "I have been working with Vue for more than three years. It was my first front-end technology. I don't use it I can't say I've used it much lately, but I occasionally develop projects with Vue.js."
        },
        {
            title: "Pure/Native Techs",
            tags: ["HTML5", "CSS3", "Tailwindcss", "MSW(Mock Service Worker)", "Javascript", "Typescript"],
            description: "The title is Enough I think."
        },
        {
            title: "Node.js",
            tags: ["Express.js", "MongoDB", "Multer"],
            description: "I'm not experienced in Node.js, but I have developed a few projects with it. I guess I can code some APIs with Node.js!",
        },
    ];

    return (
        <div className="flex justify-center gap-8 flex-col items-center container h-full">
            <h1 className="text-3xl mt-16 text-primary text-center font-bold flex sm:justify-start justify-center relative gap-1">
                My Skills
                <div className="sm:w-full w-4/5 h-2 bg-second-primary -z-10 rounded-full absolute translate-y-[2px] bottom-0"></div>
            </h1>

            <div className="w-full flex items-start gap-x-64 gap-y-12 flex-wrap justify-center">
                {
                    projects.map((project, index) => {
                        return (
                            <>
                                <div key={index}
                                    className={`md:w-1/3 flex justify-center ${!!(index & 1) && "md:mt-48"}`} data-aos={!!(index & 1) ? "fade-right" : "fade-left"}>
                                    <div className="sm:w-96 border-transparent border-4 group !duration-200 hover:border-primary w-3/4 rounded-3xl cursor-pointer shadow-xl p-8 items-center flex flex-col gap-4">                                    <div className="w-full flex flex-col">
                                        <h1 className="font-bold text-black duration-200 text-2xl">{project.title}</h1>

                                        <p className="font-medium text-lg mt-2 text-black duration-200 flex gap-1">
                                            {project.description}
                                        </p>

                                        <div className="flex-wrap gap-1 flex mt-4 items-center justify-start">
                                            {
                                                project.tags.map((tag) => {
                                                    return (
                                                        <span key={index} className="px-2 text-white py-1 font-medium sm:text-sm text-[10px] relative bg-primary/70 group-hover:bg-primary duration-200 rounded-full">
                                                            {tag}
                                                        </span>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    </div>
                                </div></>
                        )
                    })
                }
            </div>
        </div>
    )
}