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
import { FormattedMessage } from "react-intl";
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
        { icon: AiFillGithub, href: "https://github.com/boxxello", ariaLabel: "home.intro.social.github" },
        { icon: AiOutlineTwitter, href: "https://twitter.com/francesco_bosso", ariaLabel: "home.intro.social.twitter" },
        { icon: FaLinkedinIn, href: "https://linkedin.com/in/francesco-bosso-unisa", ariaLabel: "home.intro.social.linkedin" },
        { icon: AiFillInstagram, href: "https://www.instagram.com/boxxo__/", ariaLabel: "home.intro.social.instagram" },
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
                            <FormattedMessage id="home.intro.heading" values={{
                                highlight: (chunks) => (
                                    <Text as="span" color={purpleColor}>
                                        <FormattedMessage id="home.intro.heading.highlight" />
                                    </Text>
                                )
                            }} />
                        </Heading>
                        
                        <VStack align="start" spacing={4}>
                            <Text fontSize="lg">
                                <FormattedMessage id="home.intro.p1" />
                            </Text>
                            
                            <Text fontSize="lg">
                                <FormattedMessage id="home.intro.p2" />{" "}
                                <Text as="span" fontWeight="bold" color={purpleColor}>
                                    <FormattedMessage id="home.intro.p2.highlight" />
                                </Text>
                            </Text>
                            
                            <Text fontSize="lg">
                                <FormattedMessage id="home.intro.p3" />{" "}
                                <Text as="span" fontWeight="bold" color={purpleColor}>
                                    <FormattedMessage id="home.intro.p3.highlight1" />
                                </Text>{" "}
                                <FormattedMessage id="home.intro.p3.between" />{" "}
                                <Text as="span" fontWeight="bold" color={purpleColor}>
                                    <FormattedMessage id="home.intro.p3.highlight2" />
                                </Text>
                            </Text>
                            
                            <Text fontSize="lg">
                                <FormattedMessage id="home.intro.p4" />
                                <br />
                                <Text as="span" fontWeight="bold" color={purpleColor}>
                                    <FormattedMessage id="home.intro.p4.comment" />
                                </Text>
                            </Text>
                        </VStack>

                        <VStack align="start" spacing={4} width="100%">
                            <Heading size="md">
                                <FormattedMessage id="home.intro.connect" />
                            </Heading>
                            <SimpleGrid columns={4} spacing={4}>
                                {socialLinks.map((link, index) => (
                                    <Link
                                        key={index}
                                        href={link.href}
                                        isExternal
                                        aria-label={<FormattedMessage id={link.ariaLabel} />}
                                    >
                                        <Box
                                            p={3}
                                            bg="transparent"
                                            borderRadius="lg"
                                            _hover={{
                                                bg: iconHoverBg,
                                            }}
                                            transition="all 0.3s ease"
                                        >
                                            <Icon
                                                as={link.icon}
                                                boxSize={6}
                                                color={purpleColor}
                                            />
                                        </Box>
                                    </Link>
                                ))}
                            </SimpleGrid>
                        </VStack>
                    </VStack>

                    <Box flex="1" maxW={{ base: "300px", md: "400px" }}>
                        <Tilt>
                            <Image
                                src={myImg4}
                                alt={<FormattedMessage id="home.image.alt" />}
                                borderRadius="2xl"
                                boxShadow="lg"
                                width="100%"
                                height="auto"
                            />
                        </Tilt>
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
}

export default Home2;
