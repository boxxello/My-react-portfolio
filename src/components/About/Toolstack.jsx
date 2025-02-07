import React from "react";
import { SimpleGrid, Box, Icon, useColorModeValue } from "@chakra-ui/react";
import {
    SiLinux,
    SiVisualstudiocode,
    SiPostman,
    SiHeroku,
    SiVercel,
    SiGithub,
    SiDocker,
    SiJupyter,
    SiAnaconda,
    SiAmazonaws,
    SiApache,
    SiEclipseide,
    SiIntellijidea,
    SiWebstorm,
    SiAdobeaftereffects, 
    SiAdobelightroom, 
    SiWordpress, 
    SiAndroidstudio, 
    SiStackoverflow,
} from "react-icons/si";
import { DiPhotoshop } from "react-icons/di";

function Toolstack() {
    const bgColor = useColorModeValue("white", "gray.700");
    const iconColor = useColorModeValue("teal.600", "teal.200");

    const tools = [
        { icon: SiVisualstudiocode, label: "VS Code" },
        { icon: SiJupyter, label: "Jupyter" },
        { icon: SiAnaconda, label: "Anaconda" },
        { icon: SiAmazonaws, label: "AWS" },
        { icon: SiApache, label: "Apache" },
        { icon: SiDocker, label: "Docker" },
        { icon: SiEclipseide, label: "Eclipse" },
        { icon: SiIntellijidea, label: "IntelliJ" },
        { icon: SiWebstorm, label: "WebStorm" },
        { icon: SiHeroku, label: "Heroku" },
        { icon: SiAndroidstudio, label: "Android Studio" },
        { icon: DiPhotoshop, label: "Photoshop" },
        { icon: SiAdobeaftereffects, label: "After Effects" },
        { icon: SiAdobelightroom, label: "Lightroom" },
        { icon: SiWordpress, label: "WordPress" },
        { icon: SiStackoverflow, label: "Stack Overflow" },
    ];

    return (
        <SimpleGrid
            columns={{ base: 2, sm: 3, md: 4 }}
            spacing={6}
            justifyItems="center"
        >
            {tools.map((tool, index) => (
                <Box
                    key={index}
                    p={4}
                    textAlign="center"
                    borderRadius="lg"
                    bg={bgColor}
                    boxShadow="md"
                    transition="transform 0.3s"
                    _hover={{ transform: "scale(1.05)" }}
                >
                    <Icon
                        as={tool.icon}
                        w={12}
                        h={12}
                        color={iconColor}
                        title={tool.label}
                    />
                </Box>
            ))}
        </SimpleGrid>
    );
}

export default Toolstack;
