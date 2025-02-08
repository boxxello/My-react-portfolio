import React, {lazy, Suspense} from "react";
import {
    Container,
    Box,
    Heading,
    Text,
    Stack,
    Flex,
    VStack,
    useColorModeValue,
    Button,
} from "@chakra-ui/react";
import {motion} from "framer-motion";
import {FormattedMessage} from "react-intl";
import { keyframes } from "@emotion/react";
import Type from "./Type";
import AboutMe from "./AboutMe";

const Particle = lazy(() => import("../Particle"));
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionBox = motion(Box);

// Define a scanline animation
const scanlineAnim = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100vh);
  }
`;

function Home() {
    const textColor = useColorModeValue("gray.100", "gray.100");
    const headingColor = useColorModeValue("teal.300", "teal.200");
    const buttonBg = useColorModeValue("teal.500", "teal.200");
    const buttonColor = useColorModeValue("gray.900", "gray.900");
    const bgColor = useColorModeValue("gray.900", "gray.900");
    const glowColor = useColorModeValue(
        "0 0 20px rgba(79, 209, 197, 0.8)",
        "0 0 20px rgba(129, 230, 217, 0.8)"
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
        <Box
            minH="100vh"
            bg={bgColor}
            position="relative"
            overflow="hidden"
            css={{
                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)",
                    pointerEvents: "none",
                },
                "&::after": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: "rgba(79, 209, 197, 0.5)",
                    animation: `${scanlineAnim} 6s linear infinite`,
                    opacity: 0.5,
                }
            }}
        >
            <Suspense fallback={
                <Text fontFamily="'Press Start 2P', cursive" fontSize="sm">
                    LOADING...
                </Text>
            }>
                <Particle />
            </Suspense>

            <Container maxW="container.xl" position="relative" py={20}>
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={containerAnimation}
                >
                    <Flex
                        direction="column"
                        align="center"
                        justify="center"
                        minH="80vh"
                        position="relative"
                    >
                        <Stack spacing={8} maxW="800px" align="center">
                            <Box
                                position="absolute"
                                top="-20px"
                                left="50%"
                                transform="translateX(-50%)"
                                width="100px"
                                height="100px"
                                opacity={0.5}
                                bgGradient="radial-gradient(circle, rgba(79, 209, 197, 0.2) 0%, transparent 70%)"
                            />
                            
                            <MotionHeading
                                fontSize={{ base: "3xl", md: "4xl" }}
                                fontWeight="bold"
                                fontFamily="'Press Start 2P', cursive"
                                color={headingColor}
                                variants={arcadeTextAnimation}
                                textAlign="center"
                                style={{ 
                                    textShadow: glowColor,
                                    letterSpacing: "2px"
                                }}
                            >
                                <FormattedMessage id="home.title" />
                            </MotionHeading>

                            <Box
                                border="2px solid"
                                borderColor="teal.400"
                                borderRadius="lg"
                                p={4}
                                bg="rgba(0,0,0,0.3)"
                                boxShadow="0 0 20px rgba(79, 209, 197, 0.3)"
                            >
                                <MotionHeading
                                    as="h2"
                                    fontSize={{ base: "xl", md: "2xl" }}
                                    fontFamily="'Press Start 2P', cursive"
                                    color={textColor}
                                    variants={arcadeTextAnimation}
                                    style={{
                                        fontSize: "14px",
                                        lineHeight: "2"
                                    }}
                                >
                                    <Type />
                                </MotionHeading>
                            </Box>

                            <VStack 
                                align="center" 
                                spacing={6} 
                                bg="rgba(0,0,0,0.4)"
                                p={6}
                                borderRadius="lg"
                                border="1px solid rgba(79, 209, 197, 0.3)"
                            >
                                <MotionText
                                    variants={arcadeTextAnimation}
                                    style={{ 
                                        fontFamily: "'Press Start 2P', cursive",
                                        fontSize: "14px",
                                        lineHeight: "2",
                                        textShadow: "0 0 8px rgba(255,255,255,0.2)"
                                    }}
                                    color={textColor}
                                    textAlign="center"
                                >
                                    <FormattedMessage id="home.description"/>
                                </MotionText>

                                <Box 
                                    mt={8}
                                    position="relative"
                                    _before={{
                                        content: '""',
                                        position: "absolute",
                                        top: "-10px",
                                        left: "-10px",
                                        right: "-10px",
                                        bottom: "-10px",
                                        background: "radial-gradient(circle, rgba(79, 209, 197, 0.2) 0%, transparent 70%)",
                                        borderRadius: "lg",
                                        zIndex: -1
                                    }}
                                >
                                    <Button
                                        as={motion.button}
                                        variants={buttonAnimation}
                                        whileHover="hover"
                                        whileTap="tap"
                                        bg={buttonBg}
                                        color={buttonColor}
                                        px={8}
                                        py={6}
                                        fontSize="lg"
                                        fontFamily="'Press Start 2P', cursive"
                                        _hover={{
                                            transform: "translateY(-2px)",
                                            boxShadow: "0 0 15px rgba(79, 209, 197, 0.8)"
                                        }}
                                        style={{
                                            textShadow: "0 0 5px rgba(255,255,255,0.5)",
                                            border: "3px solid rgba(79, 209, 197, 0.5)",
                                            borderRadius: "8px"
                                        }}
                                    >
                                        PRESS START
                                    </Button>
                                </Box>
                            </VStack>

                            {/* Decorative elements */}
                            <Box
                                position="absolute"
                                bottom="-20px"
                                left="50%"
                                transform="translateX(-50%)"
                                width="200px"
                                height="4px"
                                bgGradient="linear(to-r, transparent, teal.400, transparent)"
                            />
                        </Stack>
                    </Flex>
                </motion.div>
            </Container>
            <AboutMe />
        </Box>
    );
}

export default Home;
