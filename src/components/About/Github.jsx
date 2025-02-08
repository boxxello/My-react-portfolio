import React, { useState, useEffect } from "react";
import {
    Box,
    VStack,
    HStack,
    Text,
    Grid,
    GridItem,
    useColorModeValue,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    Heading,
    Tooltip,
    Badge,
    Spinner,
    Center,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";
import { FormattedMessage } from "react-intl";
import {
    SiGithub,
    SiGit,
    SiPython,
    SiJavascript,
    SiCplusplus,
    SiCsharp,
    SiHtml5,
    SiCss3,
    SiPhp,
    SiRuby,
    SiSwift,
    SiKotlin,
    SiRust,
    SiGo,
} from "react-icons/si";
import { FaCode, FaStar, FaCodeBranch } from "react-icons/fa";
import { githubService } from "../../services/github";

const MotionBox = motion(Box);
const MotionGrid = motion(Grid);
const MotionBadge = motion(Badge);

// Map of language names to their corresponding icons
const LANGUAGE_ICONS = {
    Python: SiPython,
    JavaScript: SiJavascript,
    "C++": SiCplusplus,
    "C#": SiCsharp,
    HTML: SiHtml5,
    CSS: SiCss3,
    PHP: SiPhp,
    Ruby: SiRuby,
    Swift: SiSwift,
    Kotlin: SiKotlin,
    Rust: SiRust,
    Go: SiGo,
};

function Github() {
    const [githubStats, setGithubStats] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const bgColor = useColorModeValue("gray.50", "gray.700");
    const borderColor = useColorModeValue("teal.500", "teal.200");
    const textColor = useColorModeValue("gray.700", "gray.200");
    const statBgColor = useColorModeValue("white", "gray.800");
    const errorColor = useColorModeValue("red.500", "red.300");

    const calendarTheme = useColorModeValue(
        {
            level0: '#ebedf0',
            level1: '#9be9a8',
            level2: '#40c463',
            level3: '#30a14e',
            level4: '#216e39',
        },
        {
            level0: '#161b22',
            level1: '#0e4429',
            level2: '#006d32',
            level3: '#26a641',
            level4: '#39d353',
        }
    );

    useEffect(() => {
        const fetchStats = async () => {
            try {
                setLoading(true);
                const stats = await githubService.fetchUserStats();
                setGithubStats(stats);
                setError(null);
            } catch (err) {
                console.error('Error fetching GitHub stats:', err);
                setError('Failed to load GitHub statistics');
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    const containerAnimation = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                staggerChildren: 0.2
            }
        }
    };

    const itemAnimation = {
        hidden: { opacity: 0, scale: 0.9 },
        show: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3
            }
        }
    };

    const badgeAnimation = {
        rest: { scale: 1 },
        hover: { 
            scale: 1.1,
            transition: {
                duration: 0.2,
                type: "spring",
                stiffness: 400,
            }
        }
    };

    const StatCard = ({ icon: Icon, label, value, helpText }) => (
        <MotionBox
            variants={itemAnimation}
            bg={statBgColor}
            p={4}
            rounded="lg"
            shadow="md"
            border="1px"
            borderColor={borderColor}
            transition="transform 0.2s"
            _hover={{ transform: "translateY(-2px)" }}
        >
            <Stat>
                <HStack spacing={2} mb={2}>
                    <Icon size="20px" color={borderColor} />
                    <StatLabel fontFamily="'Press Start 2P', cursive" fontSize="xs">{label}</StatLabel>
                </HStack>
                <StatNumber fontSize="2xl" color={textColor}>
                    {loading ? <Spinner size="sm" /> : value}
                </StatNumber>
                {helpText && (
                    <StatHelpText fontSize="xs" color={textColor}>
                        {helpText}
                    </StatHelpText>
                )}
            </Stat>
        </MotionBox>
    );

    const LanguageBadge = ({ icon: Icon, name, percentage }) => (
        <MotionBadge
            variants={badgeAnimation}
            initial="rest"
            whileHover="hover"
            display="flex"
            alignItems="center"
            gap={2}
            px={3}
            py={2}
            borderRadius="full"
            bg={statBgColor}
            color={textColor}
            border="1px"
            borderColor={borderColor}
            cursor="pointer"
        >
            <Icon />
            <Text fontSize="xs" fontFamily="'Press Start 2P', cursive">
                {name} {percentage}%
            </Text>
        </MotionBadge>
    );

    if (error) {
        return (
            <Center p={8}>
                <Text color={errorColor} fontSize="lg">
                    {error}
                </Text>
            </Center>
        );
    }

    return (
        <VStack spacing={8} w="full">
            <MotionGrid
                variants={containerAnimation}
                initial="hidden"
                animate="show"
                templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
                gap={6}
                w="full"
            >
                <StatCard
                    icon={FaCode}
                    label={<FormattedMessage id="about.github.stats.commits" />}
                    value={githubStats?.commits ? `${Math.floor(githubStats.commits / 100) * 100}+` : '-'}
                    helpText={<FormattedMessage id="about.github.stats.commits.help" />}
                />
                <StatCard
                    icon={FaStar}
                    label={<FormattedMessage id="about.github.stats.stars" />}
                    value={githubStats?.stars ? `${githubStats.stars}` : '-'}
                    helpText={<FormattedMessage id="about.github.stats.stars.help" />}
                />
                <StatCard
                    icon={FaCodeBranch}
                    label={<FormattedMessage id="about.github.stats.repos" />}
                    value={githubStats?.repos ? `${githubStats.repos}` : '-'}
                    helpText={<FormattedMessage id="about.github.stats.repos.help" />}
                />
                <StatCard
                    icon={SiGit}
                    label={<FormattedMessage id="about.github.stats.contributions" />}
                    value={githubStats?.contributions ? `${githubStats.contributions}+` : '-'}
                    helpText={<FormattedMessage id="about.github.stats.contributions.help" />}
                />
            </MotionGrid>

            {githubStats?.languages && (
                <MotionBox
                    variants={containerAnimation}
                    initial="hidden"
                    animate="show"
                    bg={bgColor}
                    p={6}
                    rounded="lg"
                    border="2px"
                    borderColor={borderColor}
                    shadow="lg"
                    w="full"
                    transition="transform 0.3s ease"
                    _hover={{ transform: "translateY(-5px)" }}
                >
                    <VStack spacing={4} align="stretch">
                        <Heading size="md" fontFamily="'Press Start 2P', cursive" fontSize="sm">
                            <FormattedMessage id="about.github.languages.title" />
                        </Heading>
                        <HStack spacing={4} flexWrap="wrap" justify="center">
                            {Object.entries(githubStats.languages).map(([language, percentage]) => (
                                <LanguageBadge
                                    key={language}
                                    icon={LANGUAGE_ICONS[language] || SiGithub}
                                    name={language}
                                    percentage={percentage}
                                />
                            ))}
                        </HStack>
                    </VStack>
                </MotionBox>
            )}

            <MotionBox
                variants={containerAnimation}
                initial="hidden"
                animate="show"
                bg={bgColor}
                p={6}
                rounded="lg"
                border="2px"
                borderColor={borderColor}
                shadow="lg"
                w="full"
                maxW="800px"
                mx="auto"
                transition="transform 0.3s ease"
                _hover={{ transform: "translateY(-5px)" }}
                overflowX="auto"
            >
                <VStack spacing={4} align="stretch">
                    <Heading size="md" fontFamily="'Press Start 2P', cursive" fontSize="sm">
                        <FormattedMessage id="about.github.activity.title" />
                    </Heading>
                    <GitHubCalendar
                        username="boxxello"
                        blockSize={12}
                        blockMargin={5}
                        theme={calendarTheme}
                        fontSize={16}
                        style={{ width: '100%' }}
                    />
                </VStack>
            </MotionBox>

            <MotionBox
                variants={containerAnimation}
                initial="hidden"
                animate="show"
                bg={bgColor}
                p={6}
                rounded="lg"
                border="2px"
                borderColor={borderColor}
                shadow="lg"
                w="full"
                transition="transform 0.3s ease"
                _hover={{ transform: "translateY(-5px)" }}
            >
                <VStack spacing={4} align="stretch">
                    <Heading size="md" fontFamily="'Press Start 2P', cursive" fontSize="sm">
                        <FormattedMessage id="about.github.streak.title" />
                    </Heading>
                    <Box
                        as="iframe"
                        src="https://github-readme-streak-stats.herokuapp.com/?user=boxxello&theme=react&hide_border=true&background=0D1117"
                        w="100%"
                        h="200px"
                        border="none"
                        overflow="hidden"
                        loading="lazy"
                    />
                </VStack>
            </MotionBox>
        </VStack>
    );
}

export default Github;
