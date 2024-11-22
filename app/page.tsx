"use client";

import {ReactTyped} from "react-typed";

export default function Home() {
    return (
        <div className="text-center">
            <div className="text-9xl text-wrap mb-20">
                <p>Word een echte</p>
                <ReactTyped
                    className="bg-dark_slate_gray rounded-3xl text-wrap break-words"
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
            <h1 className="mb-2">Dé manier om woorden te leren.</h1>
            <p className="text-2xl">Waarom niet nu? Wat stopt je? Leer nu gewoon je woorden!</p>
        </div>
    )
}