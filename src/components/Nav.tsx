import React from "react";
import { ModeToggle } from "./Toggle";
export function Nav(){
    return(
        <nav className=" absolute top-0 left-0 w-full border-b  backdrop-blur-lg p-5 flex justify-evenly">
            <h2>Yavuz</h2>
            <ModeToggle/>
        </nav>
    )
}