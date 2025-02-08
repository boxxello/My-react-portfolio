import React, {lazy, Suspense} from "react";
import {
    Container,
    Box,
    Heading,
    Text,
    Stack,
    Flex,
    useColorModeValue,
    Button,
} from "@chakra-ui/react";
import {motion} from "framer-motion";
import {FormattedMessage} from "react-intl";
import Type from "./Type";
import AboutMe from "./AboutMe";

const Particle = lazy(() => import("../Particle"));
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionBox = motion(Box);

function Home() {
    const textColor = useColorModeValue("gray.600", "gray.300");
    const headingColor = useColorModeValue("teal.600", "teal.200");
    const buttonBg = useColorModeValue("teal.500", "teal.200");
    const buttonColor = useColorModeValue("white", "gray.800");
    const bgColor = useColorModeValue("gray.900", "gray.900");
    const glowColor = useColorModeValue(
        "0 0 20px rgba(49, 151, 149, 0.6)",
        "0 0 20px rgba(129, 230, 217, 0.6)"
    );

    const containerAnimation = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const arcadeTextAnimation = {
        hidden: { y: 20, opacity: 0 },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4
            }
        }
    };

    const buttonAnimation = {
        initial: { scale: 1 },
        hover: { 
            scale: 1.05,
            transition: {
                duration: 0.2
            }
        },
        tap: { scale: 0.95 }
    };

    return (
        <>
            <Box
                as="section"
                minH="100vh"
                bg={bgColor}
                position="relative"
                overflow="hidden"
            >
                <Suspense fallback={
                    <Text fontFamily="'Press Start 2P', cursive" fontSize="sm">
                        <FormattedMessage id="home.loading"/>
                    </Text>
                }>
                    <Particle/>
                </Suspense>

                <Container maxW="container.xl" position="relative" zIndex={2}>
                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={containerAnimation}
                    >
                        <Flex
                            direction="column"
                            align="center"
                            justify="center"
                            minH="100vh"
                            textAlign="center"
                            pt={{ base: "20", md: "32" }}
                            pb={20}
                            gap={8}
                        >
                            <Stack spacing={8} maxW="800px">
                                <MotionHeading
                                    as="h1"
                                    fontSize={{ base: "2xl", md: "4xl" }}
                                    fontFamily="'Press Start 2P', cursive"
                                    color={headingColor}
                                    variants={arcadeTextAnimation}
                                >
                                    <FormattedMessage id="home.title" />
                                </MotionHeading>
                                <MotionHeading
                                    as="h2"
                                    fontSize={{ base: "xl", md: "2xl" }}
                                    fontFamily="'Press Start 2P', cursive"
                                    color={textColor}
                                    variants={arcadeTextAnimation}
                                    mt={4}
                                >
                                    <Type />
                                </MotionHeading>
                                <MotionText
                                    fontSize={{ base: "md", md: "lg" }}
                                    color={textColor}
                                    variants={arcadeTextAnimation}
                                    textAlign="center"
                                    maxW="2xl"
                                    mt={6}
                                >
                                    <FormattedMessage id="home.description"/>
                                </MotionText>

                                <motion.div
                                    variants={buttonAnimation}
                                    whileHover="hover"
                                    whileTap="tap"
                                >
                                    <Button
                                        as="a"
                                        href="#about"
                                        size="lg"
                                        bg={buttonBg}
                                        color={buttonColor}
                                        fontFamily="'Press Start 2P', cursive"
                                        fontSize="sm"
                                        px={8}
                                        py={6}
                                        _hover={{
                                            transform: "translateY(-2px)",
                                            boxShadow: glowColor
                                        }}
                                    >
                                        PRESS START
                                    </Button>
                                </motion.div>
                            </Stack>
                        </Flex>
                    </motion.div>
                </Container>
            </Box>
            <AboutMe />
        </>
    );
}

export default Home;
