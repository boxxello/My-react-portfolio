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
import { keyframes, css } from "@emotion/react";
import {motion} from "framer-motion";
import {FormattedMessage} from "react-intl";
import Type from "./Type";
import AboutMe from "./AboutMe";

const Particle = lazy(() => import("../Particle"));
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionBox = motion(Box);

// Define keyframes for various animations
const glitch = css`
  ${keyframes`
    0% { text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
                      0.025em 0.04em 0 #fffc00; }
    15% { text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
                       0.025em 0.04em 0 #fffc00; }
    16% { text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
                       -0.05em -0.05em 0 #fffc00; }
    49% { text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
                       -0.05em -0.05em 0 #fffc00; }
    50% { text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,
                       0 -0.04em 0 #fffc00; }
    100% { text-shadow: -0.05em 0 0 #00fffc, -0.025em -0.04em 0 #fc00ff,
                        -0.04em -0.025em 0 #fffc00; }
  `}
`;

const scanlines = css`
  ${keyframes`
    0% { background-position: 0 0; }
    100% { background-position: 0 -100vh; }
  `}
`;

const flicker = css`
  ${keyframes`
    0% { opacity: 0.9; }
    5% { opacity: 0.85; }
    10% { opacity: 0.9; }
    15% { opacity: 0.85; }
    20% { opacity: 0.9; }
    25% { opacity: 1; }
    30% { opacity: 0.9; }
    35% { opacity: 0.95; }
    40% { opacity: 0.9; }
    45% { opacity: 0.95; }
    50% { opacity: 0.9; }
    55% { opacity: 0.95; }
    60% { opacity: 1; }
  `}
`;

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
            scale: 1.1,
            transition: {
                duration: 0.2,
                yoyo: Infinity
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
                _before={{
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(32, 32, 32, 0.1) 2px, rgba(32, 32, 32, 0.1) 2px)",
                    backgroundSize: "100% 4px",
                    animation: `${scanlines} 10s linear infinite`,
                    pointerEvents: "none",
                    opacity: 0.3,
                }}
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
                                    fontSize={{ base: "4xl", md: "6xl" }}
                                    fontFamily="'Press Start 2P', cursive"
                                    color={headingColor}
                                    variants={arcadeTextAnimation}
                                    css={`animation: ${glitch} 2s infinite;`}
                                    style={{ textShadow: glowColor }}
                                >
                                    <FormattedMessage id="home.welcome"/>
                                </MotionHeading>

                                <MotionHeading
                                    as="h2"
                                    fontSize={{ base: "2xl", md: "4xl" }}
                                    fontFamily="'Press Start 2P', cursive"
                                    color={headingColor}
                                    variants={arcadeTextAnimation}
                                    opacity={0.9}
                                    css={`animation: ${flicker} 2s infinite;`}
                                >
                                    <FormattedMessage id="home.name"/>
                                </MotionHeading>

                                <MotionBox 
                                    variants={arcadeTextAnimation}
                                    w="full"
                                >
                                    <Type/>
                                </MotionBox>

                                <MotionText
                                    color={textColor}
                                    fontSize={{ base: "lg", md: "xl" }}
                                    variants={arcadeTextAnimation}
                                    maxW="600px"
                                    mx="auto"
                                    lineHeight="tall"
                                    letterSpacing="wide"
                                    style={{ textShadow: "0 0 8px rgba(255,255,255,0.1)" }}
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
                                        style={{
                                            textShadow: "0 0 5px rgba(255,255,255,0.5)",
                                            boxShadow: "0 0 10px rgba(79, 209, 197, 0.5)"
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
