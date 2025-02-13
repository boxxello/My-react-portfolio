import React from "react";
import {
    Box,
    Image,
    Text,
    Button,
    useColorModeValue,
    VStack,
    Icon,
    Heading,
    Tooltip,
    Skeleton,
    Badge,
} from "@chakra-ui/react";
import { FaGithub, FaExternalLinkAlt, FaEnvelope } from "react-icons/fa";
import { FormattedMessage, useIntl } from "react-intl";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const ProjectStatus = {
    LIVE: "live",
    IN_DEVELOPMENT: "inDevelopment",
    COMING_SOON: "comingSoon",
    DISCONTINUED: "discontinued"
};

function ProjectCards({ 
    imgPath, 
    title, 
    description, 
    ghLink, 
    demoLink,
    showContactButton,
    isComingSoon,
    status
}) {
    const intl = useIntl();
    const [imageLoaded, setImageLoaded] = React.useState(false);
    const [imageError, setImageError] = React.useState(false);
    const cardBg = useColorModeValue("gray.50", "gray.700");
    const textColor = useColorModeValue("gray.700", "gray.200");
    const primaryColor = useColorModeValue("teal.500", "teal.200");
    const secondaryBg = useColorModeValue("gray.200", "gray.600");
    const accentColor = useColorModeValue("purple.500", "purple.200");

    const handleContactClick = () => {
        window.location.href = `mailto:info@boxxo@box-xo.com?subject=Question about ${title}`;
    };

    const cardAnimation = {
        rest: {
            scale: 1,
            border: "2px solid transparent",
            transition: {
                duration: 0.3,
                type: "spring",
                stiffness: 300,
                damping: 20
            }
        },
        hover: {
            scale: isComingSoon ? 1 : 1.03,
            border: `2px solid ${useColorModeValue("#319795", "#81E6D9")}`,
            transition: {
                duration: 0.3,
                type: "spring",
                stiffness: 300,
                damping: 20
            }
        }
    };

    const buttonStyles = {
        base: {
            fontFamily: "'Press Start 2P', cursive",
            fontSize: "xs",
            py: 4,
            px: 6,
            transition: "all 0.2s",
            whiteSpace: "normal",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            _hover: {
                transform: "translateY(-2px)",
                boxShadow: "lg"
            }
        },
        primary: {
            bg: primaryColor,
            color: "white",
            _hover: {
                opacity: 0.9
            }
        },
        secondary: {
            bg: secondaryBg,
            color: textColor,
            _hover: {
                opacity: 0.9
            }
        }
    };

    const getStatusBadge = (status) => {
        switch(status) {
            case ProjectStatus.LIVE:
                return {
                    colorScheme: "green",
                    messageId: "projects.status.live",
                    defaultMessage: "Live"
                };
            case ProjectStatus.IN_DEVELOPMENT:
                return {
                    colorScheme: "purple",
                    messageId: "projects.status.inDevelopment",
                    defaultMessage: "In Development"
                };
            case ProjectStatus.COMING_SOON:
                return {
                    colorScheme: "gray",
                    messageId: "projects.status.comingSoon",
                    defaultMessage: "Coming Soon"
                };
            case ProjectStatus.DISCONTINUED:
                return {
                    colorScheme: "red",
                    messageId: "projects.status.discontinued",
                    defaultMessage: "Discontinued"
                };
            default:
                return null;
        }
    };

    return (
        <MotionBox
            maxW="sm"
            w="100%"
            borderRadius="lg"
            overflow="hidden"
            bg={cardBg}
            height={{ base: "auto"}}
            display="flex"
            flexDirection="column"
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={cardAnimation}
        >
            <Box position="relative" paddingTop="56.25%">
                <Skeleton isLoaded={imageLoaded} height="100%" width="100%" position="absolute" top="0" left="0">
                    <Image
                        src={imageError ? "/placeholder-image.png" : imgPath}
                        alt={title}
                        objectFit="cover"
                        position="absolute"
                        top="0"
                        left="0"
                        width="100%"
                        height="100%"
                        onLoad={() => setImageLoaded(true)}
                        onError={() => {
                            setImageError(true);
                            setImageLoaded(true);
                        }}
                        filter={isComingSoon ? "grayscale(100%)" : "none"}
                        opacity={isComingSoon ? 0.7 : 1}
                    />
                </Skeleton>
            </Box>
            
            <VStack p={6} flex="1" spacing={4} align="stretch">
                <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Heading 
                        size="md" 
                        color={textColor}
                        fontFamily="'Press Start 2P', cursive"
                        fontSize="sm"
                    >
                        {title}
                    </Heading>
                    {status && (
                        <Badge 
                            colorScheme={getStatusBadge(status).colorScheme} 
                            variant="solid" 
                            fontSize="xs"
                        >
                            <FormattedMessage 
                                id={getStatusBadge(status).messageId} 
                                defaultMessage={getStatusBadge(status).defaultMessage} 
                            />
                        </Badge>
                    )}
                </Box>
                <Text 
                    color={textColor}
                    fontSize="sm"
                    flex="1"
                >
                    {description}
                </Text>
                
                {!isComingSoon && (
                    <VStack spacing={3} mt="auto" width="100%">
                        {demoLink && (
                            <Tooltip 
                                label={intl.formatMessage({ 
                                    id: "projects.buttons.demo.tooltip", 
                                    defaultMessage: "View live demo of the project" 
                                })}
                                hasArrow
                            >
                                <Button
                                    as="a"
                                    href={demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    leftIcon={<Icon as={FaExternalLinkAlt} />}
                                    width="100%"
                                    {...buttonStyles.base}
                                    {...buttonStyles.primary}
                                    aria-label={intl.formatMessage({ id: "projects.buttons.demo.aria", defaultMessage: "View live demo of the project" })}
                                >
                                    <FormattedMessage id="projects.buttons.demo" defaultMessage="View Project" />
                                </Button>
                            </Tooltip>
                        )}
                        {ghLink && (
                            <Tooltip 
                                label={intl.formatMessage({ 
                                    id: "projects.buttons.source.tooltip", 
                                    defaultMessage: "View project source code on GitHub" 
                                })}
                                hasArrow
                            >
                                <Button
                                    as="a"
                                    href={ghLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    leftIcon={<Icon as={FaGithub} />}
                                    width="100%"
                                    {...buttonStyles.base}
                                    {...buttonStyles.secondary}
                                    aria-label={intl.formatMessage({ id: "projects.buttons.source.aria", defaultMessage: "View project source code on GitHub" })}
                                >
                                    <FormattedMessage id="projects.buttons.source" defaultMessage="Source" />
                                </Button>
                            </Tooltip>
                        )}
                        {(!ghLink || !demoLink || showContactButton) && (
                            <Tooltip 
                                label={intl.formatMessage({ 
                                    id: "projects.buttons.contact.tooltip", 
                                    defaultMessage: "Send an email to ask about this project" 
                                })}
                                hasArrow
                            >
                                <Button
                                    onClick={handleContactClick}
                                    leftIcon={<Icon as={FaEnvelope} />}
                                    width="100%"
                                    {...buttonStyles.base}
                                    {...(!ghLink && !demoLink ? buttonStyles.primary : buttonStyles.secondary)}
                                    _hover={{
                                        ...(!ghLink && !demoLink ? buttonStyles.primary._hover : buttonStyles.secondary._hover),
                                        transform: "translateY(-2px)",
                                        boxShadow: "lg",
                                    }}
                                    aria-label={intl.formatMessage({ id: "projects.buttons.contact.aria", defaultMessage: "Send an email to ask about this project" })}
                                >
                                    <FormattedMessage 
                                        id={!ghLink && !demoLink ? "projects.buttons.contact.early" : "projects.buttons.contact"} 
                                        defaultMessage={!ghLink && !demoLink ? "Get Early Access" : "Ask me about it"} 
                                    />
                                </Button>
                            </Tooltip>
                        )}
                    </VStack>
                )}
            </VStack>
        </MotionBox>
    );
}

export default ProjectCards;
