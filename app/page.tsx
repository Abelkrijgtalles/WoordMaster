"use client";

import {ReactTyped} from "react-typed";

export default function Home() {
    return (
        <>
            <div className="text-center text-7xl">
                <p>Word een echte</p>
                <ReactTyped
                    className="bg-dark_slate_gray rounded-3xl"
                    strings={[
                        "WoordMaster.",
                        "WordMaster.",
                        "ΛογοςMaster.",
                        "VerbumMaster.",
                        "MotMaster.",
                        "WortMaster.",
                    ]}
                    typeSpeed={50}
                    backSpeed={50}
                    backDelay={1500}
                    smartBackspace={false}
                    loop
                />
            </div>
        </>
    )
}