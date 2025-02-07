import React from "react";
import { Box, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    const bgColor = useColorModeValue("white", "gray.700");
    const textColor = useColorModeValue("gray.700", "gray.200");

    return (
        <Box
            p={6}
            bg={bgColor}
            borderRadius="lg"
            boxShadow="lg"
            color={textColor}
        >
            <VStack align="start" spacing={4}>
                <Text>
                    Hi everyone, I am <span style={{ fontWeight: "bold" }}>Francesco Bosso </span>
                    from <a href={"https://goo.gl/maps/pjcVMRXYCcQoqhSd9"} target="_blank" rel={"noreferrer"}
                            style={{ fontWeight: "bold" }}>Portici, Italia.</a>
                    <br/>I'm currently studying for IT at <a href={"https://www.unisa.it/"}
                                                                 target="_blank"
                                                                 rel={"noreferrer"} style={{ fontWeight: "bold"}}> Fisciano
                        Univerisity</a>
                    <br/>
                    <br/>
                    Apart from coding, here are some activities that I like doing:
                </Text>
                <VStack align="start" spacing={2} pl={4}>
                    <Text display="flex" alignItems="center">
                        <ImPointRight style={{ marginRight: "8px" }} /> Travelling
                    </Text>
                    <Text display="flex" alignItems="center">
                        <ImPointRight style={{ marginRight: "8px" }} /> Drawing
                    </Text>
                    <Text display="flex" alignItems="center">
                        <ImPointRight style={{ marginRight: "8px" }} /> Illustrating album arts
                    </Text>
                    <Text display="flex" alignItems="center">
                        <ImPointRight style={{ marginRight: "8px" }} /> Thinking about new startups
                    </Text>
                </VStack>
                <Text fontStyle="italic" pt={4} style={{marginBlockEnd: 0, color: "rgb(155 126 172)"}}>
                    "Do what you love love what you do"{" "}
                </Text>
            </VStack>
        </Box>
    );
}

export default AboutCard;
