import React from "react";
import Typewriter from "typewriter-effect";
import { useIntl } from "react-intl";

function Type() {
    const intl = useIntl();
    
    const strings = [
        intl.formatMessage({ id: "home.typewriter.0" }),
        intl.formatMessage({ id: "home.typewriter.1" }),
        intl.formatMessage({ id: "home.typewriter.2" }),
    ];

    return (
        <Typewriter
            options={{
                strings,
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;
