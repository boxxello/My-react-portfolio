import React, {lazy, Suspense, useRef, useEffect} from "react";
import {
    Container,
    Box,
    Heading,
    Text,
    Stack,
    Flex,
    VStack,
    HStack,
    useColorModeValue,
    Button,
    Badge,
    Icon,
    Tooltip,
    ScaleFade,
} from "@chakra-ui/react";
import {motion, useScroll, useTransform} from "framer-motion";
import {FormattedMessage} from "react-intl";
import { keyframes } from "@emotion/react";
import Type from "./Type";
import AboutMe from "./AboutMe";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaChevronDown } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { SOCIAL_LINKS } from "../../constants/socialLinks";
import { ANIMATIONS, MOTION_VARIANTS } from "../../constants/animations";

const Particle = lazy(() => import("../Particle"));
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionBox = motion(Box);

// Define animations
const scanlineAnim = keyframes`
  from { transform: translateY(0); }
  to { transform: translateY(100vh); }
`;

const glowPulse = keyframes`
    0% { box-shadow: 0 0 10px rgba(79, 209, 197, 0.5); }
    50% { box-shadow: 0 0 20px rgba(79, 209, 197, 0.8); }
    100% { box-shadow: 0 0 10px rgba(79, 209, 197, 0.5); }
`;

const floatAnim = keyframes`
    0% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0); }
`;

const glowBorderAnim = keyframes`
    0% { border-color: rgba(79, 209, 197, 0.3); }
    50% { border-color: rgba(79, 209, 197, 0.8); }
    100% { border-color: rgba(79, 209, 197, 0.3); }
`;

