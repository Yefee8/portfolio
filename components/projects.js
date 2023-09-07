import stalkgg from "../public/stalkgg.png"
import poebot from "../public/poebot.png"


export default function Projects() {
    return (
        <div className="projects relative flex items-center flex-col">
            <h1 className="text-2xl md:text-4xl flex relative text-primary flex-col mt-24">
                <span className="absolute w-full bg-primary rounded-full opacity-75 h-1 translate-y-[1.4rem] md:translate-y-7 md:h-2"></span>
                Projects
            </h1>

            <div className="w-3/4 max-w-[1200px] md:flex-row flex-col items-center lg:w-full bg-primary p-4 rounded-[24px] mt-12 flex gap-4 md:items-start">
                <a href="https://stalk.gg" target="_blank">
                    <img src={stalkgg.src} alt="Yefee's Portfolio ~ Stalk.gg" className="h-48 object-cover object-center cursor-pointer rounded-lg" />
                </a>

                <div className="h-48 flex justify-between flex-col">
                    <div className="flex lg:items-start items-center flex-col gap-4 justify-between">
                        <h2 className="text-xl card-title">Stalk.gg</h2>
                        <p className="text-sm card-title font-medium lg:text-start text-center">
                            Stalk.gg is a website & a discord bot, 
                            which is you can find ideal discord server for you.
                            If you want to advertise your server, stalk.gg is one of the best choices!
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        <div className="rounded-full px-2 py-1 cursor-pointer bg-white text-primary text-sm md:text-md ">
                            react.js
                        </div>
                        <div className="rounded-full px-2 py-1 cursor-pointer bg-white text-primary text-sm md:text-md ">
                            next.js
                        </div>
                        <div className="rounded-full px-2 py-1 cursor-pointer bg-white text-primary text-sm md:text-md ">
                            tailwindcss
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-3/4 max-w-[1200px] md:flex-row flex-col items-center lg:w-full bg-primary p-4 rounded-[24px] mt-12 flex gap-4 md:items-start">
                <a href="https://stalk.gg" target="_blank">
                    <img src={poebot.src} alt="Yefee's Portfolio ~ Stalk.gg" className="h-48 object-cover object-center cursor-pointer rounded-lg" />
                </a>

                <div className="h-48 flex justify-between flex-col">
                    <div className="flex lg:items-start items-center flex-col gap-4 justify-between">
                        <h2 className="text-xl card-title">Poebot.xyz</h2>
                        <p className="text-sm card-title font-medium lg:text-start text-center">
                            Poebot is a discord bot (I coded this bot's website),
                            Poe create rooms for your server member, your server members can moderate their own rooms!
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        <div className="rounded-full px-2 py-1 cursor-pointer bg-white text-primary text-sm md:text-md ">
                            react.js
                        </div>
                        <div className="rounded-full px-2 py-1 cursor-pointer bg-white text-primary text-sm md:text-md ">
                            next.js
                        </div>
                        <div className="rounded-full px-2 py-1 cursor-pointer bg-white text-primary text-sm md:text-md ">
                            tailwindcss
                        </div>
                    </div>
                </div>
            </div>

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
    )
}