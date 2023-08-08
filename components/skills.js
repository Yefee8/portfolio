import SkillCard from "./skillCard";
export default function Skills() {

    const allSkills = [
        {
            title: 'React.js',
            tags: [
                'react native',
                'next.js',
                'tailwindcss',
                'primereact',
                'material ui',
                'bootstrap 5'
            ],
            projects: [
                {
                    title: 'Poebot.xyz',
                    link: 'https://poebot.xyz'
                },
                {
                    title: 'Stalk.gg',
                    link: 'https://stalk.gg'
                },
                {
                    title: 'Media',
                    link: 'https://media-yefee8.vercel.app'
                },
                {
                    title: 'Parallax Spa',
                    link: 'https://parallax-spa.vercel.app'
                },
                {
                    title: 'react-xox',
                    link: 'https://yefee8.github.io/react-xox'
                }
            ]
        },
        {
            title: 'Vue.js',
            tags: [
                'nuxt.js',
                'tailwindcss',
                'bootstrap 5'
            ],
            projects: [
                {
                    title: 'Request Form',
                    link: 'https://request-form-template.netlify.app/'
                },
                {
                    title: 'Landing Page',
                    link: 'https://yefeelanding.netlify.app/'
                }
            ]
        },
        {
            title: 'Astro.js',
            tags: [
                'tailwindcss'
            ],
            projects: []
        }
    ];

    return (
        <div className="skills">

            <h1 className="text-2xl md:text-4xl flex relative text-primary flex-col mt-24">
                <span className="absolute w-full bg-primary rounded-full opacity-75 h-1 translate-y-[1.4rem] md:translate-y-7 md:h-2"></span>
                My Skills & Projects
            </h1>

            <div className="mt-12 flex flex-wrap justify-center w-full items-center gap-x-6 gap-y-6">

                {
                    allSkills.map((skill, index) => {
                        return (
                            <SkillCard  key={index} cardProps={skill} />
                        )
                    })
                }

                <div className="absolute bottom-4 text-xl md:text-2xl">
                    <h1 className="flex flex-wrap justify-center">
                        For more check out

                        <a className="flex relative text-primary flex-col ml-2 cursor-pointer" href="https://github.com/Yefee8" target="_blank">
                            my github
                            <span className="absolute w-full bg-primary rounded-full opacity-75 h-1 translate-y-[1.25rem] md:translate-y-[1.4rem] md:h-2"></span>
                        </a>
                    </h1>
                </div>
            </div>
        </div>
    )
}
