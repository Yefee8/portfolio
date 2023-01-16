export default function SkillCard({ cardProps }) {
    return (
        <div className="w-64 h-auto md:w-96 md:h-72 p-4 bg-primary rounded-lg flex flex-col items-center">
            <h1 className="text-xl card-title md:text-2xl ">
                {cardProps.title}
            </h1>

            <div className="flex gap-x-2 gap-y-2 justify-center flex-wrap mt-4 md:mt-8">
                {cardProps.tags.map((tag, index) => {
                    return (
                        <div key={index} className="rounded-full px-2 py-1 cursor-pointer bg-white text-primary text-sm md:text-md ">
                            {tag}
                        </div>
                    )
                })}
            </div>

            <div className="flex gap-x-2 gap-y-2 justify-center flex-wrap mt-4 md:mt-8">
                {
                    cardProps.projects.map((project, index) => {
                        return (
                            <a key={index} className="font-normal card-title cursor-pointer underline" href={project.link} target="_blank">
                                {project.title}
                            </a>
                        )
                    })
                }
            </div>
        </div>
    )
}