import Image from "next/image";
import Link from "next/link";
import Media from "@/../public/repos/media.png";
import Parallax from "@/../public/repos/parallax.png";
import Request from "@/../public/repos/request.png";
import Foodyar from "@/../public/repos/foodyar.png";

export default function Repostories() {
    const projects = [
        {
            title: "Media",
            tags: ["React.js", "Next.js", "Tailwindcss", "Material Ui", "ShadcnUi", "SWR"],
            image: Media,
            description: "An Social Media Homepage.",
            link: "https://media-yefee8.vercel.app"
        },
        {
            title: "Parallax Spa",
            tags: ["React.js", "Next.js", "Tailwindcss", "Vite", "react-scroll-parallax"],
            image: Parallax,
            description: "An Parallax Single Page Application.",
            link: "https://parallax-spa.vercel.app/"
        },
        {
            title: "Request Form",
            tags: ["Vue.js", "Nuxt.js", "Tailwindcss"],
            image: Request,
            description: "A Login and Homepage Template, Just For Desktop.",
            link: "https://request-form-template.netlify.app/"
        },
        {
            title: "Foodyar",
            tags: ["Html5", "Css3", "Bootstrap"],
            image: Foodyar,
            description: "A case from statu agency.",
            link: "https://foodyar-nine.vercel.app"
        },
    ];

    return (
        <div className="flex justify-center gap-8 flex-col items-center container">
            <h1 className="text-3xl mt-16 text-primary text-center font-bold flex sm:justify-start justify-center relative gap-1">
                My Favorite Repostories
                <div className="sm:w-full w-4/5 h-2 bg-second-primary -z-10 rounded-full absolute translate-y-[2px] bottom-0"></div>
            </h1>

            <div className="w-full flex items-start gap-x-64 gap-y-12 flex-wrap justify-center">
                {
                    projects.map((project, index) => {
                        return (
                            <div key={index} className={`md:w-1/3 flex justify-center ${!!(index & 1) && "md:mt-64"}`}>
                                <Link className="justify-center flex w-full" href={project.link} target="_blank">
                                    <div className="sm:w-96 w-3/4 rounded-3xl border-black duration-500 group cursor-pointer hover:border-primary !p-4 border-[1.75px] items-center flex flex-col gap-4"
                                        data-aos={!!(index & 1) ? "fade-right" : "fade-left"}>
                                        {
                                            typeof project.image !== "string" ?
                                                <Image src={project.image} alt={project.title + " ~ Yefee, Yavuz Efe"} className="w-full border-4 border-transparent group-hover:border-primary duration-200 rounded-2xl h-48 object-cover object-center" />
                                                :
                                                <img src={project.image} className="w-full border-4 border-transparent group-hover:border-primary duration-200 rounded-2xl h-48 object-cover object-center" alt="" />
                                        }                                        <div className="w-full flex flex-col">
                                            <h1 className="font-bold text-black group-hover:text-primary duration-200 text-xl">{project.title}</h1>
                                            <p className="font-medium text-base group-hover:text-second-primary text-primary duration-200 flex gap-1">
                                                {project.description}
                                            </p>

                                            <div className="flex-wrap gap-1 flex mt-4 items-center justify-start">
                                                {
                                                    project.tags.map((tag) => {
                                                        return (
                                                            <span key={index} className="px-2 text-white py-1 font-medium sm:text-xs text-[10px] bg-primary/70 group-hover:bg-second-primary/70 duration-200 rounded-full">
                                                                {tag}
                                                            </span>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}