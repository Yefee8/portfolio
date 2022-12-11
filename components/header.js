export default function Header() {
    return (
        <header className="absolute top-0 left-0 w-full h-36 sm:h-24 flex items-center flex-col sm:flex-row justify-center sm:justify-between gap-y-4 bg-dark z-50">
            <h1 className="sm:ml-8 text-xl md:text-2xl text-primary cursor-pointer flex relative flex-col">
                <span className="absolute w-full bg-primary rounded-full opacity-75 h-1 translate-y-[1.1rem] md:translate-y-[1.3rem] md:h-2"></span>
                Yefee
            </h1>

            <div className="flex flex-wrap justify-center gap-x-4 w-full sm:w-auto sm:mr-8 text-lg md:text-xl">
                <a href="https://github.com/Yefee8">
                    Github
                </a>

                <a href="https://instagram.com/yefee8">
                    Instragram
                </a>

                <a href="mailto:findikliyavuzefe@gmail.com">
                    Mail Me
                </a>
            </div>
        </header>
    )
}