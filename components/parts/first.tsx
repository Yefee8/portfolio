import React, {useEffect, useState} from "react";
import Carousel from "../carousel";
import {Image} from "primereact/image";

export default function First() {
    const fontList = ["'Smooch', cursive", "'Lato', sans-serif", "'Homemade Apple', cursive",
        "'M PLUS 1 Code', sans-serif", "'Shockwave', cursive", "'Splash', cursive"]
    let listCount = 0
    const [font, setFont] = useState("'Shockwave'")

    useEffect(() => {
        const fontChange = setInterval(() => {
            if (listCount === 5) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                listCount = 0;
            } else {
                listCount++;
            }
            setFont(fontList[listCount]);
        }, 750);
        return () => {
            window.clearInterval(fontChange);
        }
    }, []);
    return (
        <div>
            <div className="flex justify-center items-center w-screen flex-col mt-20">

                <Image src="https://avatars.githubusercontent.com/u/75783774?v=4" className="w-52 rounded-lg
                    border-2 border-primary transition duration-200 logo"
                preview
                />

                <h1 className="text-secondary-dark md:ml-1 text-lg h-16 md:text-2xl lg:text-3xl mt-12 font-semibold">
                    Hi, {"I am"}
                    <span style={{fontFamily: font}} className="text-primary ml-3">
                        Yefee
                    </span>
                </h1>

                <h1 style={{fontFamily: 'Shockwave'}} className="text-primary md:ml-1 mt-12">Full-stack dev</h1>

                <div className="mt-12 w-full flex justify-center">
                    <Carousel/>
                </div>
            </div>
        </div>
    )
}
