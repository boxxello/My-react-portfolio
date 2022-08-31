import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "IT-Student",
                    "Developer",
                    "Deep Learning DEV",

                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;
