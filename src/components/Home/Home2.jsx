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
import Tilt from "react-parallax-tilt";
import myImg4 from "../../Assets/avatar-5-cmp.webp";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
    const purpleColor = useColorModeValue("teal.500", "teal.200");
    const bgColor = useColorModeValue("gray.50", "gray.900");
    const iconHoverBg = useColorModeValue("gray.200", "gray.700");

    const socialLinks = [
        { icon: AiFillGithub, href: "https://github.com/boxxello" },
        { icon: AiOutlineTwitter, href: "https://twitter.com/francesco_bosso" },
        { icon: FaLinkedinIn, href: "https://linkedin.com/in/francesco-bosso-unisa" },
        { icon: AiFillInstagram, href: "https://www.instagram.com/boxxo__/" },
    ];

    return (
        <Box
            as="section"
            bg={bgColor}
            py={16}
            id="about"
        >
            <Container maxW="container.xl">
                <Flex
                    direction={{ base: "column", md: "row" }}
                    align="center"
                    justify="space-between"
                    gap={8}
                >
                    <VStack
                        flex="1"
                        align="start"
                        spacing={6}
                        maxW={{ base: "100%", md: "60%" }}
                    >
                        <Heading
                            fontSize={{ base: "3xl", md: "4xl" }}
                            fontWeight="bold"
                        >
                            LET ME{" "}
                            <Text as="span" color={purpleColor}>
                                INTRODUCE
                            </Text>{" "}
                            MYSELF
                        </Heading>
                        
                        <VStack align="start" spacing={4}>
                            <Text fontSize="lg">
                                I fell in love with programming since I was 12 y.o. and I have at least learnt since then or so I think… ️
                            </Text>
                            
                            <Text fontSize="lg">
                                I am fluent in classics like{" "}
                                <Text as="span" fontWeight="bold" color={purpleColor}>
                                    C, C#, Java and Python.
                                </Text>
                            </Text>
                            
                            <Text fontSize="lg">
                                My field of interest is related to building new{" "}
                                <Text as="span" fontWeight="bold" color={purpleColor}>
                                    Products
                                </Text>{" "}
                                in areas concerning{" "}
                                <Text as="span" fontWeight="bold" color={purpleColor}>
                                    Deep Learning.
                                </Text>
                            </Text>
                            
                            <Text fontSize="lg">
                                Thanks for checking my website!
                                <br />
                                <Text as="span" fontWeight="bold" color={purpleColor}>
                                    // It's a work in progress so check back often!
                                </Text>
                            </Text>
                        </VStack>
                    </VStack>

                    <Box flex="1" maxW={{ base: "300px", md: "400px" }}>
                        <Tilt>
                            <Image
                                src={myImg4}
                                alt="avatar"
                                borderRadius="xl"
                                objectFit="cover"
                                w="100%"
                                h="auto"
                            />
                        </Tilt>
                    </Box>
                </Flex>

                <VStack spacing={4} mt={16} align="center">
                    <Heading fontSize="2xl">
                        YOU CAN{" "}
                        <Text as="span" color={purpleColor}>
                            FIND
                        </Text>{" "}
                        ME ON
                    </Heading>
                    
                    <Text>
                        multiple{" "}
                        <Text as="span" color={purpleColor}>
                            platforms
                        </Text>{" "}
                        as
                    </Text>

                    <SimpleGrid
                        columns={{ base: 2, sm: 4 }}
                        spacing={8}
                        mt={4}
                    >
                        {socialLinks.map((social, index) => (
                            <Link
                                key={index}
                                href={social.href}
                                isExternal
                                _hover={{
                                    textDecoration: "none",
                                }}
                            >
                                <Box
                                    p={3}
                                    borderRadius="full"
                                    transition="all 0.3s"
                                    _hover={{
                                        bg: iconHoverBg,
                                        transform: "translateY(-2px)",
                                    }}
                                >
                                    <Icon
                                        as={social.icon}
                                        boxSize={8}
                                        color={purpleColor}
                                    />
                                </Box>
                            </Link>
                        ))}
                    </SimpleGrid>
                </VStack>
            </Container>
        </Box>
    );
}

export default Home2;
