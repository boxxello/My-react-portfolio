import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Typewriter from "typewriter-effect";
import { useIntl } from "react-intl";
import { Text, Box, useColorModeValue } from "@chakra-ui/react";

function Type() {
    const intl = useIntl();
    const textColor = useColorModeValue("gray.100", "gray.100");
    const borderColor = useColorModeValue("teal.300", "teal.200");
    const borderRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1 });
        tl.fromTo(
            borderRef.current,
            { clipPath: "inset(0 0 95% 0)" },
            { clipPath: "inset(0 0 0 95%)", duration: 1, ease: "linear" }
        )
            .to(borderRef.current, {
                clipPath: "inset(95% 0 0 0)",
                duration: 1,
                ease: "linear"
            })
            .to(borderRef.current, {
                clipPath: "inset(0 95% 0 0)",
                duration: 1,
                ease: "linear"
            })
            .to(borderRef.current, {
                clipPath: "inset(0 0 95% 0)",
                duration: 1,
                ease: "linear"
            });
    }, []);

    return (
        <Box position="relative" p={4}>
            <Text
                as="span"
                color={textColor}
                fontFamily="'Press Start 2P', cursive"
                fontSize={{ base: "sm", md: "md" }}
                letterSpacing="1px"
                lineHeight="2"
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
            <Box
                ref={borderRef}
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                border={`2px solid`}
                borderColor={borderColor}
            />
        </Box>
    );
}

export default Type;
