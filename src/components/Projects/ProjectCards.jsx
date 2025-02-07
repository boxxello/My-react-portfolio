import React from "react";
import {
    Box,
    Image,
    Text,
    Button,
    useColorModeValue,
    VStack,
    Heading,
    Flex,
} from "@chakra-ui/react";
import { BiLinkExternal } from "react-icons/bi";
import { FormattedMessage } from "react-intl";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

function ProjectCards(props) {
    const cardBg = useColorModeValue("gray.50", "gray.700");
    const textColor = useColorModeValue("gray.700", "gray.200");
    const borderColor = useColorModeValue("teal.500", "teal.200");
    const buttonBg = useColorModeValue("teal.500", "teal.200");
    const buttonHoverBg = useColorModeValue("teal.600", "teal.300");

    const cardAnimation = {
        rest: {
            scale: 1,
            border: "2px solid transparent",
            transition: {
                duration: 0.2,
                type: "tween",
                ease: "easeIn"
            }
        },
        hover: {
            scale: 1.05,
            border: `2px solid ${useColorModeValue("#319795", "#81E6D9")}`,
            transition: {
                duration: 0.2,
                type: "tween",
                ease: "easeOut"
            }
        }
    };

    return (
        <MotionBox
            maxW="sm"
            w="100%"
            borderRadius="lg"
            overflow="hidden"
            bg={cardBg}
            height={{ base: "auto", md: "500px" }}
            display="flex"
            flexDirection="column"
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={cardAnimation}
        >
            <Box position="relative" paddingTop="56.25%">
                <Image
                    src={props.imgPath}
                    alt="project"
                    objectFit="cover"
                    position="absolute"
                    top="0"
                    left="0"
                    width="100%"
                    height="100%"
                />
            </Box>
            
            <Flex direction="column" p={6} flex="1" justify="space-between">
                <VStack spacing={4} align="start">
                    <Heading 
                        size="md" 
                        color={textColor}
                        fontFamily="'Press Start 2P', cursive"
                        fontSize="sm"
                    >
                        {props.title}
                    </Heading>
                    <Text 
                        color={textColor}
                        fontSize="sm"
                    >
                        {props.description}
                    </Text>
                </VStack>
                
                {props.showBtn ? (
                    <Box mt={4}>
                        <Button
                            as="a"
                            href={props.link}
                            target="_blank"
                            bg={buttonBg}
                            color="white"
                            rightIcon={<BiLinkExternal />}
                            width="full"
                            _hover={{
                                bg: buttonHoverBg,
                                transform: "translateY(-2px)",
                                boxShadow: "lg"
                            }}
                            fontFamily="'Press Start 2P', cursive"
                            fontSize="xs"
                            height="auto"
                            py={4}
                        >
                            {props.btn_text || <FormattedMessage id="projects.default.btn" defaultMessage="View Project" />}
                        </Button>
                    </Box>
                ) : (
                    <Box mt={4} height="40px" />
                )}
            </Flex>
        </MotionBox>
    );
}

export default ProjectCards;
