import React, {lazy, Suspense} from "react";
import {
    Container,
    Box,
    Heading,
    Text,
    Stack,
    Image,
    Flex,
    useColorModeValue,
    Button,
} from "@chakra-ui/react";
import {motion} from "framer-motion";
import {FormattedMessage} from "react-intl";
import Type from "./Type";
import homeLogo from "../../Assets/avatar-5-cmp.webp";
import AboutMe from "./AboutMe";

const Particle = lazy(() => import("../Particle"));
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionBox = motion(Box);
const MotionImage = motion(Image);

function Home() {
    const textColor = useColorModeValue("gray.600", "gray.300");
    const headingColor = useColorModeValue("teal.600", "teal.200");
    const glowColor = useColorModeValue("0 0 10px #4FD1C5", "0 0 10px #81E6D9");
    const buttonBgColor = useColorModeValue("teal.500", "teal.200");
    const buttonHoverBgColor = useColorModeValue("teal.600", "teal.300");

    const containerAnimation = {
        hidden: {opacity: 0},
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const pixelateAnimation = {
        hidden: { 
            opacity: 0,
            filter: "blur(10px)",
            scale: 0.9
        },
        show: { 
            opacity: 1,
            filter: "blur(0px)",
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
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

    const floatAnimation = {
        animate: {
            y: [0, -10, 0],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const buttonAnimation = {
        initial: { scale: 1 },
        hover: { 
            scale: 1.1,
            transition: {
                duration: 0.2,
                yoyo: Infinity
            }
        },
        tap: { scale: 0.95 }
    };

    const scanlineAnimation = {
        animate: {
            y: [0, 100],
            opacity: [0.5, 0],
            transition: {
                y: {
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear"
                },
                opacity: {
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear"
                }
            }
        }
    };

    return (
        <>
            <Box
                as="section"
                minH="100vh"
                pt={{base: "20", md: "32"}}
                pb={20}
                overflow="hidden"
                position="relative"
            >
                <motion.div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "100%",
                        background: "linear-gradient(transparent 50%, rgba(79, 209, 197, 0.1) 50%)",
                        backgroundSize: "100% 4px",
                        pointerEvents: "none",
                    }}
                    {...scanlineAnimation}
                />

                <Suspense fallback={
                    <Text fontFamily="'Press Start 2P', cursive" fontSize="sm">
                        <FormattedMessage id="home.loading"/>
                    </Text>
                }>
                    <Particle/>
                </Suspense>

                <Container maxW="container.xl">
                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={containerAnimation}
                    >
                        <Flex
                            direction={{ base: "column", md: "row" }}
                            align="center"
                            justify="space-between"
                            gap={8}
                        >
                            <Stack spacing={8} flex="1" align={{ base: "center", md: "flex-start" }}>
                                <MotionHeading
                                    as="h1"
                                    fontSize={{base: "2xl", md: "4xl"}}
                                    fontFamily="'Press Start 2P', cursive"
                                    color={headingColor}
                                    variants={arcadeTextAnimation}
                                    style={{ textShadow: glowColor }}
                                >
                                    <FormattedMessage id="home.welcome"/>
                                </MotionHeading>

                                <MotionText
                                    fontSize={{base: "xl", md: "2xl"}}
                                    fontFamily="'Press Start 2P', cursive"
                                    color={headingColor}
                                    variants={arcadeTextAnimation}
                                    style={{ textShadow: glowColor }}
                                >
                                    <FormattedMessage id="home.name"/>
                                </MotionText>

                                <MotionBox variants={arcadeTextAnimation}>
                                    <Type/>
                                </MotionBox>

                                <MotionText
                                    color={textColor}
                                    fontSize={{base: "md", md: "lg"}}
                                    variants={arcadeTextAnimation}
                                    textAlign={{ base: "center", md: "left" }}
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
                                        href="/minigame"
                                        size="lg"
                                        bg={buttonBgColor}
                                        color="white"
                                        _hover={{
                                            bg: buttonHoverBgColor,
                                        }}
                                        fontFamily="'Press Start 2P', cursive"
                                        fontSize="sm"
                                        px={8}
                                        py={6}
                                        style={{
                                            textShadow: "0 0 5px rgba(255,255,255,0.5)",
                                            boxShadow: "0 0 10px rgba(79, 209, 197, 0.5)"
                                        }}
                                    >
                                        <FormattedMessage id="home.play.game" defaultMessage="PLAY GAME" />
                                    </Button>
                                </motion.div>
                            </Stack>

                            <motion.div
                                variants={pixelateAnimation}
                                animate="animate"
                                style={{ flex: 1, display: "flex", justifyContent: "center" }}
                                {...floatAnimation}
                            >
                                <MotionImage
                                    src={homeLogo}
                                    alt="home pic"
                                    height={{ base: "250px", md: "400px" }}
                                    width="auto"
                                    objectFit="contain"
                                    style={{
                                        imageRendering: "pixelated",
                                        filter: "drop-shadow(0 0 8px rgba(79, 209, 197, 0.6))"
                                    }}
                                />
                            </motion.div>
                        </Flex>
                    </motion.div>
                </Container>
            </Box>
            <AboutMe />
        </>
    );
}

export default Home;
