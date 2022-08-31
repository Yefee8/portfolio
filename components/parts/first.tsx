import React, {useEffect, useState} from "react";
import Carousel from "../carousel";
import {Image} from "primereact/image";

export default function First() {
    const fontList = ["'Smooch'", "'Lato'", "'Homemade Apple'","'Nothing You Could Do'",
        "'M PLUS 1 Code'", "'Permanent Marker'", "'Splash'"]
    let listCount = 0
    const [font, setFont] = useState("'Splash'")

    setTimeout(()=>{
        if (listCount === 5) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                listCount = 0;
            } else {
                listCount++;
            }
            setFont(fontList[listCount]);
    },1250)
    
    return (
        <div>
            <div className="flex justify-center items-center w-screen flex-col mt-20">

                <Image src="https://avatars.githubusercontent.com/u/75783774?v=4" className="w-52 rounded-lg
                    border-2 border-primary transition duration-200 logo"
                       preview
                />

                <h1 className="text-secondary-dark md:ml-1 text-lg h-16 md:text-2xl lg:text-3xl relative right-10 mt-12 font-semibold">
                    Hi, {"I am"}
                    <span style={{fontFamily: font}} className="text-primary absolute ml-3 transition duration-200">
                        Yefee
                    </span>
                </h1>

                <h1 style={{fontFamily: 'Nothing You Could Do'}} className="text-primary md:ml-1 mt-12">Full-stack dev</h1>

                <div className="mt-12 w-full flex justify-center">
                    <Carousel/>
                </div>
            </div>
        </div>
    )
}
