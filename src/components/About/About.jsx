import React, { lazy, Suspense } from "react";
import {
    Container,
    Box,
    Flex,
    Heading,
    Text,
    Image,
    VStack,
    useColorModeValue,
} from "@chakra-ui/react";

import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import OperatingSys from "./OperatingSys";

const Particle = lazy(() => import("../Particle"));

function About() {
    const purpleColor = useColorModeValue("teal.500", "teal.200");
    const bgColor = useColorModeValue("gray.50", "gray.900");

    return (
        <Box
            as="section"
            bg={bgColor}
            minH="100vh"
            py={20}
        >
            <Suspense fallback={<Text>Loading particles...</Text>}>
                <Particle />
            </Suspense>

            <Container maxW="container.xl">
                <Flex
                    direction={{ base: "column", md: "row" }}
                    align="center"
                    justify="space-between"
                    gap={8}
                    mb={16}
                >
                    <VStack
                        flex="1"
                        align="start"
                        spacing={6}
                        maxW={{ base: "100%", md: "60%" }}
                    >
                        <Heading
                            fontSize={{ base: "2xl", md: "3xl" }}
                            mb={4}
                        >
                            about('
                            <Text as="span" color={purpleColor}>
                                selected
                            </Text>
                            ')
                        </Heading>
                        <Aboutcard />
                    </VStack>

                    <Box
                        flex="1"
                        maxW={{ base: "300px", md: "400px" }}
                        mt={{ base: 8, md: 16 }}
                    >
                        <Image
                            src={laptopImg}
                            alt="about"
                            w="100%"
                            h="auto"
                            objectFit="contain"
                        />
                    </Box>
                </Flex>

                <VStack spacing={16} align="stretch">
                    <Box>
                        <Heading
                            fontSize={{ base: "2xl", md: "3xl" }}
                            mb={8}
                            textAlign="center"
                        >
                            Professional{" "}
                            <Text as="span" color={purpleColor}>
                                Skillset
                            </Text>
                        </Heading>
                        <Techstack />
                    </Box>

                    <Box>
                        <Heading
                            fontSize={{ base: "2xl", md: "3xl" }}
                            mb={8}
                            textAlign="center"
                        >
                            <Text as="span" color={purpleColor}>
                                Tools
                            </Text>{" "}
                            I use
                        </Heading>
                        <Toolstack />
                    </Box>

                    <Box>
                        <Heading
                            fontSize={{ base: "2xl", md: "3xl" }}
                            mb={8}
                            textAlign="center"
                        >
                            <Text as="span" color={purpleColor}>
                                Operating Systems
                            </Text>{" "}
                            I use
                        </Heading>
                        <OperatingSys />
                    </Box>

                    <Box>
                        <Heading
                            fontSize={{ base: "2xl", md: "3xl" }}
                            mb={8}
                            textAlign="center"
                        >
                            Days I{" "}
                            <Text as="span" color={purpleColor}>
                                Code
                            </Text>
                        </Heading>
                        <Github />
                    </Box>
                </VStack>
            </Container>
        </Box>
    );
}

export default About;
