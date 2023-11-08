import { FaFileCode } from "react-icons/fa";


export default function Projects(){
    const projects = [
        {
          title: "Stalk.gg",
          tags: ["React.js", "Next.js", "Vue.js", "Tailwindcss", "Material Ui", "ShadcnUi", "SWR"],
          image: "https://yefees-portfolio.vercel.app/_next/static/media/stalkgg.8957f7a8.png",
          role: "front-end developer"
        },
        {
          title: "Poebot.xyz",
          tags: ["React.js", "Next.js", "Tailwindcss", "Material Ui", "ShadcnUi"],
          image: "https://yefees-portfolio.vercel.app/_next/static/media/poebot.0ecf9098.png",
          role: "front-end developer"
        },
        {
          title: "Private Project (for now)",
          tags: ["React.js", "Next.js", "Tailwindcss", "ShadcnUi", "MSW (Mock Service Worker)"],
          image: "https://placehold.co/350x192/7752FE/fff",
          role: "front-end lead"
        },
      ];

    return(
        <div className="flex justify-center gap-8 flex-col items-center container h-full">
        <h1 className="text-3xl text-primary text-center font-bold flex sm:justify-start justify-center relative gap-1">
          I&apos;ve coded on these projects
          <div className="sm:w-full w-4/5 h-2 bg-second-primary -z-10 rounded-full absolute translate-y-[2px] bottom-0"></div>
        </h1>

        <div className="w-full flex gap-x-64 gap-y-12 flex-wrap justify-center">
          {
            projects.map((project, index) => {
              return (
                <div key={index} className={`md:w-1/3 flex justify-center ${!!(index & 1) && "md:mt-64"}`}>
                  <div className="sm:w-96 w-3/4 h-[375px] rounded-3xl border-black duration-500 group cursor-pointer hover:border-primary p-4 border-[1.75px] items-center flex flex-col gap-4"
                    data-aos="fade-up">
                    <img src={project.image} className="w-full border-4 border-transparent group-hover:border-primary duration-200 rounded-2xl h-48 object-cover object-center" alt="" />
                    <div className="w-full flex flex-col">
                      <h1 className="font-bold text-black group-hover:text-primary duration-200 text-xl">{project.title}</h1>
                      <p className="font-medium text-base text-black group-hover:text-primary duration-200 flex gap-1">
                        Role:
                        <span className="group-hover:text-second-primary font-medium duration-200 text-primary">{project.role}</span>
                      </p>

                      <div className="flex-wrap gap-1 flex mt-4 items-center justify-start">
                        {
                          project.tags.map((tag) => {
                            return (
                              <span key={index} className="px-2 text-white py-1 font-medium sm:text-xs text-[10px] bg-primary group-hover:bg-second-primary duration-200 rounded-full">
                                #{tag}
                              </span>
                            )
                          })
                        }
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }

          <div className="w-1/3">
            <div className="w-96 h-[375px]"></div>
          </div>
        </div>
      </div>
    )
}