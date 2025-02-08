import React, { useState, useEffect } from "react";
import {
    Box,
    Flex,
    IconButton,
    Link as ChakraLink,
    Stack,
    useColorModeValue,
    useDisclosure,
    Container,
    Button,
    Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FormattedMessage } from "react-intl";
import { CgGitFork } from "react-icons/cg";
import {
    AiFillStar,
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { usePreferences } from "../hooks/usePreferences";
import LanguageSelector from './LanguageSelector';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionIconButton = motion(IconButton);
const MotionText = motion(Text);

function NavbarCustom() {
    const { isOpen, onToggle, onClose } = useDisclosure();
    const { language, setLanguage } = usePreferences();
    const [navBackground, setNavBackground] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 20;
            setNavBackground(show);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleItemClick = () => {
        if (isOpen) {
            onClose();
        }
    };

    const glitchAnimation = {
        initial: { opacity: 1, x: 0 },
        hover: {
            opacity: [1, 0.8, 1],
            x: [0, -2, 2, -2, 0],
            transition: {
                duration: 0.2,
                repeat: Infinity,
                repeatType: "reverse",
            },
        },
    };

    const pixelBorderAnimation = {
        initial: { scale: 1 },
        hover: {
            scale: [1, 1.02, 0.98, 1],
            transition: {
                duration: 0.2,
                repeat: Infinity,
                repeatType: "reverse",
            },
        },
    };

    const logoAnimation = {
        initial: { scale: 1, rotate: 0 },
        hover: {
            scale: [1, 1.1, 1],
            rotate: [0, -5, 5, 0],
            transition: {
                duration: 0.3,
                ease: "easeInOut",
            },
        },
    };

    const NavItem = ({ to, icon, children, itemKey }) => {
        const color = useColorModeValue("gray.800", "white");
        const hoverBg = useColorModeValue("rgba(160, 174, 192, 0.2)", "rgba(255, 255, 255, 0.1)");
        
        return (
            <MotionBox
                initial="initial"
                whileHover="hover"
                variants={pixelBorderAnimation}
                onHoverStart={() => setHoveredItem(itemKey)}
                onHoverEnd={() => setHoveredItem(null)}
                style={{ 
                    position: 'relative',
                    padding: '2px'
                }}
            >
                <ChakraLink
                    as={RouterLink}
                    to={to}
                    display="flex"
                    alignItems="center"
                    px={3}
                    py={2}
                    rounded="md"
                    color={color}
                    onClick={handleItemClick}
                    position="relative"
                    _hover={{
                        textDecoration: "none",
                        bg: hoverBg,
                    }}
                    style={{
                        fontFamily: "'Press Start 2P', cursive",
                        fontSize: "0.8em",
                        letterSpacing: "1px",
                    }}
                >
                    <MotionBox
                        variants={glitchAnimation}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        {icon}
                        <Box ml={2}>{children}</Box>
                    </MotionBox>
                </ChakraLink>
            </MotionBox>
        );
    };

    return (
        <MotionBox
            position="fixed"
            top={0}
            left={0}
            right={0}
            zIndex="sticky"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            style={{
                background: useColorModeValue(
                    navBackground ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.8)",
                    navBackground ? "rgba(26, 32, 44, 0.95)" : "rgba(26, 32, 44, 0.8)"
                ),
                boxShadow: navBackground ? "0 2px 4px rgba(0,0,0,0.1)" : "none",
                backdropFilter: "blur(10px)",
                borderBottom: "2px solid",
                borderColor: useColorModeValue("gray.200", "gray.700"),
            }}
        >
            <Container maxW="container.xl">
                <MotionFlex
                    minH="60px"
                    py={2}
                    px={4}
                    align="center"
                    justify="space-between"
                >
                    <MotionBox
                        whileHover="hover"
                        variants={logoAnimation}
                    >
                        <ChakraLink 
                            as={RouterLink} 
                            to="/"
                            onClick={handleItemClick}
                            _hover={{ textDecoration: 'none' }}
                        >
                            <MotionText
                                fontSize="2xl"
                                fontWeight="bold"
                                fontFamily="'Press Start 2P', cursive"
                                bgGradient="linear(to-r, teal.500, teal.300)"
                                bgClip="text"
                                letterSpacing="wider"
                            >
                                FB
                            </MotionText>
                        </ChakraLink>
                    </MotionBox>

                    <MotionIconButton
                        display={{ base: "flex", md: "none" }}
                        onClick={onToggle}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        variant="ghost"
                        aria-label="Toggle Navigation"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    />

                    <Stack
                        direction={{ base: "column", md: "row" }}
                        display={{ base: isOpen ? "flex" : "none", md: "flex" }}
                        width={{ base: "full", md: "auto" }}
                        alignItems="center"
                        spacing={4}
                        mt={{ base: 4, md: 0 }}
                    >
                        <NavItem to="/" icon={<AiOutlineHome />} itemKey="home">
                            <FormattedMessage id="nav.home" />
                        </NavItem>
                        <NavItem to="/about" icon={<AiOutlineUser />} itemKey="about">
                            <FormattedMessage id="nav.about" />
                        </NavItem>
                        <NavItem to="/resume" icon={<CgFileDocument />} itemKey="resume">
                            <FormattedMessage id="nav.resume" />
                        </NavItem>
                        <NavItem to="/projects" icon={<AiOutlineFundProjectionScreen />} itemKey="work">
                            <FormattedMessage id="nav.work" />
                        </NavItem>
                        
                        <MotionBox
                            whileHover="hover"
                            variants={pixelBorderAnimation}
                        >
                            <Button
                                as="a"
                                href="https://github.com/boxxello"
                                target="_blank"
                                leftIcon={<CgGitFork />}
                                colorScheme="teal"
                                variant="ghost"
                                size="sm"
                                style={{
                                    fontFamily: "'Press Start 2P', cursive",
                                    fontSize: "0.7em",
                                }}
                            >
                                <FormattedMessage id="nav.github" />
                            </Button>
                        </MotionBox>
                        
                        <LanguageSelector />
                    </Stack>
                </MotionFlex>
            </Container>
        </MotionBox>
    );
}

export default NavbarCustom;
