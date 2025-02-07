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
    SimpleGrid,
    List,
    ListItem,
    ListIcon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import OperatingSys from "./OperatingSys";
import { FaGraduationCap, FaLaptopCode, FaServer } from "react-icons/fa";

const Particle = lazy(() => import("../Particle"));
const MotionHeading = motion(Heading);
const MotionBox = motion(Box);

function About() {
    const purpleColor = useColorModeValue("teal.500", "teal.200");
    const bgColor = useColorModeValue("gray.50", "gray.900");
    const headingColor = useColorModeValue("teal.600", "teal.200");
    const textColor = useColorModeValue("gray.600", "gray.300");

    const containerAnimation = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
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
            bg={bgColor}
            minH="100vh"
            py={20}
        >
            <Suspense fallback={<Text>Loading particles...</Text>}>
                <Particle />
            </Suspense>

            <Container maxW="container.xl">
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={containerAnimation}
                >
                    <MotionHeading
                        as="h1"
                        fontSize={{ base: "2xl", md: "3xl" }}
                        textAlign="center"
                        mb={12}
                        color={headingColor}
                        fontFamily="'Press Start 2P', cursive"
                        variants={itemAnimation}
                    >
                        about('
                        <Text as="span" color={purpleColor}>
                            selected
                        </Text>
                        ')
                    </MotionHeading>

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
                            <MotionHeading
                                as="h2"
                                fontSize={{ base: "xl", md: "2xl" }}
                                mb={4}
                                color={headingColor}
                                fontFamily="'Press Start 2P', cursive"
                                variants={itemAnimation}
                            >
                                Professional{" "}
                                <Text as="span" color={purpleColor}>
                                    Skillset
                                </Text>
                            </MotionHeading>
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

                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                        <MotionBox variants={itemAnimation}>
                            <MotionHeading
                                as="h2"
                                fontSize={{ base: "xl", md: "2xl" }}
                                mb={4}
                                color={headingColor}
                                fontFamily="'Press Start 2P', cursive"
                            >
                                <Text as="span" color={purpleColor}>
                                    Tools
                                </Text>{" "}
                                I use
                            </MotionHeading>
                            <List spacing={3}>
                                <ListItem>
                                    <ListIcon as={FaLaptopCode} color="teal.500" />
                                    <Text as="span" fontWeight="bold" fontFamily="'Press Start 2P', cursive" fontSize="sm">
                                        Frontend:
                                    </Text>
                                    <Text as="span" ml={2}>
                                        <Techstack />
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaServer} color="teal.500" />
                                    <Text as="span" fontWeight="bold" fontFamily="'Press Start 2P', cursive" fontSize="sm">
                                        Backend:
                                    </Text>
                                    <Text as="span" ml={2}>
                                        <Toolstack />
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaGraduationCap} color="teal.500" />
                                    <Text as="span" fontWeight="bold" fontFamily="'Press Start 2P', cursive" fontSize="sm">
                                        Operating Systems:
                                    </Text>
                                    <Text as="span" ml={2}>
                                        <OperatingSys />
                                    </Text>
                                </ListItem>
                            </List>
                        </MotionBox>

                        <MotionBox variants={itemAnimation}>
                            <MotionHeading
                                as="h2"
                                fontSize={{ base: "xl", md: "2xl" }}
                                mb={4}
                                color={headingColor}
                                fontFamily="'Press Start 2P', cursive"
                            >
                                Days I{" "}
                                <Text as="span" color={purpleColor}>
                                    Code
                                </Text>
                            </MotionHeading>
                            <Github />
                        </MotionBox>
                    </SimpleGrid>
                </motion.div>
            </Container>
        </Box>
    );
}

export default About;
