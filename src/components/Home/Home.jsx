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
} from "@chakra-ui/react";
import {motion} from "framer-motion";
import {FormattedMessage} from "react-intl";
import Type from "./Type";
import homeLogo from "../../Assets/avatar-5-cmp.webp";

const Particle = lazy(() => import("../Particle"));
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionBox = motion(Box);

function Home() {
    const textColor = useColorModeValue("gray.600", "gray.300");
    const headingColor = useColorModeValue("teal.600", "teal.200");

    const containerAnimation = {
        hidden: {opacity: 0, y: 20},
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                staggerChildren: 0.3
            }
        }
    };

    const itemAnimation = {
        hidden: {opacity: 0, y: 20},
        show: {opacity: 1, y: 0}
    };

    const imageAnimation = {
        hidden: { opacity: 0, scale: 0.8 },
        show: { 
            opacity: 1, 
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <Box
            as="section"
            minH="100vh"
            pt={{base: "20", md: "32"}}
            pb={20}
        >
            <Suspense fallback={
                <Text fontFamily="'Press Start 2P', cursive" fontSize="sm">
                    <FormattedMessage id="home.loading"/>
                </Text>
            }>
                <Particle/>
            </Suspense>

            <Container maxW="container.xl">
                <Flex
                    direction={{ base: "column", md: "row" }}
                    align="center"
                    justify="space-between"
                    gap={8}
                >
                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={containerAnimation}
                        style={{ flex: 1 }}
                    >
                        <Stack spacing={8} align={{ base: "center", md: "flex-start" }} textAlign={{ base: "center", md: "left" }}>
                            <MotionHeading
                                as="h1"
                                fontSize={{base: "2xl", md: "4xl"}}
                                fontFamily="'Press Start 2P', cursive"
                                color={headingColor}
                                variants={itemAnimation}
                            >
                                <FormattedMessage id="home.welcome"/>
                            </MotionHeading>

                            <MotionText
                                fontSize={{base: "xl", md: "2xl"}}
                                fontFamily="'Press Start 2P', cursive"
                                color={headingColor}
                                variants={itemAnimation}
                            >
                                <FormattedMessage id="home.name"/>
                            </MotionText>

                            <Box h="50px">
                                <Type/>
                            </Box>

                            <MotionText
                                color={textColor}
                                fontSize={{base: "md", md: "lg"}}
                                maxW="2xl"
                                variants={itemAnimation}
                                lineHeight="tall"
                            >
                                <FormattedMessage id="home.description"/>
                            </MotionText>
                        </Stack>
                    </motion.div>

                    <MotionBox
                        flex="1"
                        maxW={{base: "300px", md: "400px"}}
                        px={4}
                        variants={imageAnimation}
                        initial="hidden"
                        animate="show"
                    >
                        <Image
                            src={homeLogo}
                            alt={<FormattedMessage id="home.image.alt"/>}
                            w="100%"
                            h="auto"
                            objectFit="contain"
                            style={{
                                filter: "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.2))",
                                transition: "transform 0.3s ease-in-out",
                            }}
                            _hover={{
                                transform: "scale(1.05)",
                            }}
                        />
                    </MotionBox>
                </Flex>
            </Container>
        </Box>
    );
}

export default Home;
