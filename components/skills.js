export default function Skills() {
    return (
        <div className="skills">

            <h1 className="text-2xl md:text-4xl flex relative text-primary flex-col mt-24">
                <span className="absolute w-full bg-primary rounded-full opacity-75 h-1 translate-y-[1.4rem] md:translate-y-7 md:h-2"></span>
                My Skills & Projects
            </h1>

            <div className="mt-12 flex flex-wrap justify-center w-full items-center gap-x-6 gap-y-6">
                <div className="w-64 h-auto md:w-96 md:h-72 p-4 bg-primary rounded-lg flex flex-col items-center">
                    <h1 className="text-xl card-title md:text-2xl ">
                        React.js
                    </h1>

                    <div className="flex gap-x-2 gap-y-2 justify-center flex-wrap mt-4 md:mt-8">
                        <div className="rounded-full px-2 py-1 cursor-pointer bg-white text-primary text-sm md:text-md ">
                            react native
                        </div>
                        <div className="rounded-full px-2 py-1 cursor-pointer bg-white text-primary text-sm md:text-md ">
                            next.js
                        </div>
                        <div className="rounded-full px-2 py-1 cursor-pointer bg-white text-primary text-sm md:text-md ">
                            tailwindcss
                        </div>
                        <div className="rounded-full px-2 py-1 cursor-pointer bg-white text-primary text-sm md:text-md ">
                            primereact
                        </div>
                        <div className="rounded-full px-2 py-1 cursor-pointer bg-white text-primary text-sm md:text-md ">
                            material ui
                        </div>
                        <div className="rounded-full px-2 py-1 cursor-pointer bg-white text-primary text-sm md:text-md ">
                            bootstrap 5
                        </div>
                    </div>

                    <div className="flex gap-x-2 gap-y-2 justify-center flex-wrap mt-4 md:mt-8">
                        <a className="font-normal card-title cursor-pointer underline" href="https://stalk.gg" target="_blank">
                            Stalk.gg
                        </a>

                        <a className="font-normal card-title cursor-pointer underline" href="https://media-yefee8.vercel.app" target="_blank">
                            Media
                        </a>

                        <a className="font-normal card-title cursor-pointer underline" href="https://parallax-spa.vercel.app" target="_blank">
                            Parallax Spa
                        </a>
        
                        <a className="font-normal card-title cursor-pointer underline" href="https://yefee8.github.io/react-xox" target="_blank">
                            react-xox
                        </a>
                    </div>
                </div>

                <div className="w-64 h-auto md:w-96 md:h-72 p-4 bg-primary rounded-lg flex flex-col items-center">
                    <h1 className="text-xl card-title md:text-2xl ">
                        Vue.js
                    </h1>

                    <div className="flex gap-x-2 gap-y-2 justify-center flex-wrap mt-4 md:mt-8">
                        <div className="rounded-full px-2 py-1 cursor-pointer bg-white text-primary text-sm md:text-md ">
                            nuxt.js
                        </div>
                        <div className="rounded-full px-2 py-1 cursor-pointer bg-white text-primary text-sm md:text-md ">
                            tailwindcss
                        </div>
                        <div className="rounded-full px-2 py-1 cursor-pointer bg-white text-primary text-sm md:text-md ">
                            primevue
                        </div>
                        <div className="rounded-full px-2 py-1 cursor-pointer bg-white text-primary text-sm md:text-md ">
                            bootstrap 5
                        </div>
                    </div>

                    <div className="flex gap-x-2 gap-y-2 justify-center flex-wrap mt-4 md:mt-8">
                        <a className="font-normal card-title cursor-pointer underline" href="https://request-form-template.netlify.app/" target="_blank">
                            request-form
                        </a>

                        <a className="font-normal card-title cursor-pointer underline" href="https://yefeelanding.netlify.app/" target="_blank">
                            landing page
                        </a>

                        <a className="font-normal card-title cursor-pointer underline" href="https://yefee-shop.vercel.app/" target="_blank">
                            template-shop
                        </a>
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
        </div>
    )
}
