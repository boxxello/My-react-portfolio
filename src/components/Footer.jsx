import React from "react";
import {
    Box,
    Container,
    Text,
    Button,
    Flex,
    useColorModeValue,
} from "@chakra-ui/react";
import { usePreferences } from "../hooks/usePreferences";

function Footer() {
    const { language, setLanguage } = usePreferences();

    return (
        <Box
            as="footer"
            bg={useColorModeValue("gray.100", "gray.900")}
            py={6}
            mt="auto"
        >
            <Container maxW="container.xl">
                <Flex
                    direction={{ base: "column", md: "row" }}
                    justify="space-between"
                    align="center"
                    gap={4}
                >
                    <Box flex="1" />
                    <Text
                        textAlign="center"
                        fontSize="md"
                        color={useColorModeValue("gray.600", "gray.400")}
                    >
                        Designed and Developed by Francesco Bosso
                    </Text>
                    <Box flex="1" textAlign={{ base: "center", md: "right" }}>
                        <Button
                            onClick={() => setLanguage(language === 'en' ? 'it' : 'en')}
                            size="sm"
                            colorScheme="teal"
                        >
                            {language === 'en' ? 'Italiano' : 'English'}
                        </Button>
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
}

export default Footer;
