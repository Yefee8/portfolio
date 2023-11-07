"use client"

import { useState } from "react";

export default function GetIn() {
    const [loading, setLoading] = useState(false);

    return (
        <main className="flex justify-center gap-4 flex-col items-center w-full h-full absolute left-0 top-0">
            <h1 className="text-3xl text-primary font-bold flex justify-center relative">
                Please enter the code.
                <div className="w-full h-2 bg-second-primary -z-10 rounded-full absolute translate-y-[2px] bottom-0"></div>
            </h1>

            <form className="flex flex-col gap-2"
                onSubmit={(event) => {
                    alert("sa")
                    event.preventDefault();

                    setLoading(true);
                }}>
                <input type="text" maxLength={5} className="p-4 text-xl outline-none text-primary text-center w-32 font-medium 
                rounded-lg border-2 border-primary/30 focus:border-primary/70 duration-200"
                    placeholder="CODE" />

                <button className="bg-primary/70 hover:bg-primary focus:bg-primary shadow-primary flex justify-center items-center shadow duration-200 rounded-lg text-xl p-4 text-white">
                    {
                        loading ? <div className="w-6 h-6 rounded-full animate-spin border-2 border-t-0 border-b-0 border-white"></div> : "Submit"
                    }
                </button>
            </form>
        </main>
    )
}
