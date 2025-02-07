import React, { useState, useEffect } from "react";
import {
    Box,
    Flex,
    IconButton,
    Image,
    Link as ChakraLink,
    Stack,
    useColorModeValue,
    useDisclosure,
    Container,
    Button,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import logo from "../Assets/logo.png";
import { CgGitFork } from "react-icons/cg";
import {
    AiFillStar,
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { usePreferences } from "../hooks/usePreferences";

function NavbarCustom() {
    const { isOpen, onToggle, onClose } = useDisclosure();
    const { language, setLanguage } = usePreferences();
    const [navBackground, setNavBackground] = useState(false);

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

    const NavItem = ({ to, icon, children }) => {
        const color = useColorModeValue("gray.800", "white");
        return (
            <ChakraLink
                as={RouterLink}
                to={to}
                display="flex"
                alignItems="center"
                px={2}
                py={1}
                rounded="md"
                color={color}
                onClick={handleItemClick}
                _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("gray.200", "gray.700"),
                }}
            >
                {icon}
                <Box ml={1}>{children}</Box>
            </ChakraLink>
        );
    };

    return (
        <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            zIndex="sticky"
            transition="all 0.3s ease-in-out"
            bg={useColorModeValue(
                navBackground ? "white" : "rgba(255, 255, 255, 0.8)",
                navBackground ? "gray.800" : "rgba(26, 32, 44, 0.8)"
            )}
            boxShadow={navBackground ? "sm" : "none"}
            backdropFilter="blur(10px)"
        >
            <Container maxW="container.xl">
                <Flex
                    minH="60px"
                    py={2}
                    px={4}
                    align="center"
                    justify="space-between"
                >
                    <ChakraLink 
                        as={RouterLink} 
                        to="/"
                        onClick={handleItemClick}
                    >
                        <Image
                            src={logo}
                            alt="brand"
                            h="2em"
                            w="3em"
                            objectFit="contain"
                        />
                    </ChakraLink>

                    <IconButton
                        display={{ base: "flex", md: "none" }}
                        onClick={onToggle}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        variant="ghost"
                        aria-label="Toggle Navigation"
                        size="lg"
                    />

                    <Stack
                        direction={{ base: "column", md: "row" }}
                        display={{ base: isOpen ? "flex" : "none", md: "flex" }}
                        width={{ base: "full", md: "auto" }}
                        alignItems="center"
                        spacing={{ base: 2, md: 4 }}
                        mt={{ base: 4, md: 0 }}
                        position={{ base: "absolute", md: "static" }}
                        top="60px"
                        left={0}
                        bg={useColorModeValue("white", "gray.800")}
                        p={{ base: 4, md: 0 }}
                        boxShadow={{ base: "md", md: "none" }}
                        zIndex="dropdown"
                    >
                        <NavItem to="/" icon={<AiOutlineHome style={{ fontSize: "1.2em" }} />}>.is()</NavItem>
                        <NavItem to="/about" icon={<AiOutlineUser style={{ fontSize: "1.2em" }} />}>.about()</NavItem>
                        <NavItem to="/resume" icon={<CgFileDocument style={{ fontSize: "1.2em" }} />}>.resume()</NavItem>
                        <NavItem to="/project" icon={<AiOutlineFundProjectionScreen style={{ fontSize: "1.2em" }} />}>.work()</NavItem>
                        
                        <Stack
                            direction={{ base: "column", md: "row" }}
                            spacing={2}
                            w={{ base: "full", md: "auto" }}
                            align="center"
                        >
                            <Button
                                as="a"
                                href="https://github.com/boxxello"
                                target="_blank"
                                size="sm"
                                colorScheme="teal"
                                leftIcon={<CgGitFork />}
                                rightIcon={<AiFillStar />}
                                onClick={handleItemClick}
                                w={{ base: "full", md: "auto" }}
                            >
                                GitHub
                            </Button>

                            <Button 
                                onClick={() => {
                                    setLanguage(language === 'en' ? 'it' : 'en');
                                    handleItemClick();
                                }}
                                size="sm"
                                colorScheme="blue"
                                w={{ base: "full", md: "auto" }}
                            >
                                {language === 'en' ? 'Italiano' : 'English'}
                            </Button>
                        </Stack>
                    </Stack>
                </Flex>
            </Container>
        </Box>
    );
}

export default NavbarCustom;
