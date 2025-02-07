import React from "react";
import {
    Box,
    Text,
    VStack,
    useColorModeValue,
    List,
    ListItem,
    ListIcon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";
import { FaGraduationCap, FaCode, FaHeart } from "react-icons/fa";

const MotionBox = motion(Box);
const MotionText = motion(Text);

function AboutCard() {
    const bgColor = useColorModeValue("gray.50", "gray.700");
    const borderColor = useColorModeValue("teal.500", "teal.200");
    const textColor = useColorModeValue("gray.600", "gray.300");

    const containerAnimation = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                staggerChildren: 0.2
            }
        }
    };

    const itemAnimation = {
        hidden: { opacity: 0, x: -20 },
        show: { 
            opacity: 1, 
            x: 0,
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <MotionBox
            initial="hidden"
            animate="show"
            variants={containerAnimation}
            bg={bgColor}
            p={6}
            rounded="lg"
            border="2px"
            borderColor={borderColor}
            shadow="lg"
            _hover={{
                transform: "translateY(-5px)",
                transition: "transform 0.3s ease"
            }}
        >
            <VStack spacing={4} align="stretch">
                <List spacing={4}>
                    <ListItem as={motion.div} variants={itemAnimation}>
                        <ListIcon as={FaGraduationCap} color="teal.500" fontSize="xl" />
                        <MotionText
                            as="span"
                            fontFamily="'Press Start 2P', cursive"
                            fontSize="sm"
                            color={textColor}
                        >
                            <FormattedMessage id="about.education" />
                        </MotionText>
                    </ListItem>

                    <ListItem as={motion.div} variants={itemAnimation}>
                        <ListIcon as={FaCode} color="teal.500" fontSize="xl" />
                        <MotionText
                            as="span"
                            fontFamily="'Press Start 2P', cursive"
                            fontSize="sm"
                            color={textColor}
                        >
                            <FormattedMessage id="about.interests" />
                        </MotionText>
                    </ListItem>

                    <ListItem as={motion.div} variants={itemAnimation}>
                        <ListIcon as={FaHeart} color="teal.500" fontSize="xl" />
                        <MotionText
                            as="span"
                            fontFamily="'Press Start 2P', cursive"
                            fontSize="sm"
                            color={textColor}
                        >
                            <FormattedMessage id="about.hobbies" />
                        </MotionText>
                    </ListItem>
                </List>

                <MotionText
                    variants={itemAnimation}
                    color={textColor}
                    fontSize="sm"
                    mt={4}
                    lineHeight="tall"
                >
                    <FormattedMessage id="about.description" />
                </MotionText>
            </VStack>
        </MotionBox>
    );
}

export default AboutCard;
