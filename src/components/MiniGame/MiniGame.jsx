import React from "react";
import {
    Box,
    Container,
    Heading,
    Text,
    useColorModeValue,
    VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

function MiniGame() {
    const bgColor = useColorModeValue("gray.50", "gray.900");
    const headingColor = useColorModeValue("teal.600", "teal.200");
    const glowColor = useColorModeValue("0 0 10px #4FD1C5", "0 0 10px #81E6D9");

    const containerAnimation = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                staggerChildren: 0.3
            }
        }
    };

    const itemAnimation = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <Box
            as="section"
            minH="100vh"
            bg={bgColor}
            py={16}
            position="relative"
            overflow="hidden"
        >
            <Container maxW="container.xl">
                <MotionBox
                    initial="hidden"
                    animate="show"
                    variants={containerAnimation}
                >
                    <VStack spacing={8} align="center">
                        <MotionHeading
                            as="h1"
                            fontSize={{ base: "3xl", md: "4xl" }}
                            fontFamily="'Press Start 2P', cursive"
                            color={headingColor}
                            textAlign="center"
                            variants={itemAnimation}
                            style={{ textShadow: glowColor }}
                        >
                            <FormattedMessage 
                                id="minigame.title" 
                                defaultMessage="Mini Game Coming Soon!" 
                            />
                        </MotionHeading>
                        
                        <motion.div variants={itemAnimation}>
                            <Text
                                fontSize="lg"
                                textAlign="center"
                                fontFamily="'Press Start 2P', cursive"
                                fontSize="sm"
                            >
                                <FormattedMessage 
                                    id="minigame.description" 
                                    defaultMessage="Get ready for an awesome retro gaming experience!" 
                                />
                            </Text>
                        </motion.div>
                    </VStack>
                </MotionBox>
            </Container>
        </Box>
    );
}

export default MiniGame;
