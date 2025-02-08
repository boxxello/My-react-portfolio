import React from "react";
import {
    Container,
    Box,
    Flex,
    Text,
    Heading,
    Image,
    Link,
    SimpleGrid,
    useColorModeValue,
    VStack,
    Icon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";
import Tilt from "react-parallax-tilt";
import myImg4 from "../../Assets/stong_fort.png";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

function AboutMe() {
    const purpleColor = useColorModeValue("teal.600", "teal.300");
    const bgColor = useColorModeValue("gray.50", "rgba(26, 32, 44, 0.95)");
    const iconHoverBg = useColorModeValue("teal.50", "rgba(129, 230, 217, 0.2)");
    const glowColor = useColorModeValue(
        "0 0 8px rgba(79, 209, 197, 0.3)",
        "0 0 12px rgba(129, 230, 217, 0.4)"
    );


    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { 
            opacity: 0,
            y: 20,
            filter: "blur(4px)"
        },
        show: { 
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                type: "spring",
                bounce: 0.4
            }
        }
    };

    const iconVariants = {
        hover: {
            scale: 1.2,
            rotate: [0, -10, 10, -10, 0],
            transition: {
                duration: 0.3
            }
        },
        tap: {
            scale: 0.9
        }
    };

    return (
        <MotionBox
            as="section"
            bg={bgColor}
            py={16}
            id="about"
            initial="hidden"
            animate="show"
            variants={containerVariants}
            overflow="hidden"
            boxShadow={useColorModeValue(
                "inset 0 0 30px rgba(79, 209, 197, 0.1)",
                "inset 0 0 30px rgba(26, 32, 44, 0.3)"
            )}
        >
            <Container maxW="container.xl">
                <MotionFlex
                    direction={{ base: "column", md: "row" }}
                    align="center"
                    justify="space-between"
                    gap={8}
                    variants={itemVariants}
                >
                    <VStack
                        flex="1"
                        align="start"
                        spacing={6}
                        maxW={{ base: "100%", md: "60%" }}
                    >
                        <MotionHeading
                            fontSize={{ base: "3xl", md: "4xl" }}
                            fontWeight="bold"
                            fontFamily="'Press Start 2P', cursive"
                            variants={itemVariants}
                            style={{ textShadow: glowColor }}
                        >
                            <FormattedMessage id="home.intro.heading" values={{
                                highlight: (chunks) => (
                                    <Text as="span" color={purpleColor}>
                                        <FormattedMessage id="home.intro.heading.highlight" />
                                    </Text>
                                )
                            }} />
                        </MotionHeading>
                        
                        <VStack align="start" spacing={4}>
                            <MotionText
                                fontSize="lg"
                                variants={itemVariants}
                                style={{ 
                                    fontFamily: "'Press Start 2P', cursive",
                                    fontSize: "14px",
                                    lineHeight: "2"
                                }}
                            >
                                <FormattedMessage id="home.intro.p1" />
                            </MotionText>
                            
                            <MotionText
                                fontSize="lg"
                                variants={itemVariants}
                                style={{ 
                                    fontFamily: "'Press Start 2P', cursive",
                                    fontSize: "14px",
                                    lineHeight: "2"
                                }}
                            >
                                <FormattedMessage id="home.intro.p2" />{" "}
                                <Text as="span" fontWeight="bold" color={purpleColor}>
                                    <FormattedMessage id="home.intro.p2.highlight" />
                                </Text>
                            </MotionText>
                            
                            <MotionText
                                fontSize="lg"
                                variants={itemVariants}
                                style={{ 
                                    fontFamily: "'Press Start 2P', cursive",
                                    fontSize: "14px",
                                    lineHeight: "2"
                                }}
                            >
                                <FormattedMessage id="home.intro.p3" />{" "}
                                <Text as="span" fontWeight="bold" color={purpleColor}>
                                    <FormattedMessage id="home.intro.p3.highlight1" />
                                </Text>{" "}
                                <FormattedMessage id="home.intro.p3.between" />{" "}
                                <Text as="span" fontWeight="bold" color={purpleColor}>
                                    <FormattedMessage id="home.intro.p3.highlight2" />
                                </Text>
                            </MotionText>
                            <MotionText
                                fontSize="lg"
                                variants={itemVariants}
                                style={{ 
                                    fontFamily: "'Press Start 2P', cursive",
                                    fontSize: "14px",
                                    lineHeight: "2"
                                }}
                            >
                                <FormattedMessage id="home.intro.p4" />
                                <br />
                                <Text as="span" fontWeight="bold" color={purpleColor}>
                                    <FormattedMessage id="home.intro.p4.comment" />
                                </Text>
                            </MotionText>
                        </VStack>

                    </VStack>

                    <Box flex="1" maxW={{ base: "300px", md: "400px" }}>
                        <Tilt
                            tiltMaxAngleX={15}
                            tiltMaxAngleY={15}
                            perspective={3000}
                            scale={1.05}
                            transitionSpeed={2000}
                            gyroscope={true}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeOut"
                                }}
                            >
                                <Image
                                    src={myImg4}
                                    alt="avatar"
                                    w="full"
                                    h="auto"
                                    rounded="lg"
                                    style={{
                                        imageRendering: "pixelated",
                                        filter: "drop-shadow(0 0 8px rgba(79, 209, 197, 0.6))"
                                    }}
                                />
                            </motion.div>
                        </Tilt>
                    </Box>
                </MotionFlex>
            </Container>
        </MotionBox>
    );
}

export default AboutMe;
