import React from "react";
import {
    Container,
    Box,
    Heading,
    Text,
    VStack,
    useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";
import AboutCard from "./AboutCard";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import Virtualization from "./Virtualization";
import Github from "./Github";

const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionBox = motion(Box);

function About() {
    const headingColor = useColorModeValue("teal.600", "teal.200");
    const textColor = useColorModeValue("gray.600", "gray.300");

    const containerAnimation = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.3
            }
        }
    };

    const itemAnimation = {
        hidden: { opacity: 0, y: 20 },
        show: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <Box
            as="section"
            minH="100vh"
            pt={{ base: "20", md: "32" }}
            pb={20}
        >
            <Container maxW="container.lg">
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={containerAnimation}
                >
                    <VStack spacing={12} align="stretch">
                        <VStack spacing={6} align="center">
                            <MotionHeading
                                as="h1"
                                fontSize={{ base: "2xl", md: "4xl" }}
                                fontFamily="'Press Start 2P', cursive"
                                color={headingColor}
                                variants={itemAnimation}
                            >
                                <FormattedMessage id="about.title" />
                            </MotionHeading>
                            
                            <MotionText
                                color={textColor}
                                fontSize={{ base: "md", md: "lg" }}
                                textAlign="center"
                                maxW="2xl"
                                variants={itemAnimation}
                            >
                                <FormattedMessage id="about.subtitle" />
                            </MotionText>
                        </VStack>

                        <VStack spacing={12} w="full">
                            <MotionBox variants={itemAnimation}>
                                <AboutCard />
                            </MotionBox>

                            <MotionBox variants={itemAnimation}>
                                <Heading
                                    as="h2"
                                    size="lg"
                                    color={headingColor}
                                    textAlign="center"
                                    mb={8}
                                    fontFamily="'Press Start 2P', cursive"
                                    fontSize={{ base: "xl", md: "2xl" }}
                                >
                                    <FormattedMessage id="about.skills.professional" />
                                </Heading>
                                <Techstack />
                            </MotionBox>

                            <MotionBox variants={itemAnimation}>
                                <Heading
                                    as="h2"
                                    size="lg"
                                    color={headingColor}
                                    textAlign="center"
                                    mb={8}
                                    fontFamily="'Press Start 2P', cursive"
                                    fontSize={{ base: "xl", md: "2xl" }}
                                >
                                    <FormattedMessage id="about.skills.tools" />
                                </Heading>
                                <Toolstack />
                            </MotionBox>

                            <MotionBox variants={itemAnimation}>
                                <Heading
                                    as="h2"
                                    size="lg"
                                    color={headingColor}
                                    textAlign="center"
                                    mb={8}
                                    fontFamily="'Press Start 2P', cursive"
                                    fontSize={{ base: "xl", md: "2xl" }}
                                >
                                    <FormattedMessage id="about.skills.virtualization" />
                                </Heading>
                                <Virtualization />
                            </MotionBox>

                            <MotionBox variants={itemAnimation}>
                                <Github />
                            </MotionBox>
                        </VStack>
                    </VStack>
                </motion.div>
            </Container>
        </Box>
    );
}

export default About;
