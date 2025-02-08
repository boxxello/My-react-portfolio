import React from "react";
import { SimpleGrid, Box, Text, useColorModeValue, Heading, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
    SiVisualstudiocode,
    SiPostman,
    SiSlack,
    SiCisco,
    SiGithub,
    SiDocker,
    SiJetbrains,
    SiTrello,
    SiJira,
    SiMicrosoftteams,
    SiGitlab,
    SiBitbucket,
    SiAzuredevops,
} from "react-icons/si";
import { FormattedMessage } from "react-intl";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

function Toolstack() {
    const bgColor = useColorModeValue("gray.50", "gray.700");
    const hoverColor = useColorModeValue("teal.500", "teal.200");
    const textColor = useColorModeValue("gray.700", "gray.200");

    const toolCategories = {
        development: [
            { icon: SiVisualstudiocode, name: "VS Code" },
            { icon: SiJetbrains, name: "JetBrains" },
            { icon: SiPostman, name: "Postman" },
            { icon: SiDocker, name: "Docker" },
        ],
        versionControl: [
            { icon: SiGithub, name: "GitHub" },
            { icon: SiGitlab, name: "GitLab" },
            { icon: SiBitbucket, name: "Bitbucket" },
            { icon: SiAzuredevops, name: "Azure DevOps" },
        ],
        communication: [
            { icon: SiCisco, name: "Cisco" },
            { icon: SiMicrosoftteams, name: "Teams" },
            { icon: SiSlack, name: "Slack" },
        ],
        projectManagement: [
            { icon: SiTrello, name: "Trello" },
            { icon: SiJira, name: "Jira" },
        ],
    };

    const containerAnimation = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemAnimation = {
        hidden: { opacity: 0, scale: 0.8 },
        show: { 
            opacity: 1, 
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 10
            }
        }
    };

    const CategorySection = ({ title, tools }) => (
        <VStack align="stretch" spacing={4}>
            <MotionHeading
                size="md"
                color={textColor}
                fontFamily="'Press Start 2P', cursive"
                fontSize="sm"
                mb={2}
            >
                <FormattedMessage id={`about.tools.${title}`} />
            </MotionHeading>
            <SimpleGrid columns={{ base: 2, sm: 3, md: 4 }} spacing={4}>
                {tools.map((tool, index) => (
                    <MotionBox
                        key={index}
                        variants={itemAnimation}
                        bg={bgColor}
                        p={4}
                        borderRadius="lg"
                        textAlign="center"
                        whileHover={{ 
                            scale: 1.05,
                            transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            backdropFilter: "blur(10px)",
                        }}
                    >
                        <Box
                            as={tool.icon}
                            w={10}
                            h={10}
                            mx="auto"
                            color={hoverColor}
                        />
                        <Text
                            mt={2}
                            fontSize="sm"
                            color={textColor}
                            fontFamily="'Press Start 2P', cursive"
                        >
                            {tool.name}
                        </Text>
                    </MotionBox>
                ))}
            </SimpleGrid>
        </VStack>
    );

    return (
        <MotionBox
            variants={containerAnimation}
            initial="hidden"
            animate="show"
            py={8}
        >
            <VStack spacing={8} align="stretch">
                <CategorySection title="development" tools={toolCategories.development} />
                <CategorySection title="versionControl" tools={toolCategories.versionControl} />
                <CategorySection title="communication" tools={toolCategories.communication} />
                <CategorySection title="projectManagement" tools={toolCategories.projectManagement} />
            </VStack>
        </MotionBox>
    );
}

export default Toolstack;
