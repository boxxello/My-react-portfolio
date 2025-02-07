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

function ProjectCards(props) {
    const cardBg = useColorModeValue("white", "gray.700");
    const textColor = useColorModeValue("gray.700", "white");

    return (
        <Box
            maxW="sm"
            w="100%"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            bg={cardBg}
            transition="transform 0.3s"
            _hover={{ transform: "scale(1.02)" }}
            height={{ base: "auto", md: "500px" }}
            display="flex"
            flexDirection="column"
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
                    <Heading size="md" color={textColor}>
                        {props.title}
                    </Heading>
                    <Text color={textColor}>
                        {props.description}
                    </Text>
                </VStack>
                
                {props.showBtn ? (
                    <Box mt={4}>
                        <Button
                            as="a"
                            href={props.link}
                            target="_blank"
                            colorScheme="teal"
                            rightIcon={<BiLinkExternal />}
                            width="full"
                        >
                            {props.btn_text || <FormattedMessage id="projects.default.btn" defaultMessage="View Project" />}
                        </Button>
                    </Box>
                ) : (
                    <Box mt={4} height="40px" />
                )}
            </Flex>
        </Box>
    );
}

export default ProjectCards;
