import React from "react";
import { SimpleGrid, Box, Icon, useColorModeValue } from "@chakra-ui/react";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiPython,
    DiGit,
    DiJava,
    DiCss3,
} from "react-icons/di";
import {
    SiC,
    SiCsharp,
    SiPytorch,
    SiTensorflow,
} from "react-icons/si";

function Techstack() {
    const bgColor = useColorModeValue("white", "gray.700");
    const iconColor = useColorModeValue("teal.600", "teal.200");

    const techs = [
        { icon: SiCsharp, label: "C#" },
        { icon: DiJava, label: "Java" },
        { icon: DiPython, label: "Python" },
        { icon: SiC, label: "C" },
        { icon: DiCss3, label: "CSS" },
        { icon: DiJavascript1, label: "JavaScript" },
        { icon: SiTensorflow, label: "TensorFlow" },
        { icon: SiPytorch, label: "PyTorch" },
        { icon: DiNodejs, label: "Node.js" },
        { icon: DiReact, label: "React" },
        { icon: DiGit, label: "Git" },
    ];

    return (
        <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 5 }} spacing={6}>
            {techs.map((tech, index) => (
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
                        as={tech.icon}
                        w={12}
                        h={12}
                        color={iconColor}
                        title={tech.label}
                    />
                </Box>
            ))}
        </SimpleGrid>
    );
}

export default Techstack;