function Home() {
    const textColor = useColorModeValue("gray.100", "gray.100");
    const headingColor = useColorModeValue("teal.300", "teal.200");
    const buttonBg = useColorModeValue("teal.500", "teal.200");
    const buttonColor = useColorModeValue("gray.900", "gray.900");
    const bgColor = useColorModeValue("gray.900", "gray.900");
    const glowColor = useColorModeValue(
        "0 0 20px rgba(79, 209, 197, 0.8)",
        "0 0 20px rgba(129, 230, 217, 0.8)"
    );

    const navigate = useNavigate();
    const { scrollYProgress } = useScroll();
    const heroRef = useRef(null);
    const scrollHintRef = useRef(null);
    
    const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

    // Hide scroll hint when user scrolls
    useEffect(() => {
        const handleScroll = () => {
            if (scrollHintRef.current && window.scrollY > 100) {
                scrollHintRef.current.style.opacity = "0";
            } else if (scrollHintRef.current) {
                scrollHintRef.current.style.opacity = "1";
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Filter social links for header (including LeetCode)
    const headerSocialLinks = Object.values(SOCIAL_LINKS);

    const containerAnimation = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.3 }
        }
    };

    const itemAnimation = {
        hidden: { y: 20, opacity: 0 },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4
            }
        }
    };

    const buttonAnimation = {
        initial: { scale: 1 },
        hover: { 
            scale: 1.05,
            transition: { duration: 0.2 }
        },
        tap: { scale: 0.95 }
    };

    return (
        <Box
            minH="100vh"
            bg={bgColor}
            position="relative"
            overflow="hidden"
            css={{
                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)",
                    pointerEvents: "none",
                },
                "&::after": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: "rgba(79, 209, 197, 0.5)",
                    animation: `${ANIMATIONS.scanline} 6s linear infinite`,
                    opacity: 0.5,
                }
            }}
        >
            <Suspense fallback={
                <Text fontFamily="'Press Start 2P', cursive" fontSize="sm">
                    <FormattedMessage id="home.loading" />
                </Text>
            }>
                <Particle />
            </Suspense>

            {/* Hero Section */}
            <motion.div
                ref={heroRef}
                style={{
                    opacity: heroOpacity,
                    scale: heroScale
                }}
            >
                <Container maxW="container.xl" position="relative" py={20}>
                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={MOTION_VARIANTS.container}
                    >
                        <Flex
                            direction="column"
                            align="center"
                            justify="center"
                            minH="80vh"
                            position="relative"
                        >
                            <Stack spacing={8} maxW="800px" align="center">
                                {/* Glow Effect */}
                                <Box
                                    position="absolute"
                                    top="-20px"
                                    left="50%"
                                    transform="translateX(-50%)"
                                    width="100px"
                                    height="100px"
                                    opacity={0.5}
                                    bgGradient="radial-gradient(circle, rgba(79, 209, 197, 0.2) 0%, transparent 70%)"
                                />

                                <MotionHeading
                                    fontSize={{ base: "3xl", md: "4xl" }}
                                    fontWeight="bold"
                                    fontFamily="'Press Start 2P', cursive"
                                    color={headingColor}
                                    variants={itemAnimation}
                                    textAlign="center"
                                    style={{
                                        textShadow: glowColor,
                                        letterSpacing: "2px"
                                    }}
                                >
                                    <FormattedMessage id="home.title" />
                                </MotionHeading>

                                {/* Description */}
                                <ScaleFade in={true} initialScale={0.9}>
                                    <Text
                                        color={textColor}
                                        fontSize={{ base: "sm", md: "md" }}
                                        textAlign="center"
                                        maxW="600px"
                                        fontFamily="'Press Start 2P', cursive"
                                        lineHeight="1.8"
                                    >
                                        <FormattedMessage id="home.intro.description" />
                                    </Text>
                                </ScaleFade>

                                {/* Call to Action Button */}
                                <Button
                                    onClick={() => navigate('/projects')}
                                    colorScheme="teal"
                                    variant="solid"
                                    size="lg"
                                    mt={6}
                                    _hover={{ transform: 'scale(1.05)' }}
                                    transition="all 0.2s"
                                >
                                    Discover My Projects
                                </Button>

                                {/* Typing Effect Box */}
                                <Box
                                    border="2px solid"
                                    borderColor="teal.400"
                                    borderRadius="lg"
                                    p={4}
                                    bg="rgba(0,0,0,0.3)"
                                    boxShadow="0 0 20px rgba(79, 209, 197, 0.3)"
                                    width="100%"
                                    maxW="600px"
                                    height={{ base: "80px", md: "100px" }}
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    overflow="hidden"
                                >
                                    <MotionHeading
                                        as="h2"
                                        width="100%"
                                        fontFamily="'Press Start 2P', cursive"
                                        color={textColor}
                                        variants={itemAnimation}
                                        style={{
                                            fontSize: "14px",
                                            lineHeight: "2"
                                        }}
                                    >
                                        <Type />
                                    </MotionHeading>
                                </Box>

                                {/* Social Links */}
                                <HStack spacing={4} pt={4}>
                                    {headerSocialLinks.map((social) => (
                                        <motion.div
                                            key={social.name}
                                            variants={MOTION_VARIANTS.item}
                                            whileHover={{ scale: 1.2 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <Tooltip label={<FormattedMessage id={social.messageId} />}>
                                                <Box
                                                    as="a"
                                                    href={social.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label={social.ariaLabel}
                                                >
                                                    <Icon
                                                        as={social.icon}
                                                        boxSize={6}
                                                        color={headingColor}
                                                        transition="all 0.3s"
                                                        _hover={{
                                                            color: "teal.200",
                                                            transform: "translateY(-2px)"
                                                        }}
                                                    />
                                                </Box>
                                            </Tooltip>
                                        </motion.div>
                                    ))}
                                </HStack>

{/*                             
                                <Box
                                    mt={12}
                                    p={8}
                                    bg="rgba(0,0,0,0.5)"
                                    borderRadius="lg"
                                    border="3px solid"
                                    borderColor="teal.400"
                                    position="relative"
                                    overflow="hidden"
                                    _before={{
                                        content: '""',
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: "linear-gradient(45deg, transparent, rgba(79, 209, 197, 0.1), transparent)",
                                        animation: "shine 3s infinite",
                                    }}
                                >
                                </Box> */}

                                {/* Enhanced Scroll Hint */}
                                <motion.div
                                    variants={MOTION_VARIANTS.item}
                                    style={{ width: "100%" }}
                                >
                                    <Box
                                        ref={scrollHintRef}
                                        mt={8}
                                        p={4}
                                        borderRadius="lg"
                                        border="2px solid"
                                        borderColor="teal.400"
                                        bg="rgba(0,0,0,0.3)"
                                        textAlign="center"
                                        transition="all 0.3s"
                                        position="relative"
                                        _hover={{
                                            transform: "translateY(-2px)",
                                            boxShadow: "0 0 15px rgba(79, 209, 197, 0.5)"
                                        }}
                                        css={{
                                            animation: `${ANIMATIONS.glowBorder} 3s infinite`
                                        }}
                                    >
                                        <VStack spacing={3}>
                                            <Text
                                                color={textColor}
                                                fontSize="xs"
                                                fontFamily="'Press Start 2P', cursive"
                                                textShadow={glowColor}
                                            >
                                                <FormattedMessage id="home.scroll.hint" />
                                            </Text>
                                            <Box
                                                position="relative"
                                                _before={{
                                                    content: '""',
                                                    position: "absolute",
                                                    top: "-10px",
                                                    left: "50%",
                                                    transform: "translateX(-50%)",
                                                    width: "2px",
                                                    height: "10px",
                                                    background: "rgba(79, 209, 197, 0.5)",
                                                }}
                                            >
                                                <Icon
                                                    as={FaChevronDown}
                                                    color={headingColor}
                                                    boxSize={6}
                                                    animation={`${ANIMATIONS.float} 2s infinite ease-in-out`}
                                                />
                                            </Box>
                                        </VStack>
                                    </Box>
                                </motion.div>
                            </Stack>
                        </Flex>
                    </motion.div>
                </Container>
            </motion.div>

            <AboutMe />
        </Box>
    );
}

export default Home;
