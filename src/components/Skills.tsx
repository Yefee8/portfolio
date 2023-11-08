import Image from "next/image";
import Link from "next/link";
import Media from "@/../public/repos/media.png";
import Parallax from "@/../public/repos/parallax.png";
import Request from "@/../public/repos/request.png";
import Foodyar from "@/../public/repos/foodyar.png";

export default function Skills() {
    const projects = [
        {
            title: "React.js",
            tags: ["Next.js 14", "MSW(Mock Service Worker)", "i18n", "Tailwindcss", "Material Ui", "Typescript"],
            description: "I've Been Working with React More Than a Year and Worked with a Lot of Technologies, I Love React!"
        },
        {
            title: "Vue.js",
            tags: ["Nuxt.js 3", "MSW(Mock Service Worker)", "i18n", "Tailwindcss", "Typescript"],
            description: "I've Been working with Vue More Than a Two Years... It Was My First Front-End Technology, I Love Vue!"
        },
        {
            title: "Pure Techs",
            tags: ["HTML5", "CSS3", "Tailwindcss", "MSW(Mock Service Worker)", "Javascript", "Typescript"],
            description: "Title is Enough I think."
        },
        {
            title: "Node.js",
            tags: ["Express.js", "MongoDB", "Multer"],
            description: "To Be Honest I'm Not Very Experienced in Node.js but I Developed a Few Projects with It, I Can Code Node Apps with Googling somethings...",
        },
    ];

    return (
        <div className="flex justify-center gap-8 flex-col items-center container h-full">
            <h1 className="text-3xl mt-36 text-primary text-center font-bold flex sm:justify-start justify-center relative gap-1">
                My Skills
                <div className="sm:w-full w-4/5 h-2 bg-second-primary -z-10 rounded-full absolute translate-y-[2px] bottom-0"></div>
            </h1>

            <div className="w-full flex items-start gap-x-64 gap-y-12 flex-wrap justify-center">
                {
                    projects.map((project, index) => {
                        return (
                            <>
                                <div key={index}
                                    className={`md:w-1/3 flex justify-center ${!!(index & 1) && "md:mt-64"}`} data-aos={!!(index & 1) ? "fade-right" : "fade-left"}>
                                    <div className="sm:w-96 border-transparent border-4 !duration-200 hover:border-second-primary w-3/4 rounded-3xl cursor-pointer bg-primary p-8 items-center flex flex-col gap-4">                                    <div className="w-full flex flex-col">
                                        <h1 className="font-bold text-white duration-200 text-2xl">{project.title}</h1>

                                        <p className="font-medium text-lg mt-2 text-white duration-200 flex gap-1">
                                            {project.description}
                                        </p>

                                        <div className="flex-wrap gap-1 flex mt-4 items-center justify-start">
                                            {
                                                project.tags.map((tag) => {
                                                    return (
                                                        <span key={index} className="px-2 text-white py-1 font-medium sm:text-sm text-xs bg-second-primary duration-200 rounded-full">
                                                            #{tag}
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