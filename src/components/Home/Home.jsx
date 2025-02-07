import React, {lazy, Suspense} from "react";
import {
    Container,
    Box,
    Flex,
    Heading,
    Text,
    Image,
    useColorModeValue,
} from "@chakra-ui/react";
import homeLogo from "../../Assets/home-main2.svg";
import Home2 from "./Home2";
import Type from "./Type";

const Particle = lazy(() => import("../Particle"));

function Home() {
    const bgColor = useColorModeValue("white", "gray.900");
    const textColor = useColorModeValue("gray.800", "white");
    const accentColor = useColorModeValue("teal.500", "teal.200");

    return (
        <Box as="section">
            <Box
                bg={bgColor}
                minH="100vh"
                py={20}
                position="relative"
            >
                <Suspense fallback={<Text>Loading particles...</Text>}>
                    <Particle/>
                </Suspense>
                
                <Container maxW="container.xl" py={10}>
                    <Flex
                        direction={{ base: "column", md: "row" }}
                        align="center"
                        justify="space-between"
                        gap={8}
                    >
                        <Box flex="1">
                            <Heading
                                as="h1"
                                fontSize={{ base: "4xl", md: "5xl" }}
                                mb={4}
                                color={textColor}
                            >
                                boxxo.
                                <Text as="span" color={accentColor}>
                                    is()
                                </Text>
                            </Heading>

                            <Heading
                                as="h2"
                                fontSize={{ base: "3xl", md: "4xl" }}
                                mb={8}
                                color={accentColor}
                            >
                                Francesco Bosso
                            </Heading>

                            <Box py={12}>
                                <Type />
                            </Box>
                        </Box>

                        <Box
                            flex="1"
                            maxW={{ base: "100%", md: "400px" }}
                            px={4}
                        >
                            <Image
                                src={homeLogo}
                                alt="home pic"
                                w="100%"
                                h="auto"
                                objectFit="contain"
                            />
                        </Box>
                    </Flex>
                </Container>
            </Box>
            <Home2 />
        </Box>
    );
}

export default Home;
