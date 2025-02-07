import React from "react";
import Typewriter from "typewriter-effect";
import { useIntl } from "react-intl";
import { Text, useColorModeValue } from "@chakra-ui/react";

function Type() {
    const intl = useIntl();
    const textColor = useColorModeValue("teal.600", "teal.200");

    return (
        <Text
            as="span"
            color={textColor}
            fontFamily="'Press Start 2P', cursive"
            fontSize={{ base: "sm", md: "md" }}
        >
            <Typewriter
                options={{
                    strings: [
                        intl.formatMessage({ id: "home.typewriter.first" }),
                        intl.formatMessage({ id: "home.typewriter.second" }),
                        intl.formatMessage({ id: "home.typewriter.third" }),
                        intl.formatMessage({ id: "home.typewriter.fourth" })
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    delay: 50
                }}
            />
        </Text>
    );
}

export default Type;
