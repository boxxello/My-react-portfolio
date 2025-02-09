import React from "react";
import Typewriter from "typewriter-effect";
import { useIntl } from "react-intl";
import { Box, useColorModeValue } from "@chakra-ui/react";

function Type() {
    const intl = useIntl();
    const textColor = useColorModeValue("gray.100", "gray.100");

    return (
        <Box
            color={textColor}
            fontFamily="'Press Start 2P', cursive"
            fontSize={{ base: "sm", md: "md" }}
            height={{ base: "60px", md: "80px" }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="relative"
            overflow="hidden"
            sx={{
                "& .Typewriter": {
                    width: "100%",
                    textAlign: "center",
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)"
                }
            }}
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
        </Box>
    );
}

export default Type;
