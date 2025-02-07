import React from "react";
import { Box, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { ImPointRight } from "react-icons/im";
import { FormattedMessage } from "react-intl";

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
                    <FormattedMessage id="about.card.intro" />{" "}
                    <span style={{ fontWeight: "bold" }}>
                        <FormattedMessage id="about.card.name" />
                    </span>{" "}
                    <FormattedMessage id="about.card.from" />{" "}
                    <a 
                        href="https://goo.gl/maps/pjcVMRXYCcQoqhSd9" 
                        target="_blank" 
                        rel="noreferrer"
                        style={{ fontWeight: "bold" }}
                    >
                        <FormattedMessage id="about.card.location" />
                    </a>
                    <br/>
                    <FormattedMessage id="about.card.studying" />{" "}
                    <a 
                        href="https://www.unisa.it/"
                        target="_blank"
                        rel="noreferrer" 
                        style={{ fontWeight: "bold"}}
                    >
                        <FormattedMessage id="about.card.university" />
                    </a>
                    <br/>
                    <br/>
                    <FormattedMessage id="about.card.hobbies.intro" />
                </Text>
                <VStack align="start" spacing={2} pl={4}>
                    <Text display="flex" alignItems="center">
                        <ImPointRight style={{ marginRight: "8px" }} />
                        <FormattedMessage id="about.card.hobbies.1" />
                    </Text>
                    <Text display="flex" alignItems="center">
                        <ImPointRight style={{ marginRight: "8px" }} />
                        <FormattedMessage id="about.card.hobbies.2" />
                    </Text>
                    <Text display="flex" alignItems="center">
                        <ImPointRight style={{ marginRight: "8px" }} />
                        <FormattedMessage id="about.card.hobbies.3" />
                    </Text>
                    <Text display="flex" alignItems="center">
                        <ImPointRight style={{ marginRight: "8px" }} />
                        <FormattedMessage id="about.card.hobbies.4" />
                    </Text>
                </VStack>
                <Text 
                    fontStyle="italic" 
                    pt={4} 
                    style={{
                        marginBlockEnd: 0, 
                        color: "rgb(155 126 172)"
                    }}
                >
                    "<FormattedMessage id="about.card.quote" />"
                </Text>
            </VStack>
        </Box>
    );
}

export default AboutCard;
