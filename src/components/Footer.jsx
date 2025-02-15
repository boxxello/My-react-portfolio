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
import { SOCIAL_LINKS } from "../constants/socialLinks";
import { MOTION_VARIANTS } from "../constants/animations";

const MotionIconButton = motion(IconButton);
const MotionText = motion(Text);

function Footer() {
    const bgColor = useColorModeValue("gray.50", "gray.900");
    const textColor = useColorModeValue("gray.600", "gray.400");

    const socialLinksArray = Object.values(SOCIAL_LINKS).filter(link => 
        link.name !== "LeetCode" // Exclude LeetCode from footer
    );

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
                        variants={MOTION_VARIANTS.text}
                        fontFamily="'Press Start 2P', cursive"
                        fontSize="sm"
                    >
                        <FormattedMessage id="footer.credit" />
                    </MotionText>

                    <Stack direction="row" spacing={4}>
                        {socialLinksArray.map((social) => (
                            <MotionIconButton
                                key={social.name}
                                as={Link}
                                href={social.url}
                                target="_blank"
                                aria-label={social.ariaLabel}
                                icon={<social.icon />}
                                variant="ghost"
                                size="lg"
                                initial="rest"
                                whileHover="hover"
                                variants={MOTION_VARIANTS.icon}
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
