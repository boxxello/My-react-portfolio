import React from "react";
import {
    Box,
    Container,
    Stack,
    Text,
    useColorModeValue,
    IconButton,
    Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";
import {
    FaGithub,
    FaLinkedinIn,
    FaTwitter,
    FaInstagram,
} from "react-icons/fa";

const MotionIconButton = motion(IconButton);
const MotionText = motion(Text);

function Footer() {
    const bgColor = useColorModeValue("gray.50", "gray.900");
    const textColor = useColorModeValue("gray.600", "gray.400");

    const socialLinks = [
        {
            label: "GitHub",
            icon: <FaGithub />,
            href: "https://github.com/boxxello",
        },
        {
            label: "LinkedIn",
            icon: <FaLinkedinIn />,
            href: "https://www.linkedin.com/in/francesco-bosso-034b15194/",
        },
        {
            label: "Twitter",
            icon: <FaTwitter />,
            href: "https://twitter.com/FrancescoBosso8",
        },
        {
            label: "Instagram",
            icon: <FaInstagram />,
            href: "https://www.instagram.com/francesco_bosso_/",
        },
    ];

    const iconAnimation = {
        rest: { scale: 1 },
        hover: { 
            scale: 1.2,
            transition: {
                duration: 0.2,
                type: "spring",
                stiffness: 400,
            }
        },
    };

    const textAnimation = {
        rest: { y: 0 },
        hover: { 
            y: -2,
            transition: {
                duration: 0.2,
                ease: "easeInOut",
            }
        },
    };

    return (
        <Box
            as="footer"
            bg={bgColor}
            color={textColor}
            py={8}
            borderTop="1px"
            borderColor={useColorModeValue("gray.200", "gray.700")}
        >
            <Container maxW="container.xl">
                <Stack
                    direction={{ base: "column", md: "row" }}
                    spacing={4}
                    justify="space-between"
                    align="center"
                >
                    <MotionText
                        initial="rest"
                        whileHover="hover"
                        variants={textAnimation}
                        fontFamily="'Press Start 2P', cursive"
                        fontSize="sm"
                    >
                        Designed and Developed by Francesco Bosso
                    </MotionText>

                    <Stack direction="row" spacing={4}>
                        {socialLinks.map((social) => (
                            <MotionIconButton
                                key={social.label}
                                as={Link}
                                href={social.href}
                                target="_blank"
                                aria-label={social.label}
                                icon={social.icon}
                                variant="ghost"
                                size="lg"
                                initial="rest"
                                whileHover="hover"
                                variants={iconAnimation}
                                _hover={{
                                    color: "teal.500",
                                }}
                            />
                        ))}
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}

export default Footer;
