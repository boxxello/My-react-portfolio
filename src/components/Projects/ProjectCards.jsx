import React from "react";
import {
    Box,
    Image,
    Text,
    Button,
    useColorModeValue,
    VStack,
    Heading,
} from "@chakra-ui/react";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
    const cardBg = useColorModeValue("white", "gray.700");
    const textColor = useColorModeValue("gray.700", "white");

    return (
        <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            bg={cardBg}
            transition="transform 0.3s"
            _hover={{ transform: "scale(1.02)" }}
            height="100%"
        >
            <Box position="relative" paddingTop="100%">
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
            <VStack p={6} spacing={4} align="start" height="calc(100% - 100%)">
                <Heading size="md" color={textColor}>
                    {props.title}
                </Heading>
                <Text color={textColor} flex="1">
                    {props.description}
                </Text>
                {props.showBtn && (
                    <Button
                        as="a"
                        href={props.link}
                        target="_blank"
                        colorScheme="teal"
                        rightIcon={<BiLinkExternal />}
                        width="full"
                    >
                        {props.btn_text || "View Project"}
                    </Button>
                )}
            </VStack>
        </Box>
    );
}

export default ProjectCards;
