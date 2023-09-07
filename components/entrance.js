import Header from '../components/header';

export default function Entrance() {
    return (
        <div className="entrance">
            <Header />
            <h1 className="text-2xl md:text-4xl">
                Hi, <br />
                <div className="flex">
                    I'm <span className="relative text-primary flex flex-col ml-2">
                        <span className="absolute w-full bg-primary rounded-full opacity-75 h-1 translate-y-[1.4rem] md:translate-y-7 md:h-2"></span>
                        Yefee.
                    </span>
                </div>
                A ui developer.
            </h1>

            <div className="absolute bottom-4">
                <div className="bottom-arrow" />
            </div>
        </div>
    )
}