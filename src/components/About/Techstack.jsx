import React from "react";
import { SimpleGrid, Box, Text, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
    DiJavascript1,
    DiReact,
    DiPython,
    DiDjango,
    DiMongodb,
    DiDocker,
    DiMysql,
    DiPostgresql,
} from "react-icons/di";
import {
    SiCsharp,
    SiDotnet,
    SiVite,
    SiMicrosoftsqlserver,
    SiTypescript,
    SiRedux,
    SiExpress,
} from "react-icons/si";
//import all
import { FormattedMessage } from "react-intl";

const MotionBox = motion(Box);

function Techstack() {
    const bgColor = useColorModeValue("gray.50", "gray.700");
    const hoverColor = useColorModeValue("teal.500", "teal.200");
    const textColor = useColorModeValue("gray.700", "gray.200");

    const technologies = [
        // Frontend
        { icon: DiReact, name: "React" },
        { icon: SiVite, name: "Vite" },
        { icon: DiJavascript1, name: "JavaScript" },
        { icon: SiTypescript, name: "TypeScript" },
        { icon: SiRedux, name: "Redux" },
        
        // Backend
        { icon: DiPython, name: "Python" },
        { icon: DiDjango, name: "Django" },
        { icon: SiCsharp, name: "C#" },

        { icon: SiDotnet, name: ".NET Core" },
        { icon: SiExpress, name: "Express" },
        
        // Databases
        { icon: DiMongodb, name: "MongoDB" },
        { icon: DiPostgresql, name: "PostgreSQL" },
        { icon: DiMysql, name: "MySQL" },
        { icon: SiMicrosoftsqlserver, name: "SQL Server" },
        
        // DevOps
        { icon: DiDocker, name: "Docker" }
    ];

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

    return (
        <motion.div
            variants={containerAnimation}
            initial="hidden"
            animate="show"
        >
            <SimpleGrid
                columns={{ base: 2, sm: 3, md: 4 }}
                spacing={6}
                mt={4}
            >
                {technologies.map((tech, index) => (
                    <MotionBox
                        key={index}
                        variants={itemAnimation}
                        bg={bgColor}
                        p={4}
                        rounded="lg"
                        textAlign="center"
                        border="2px"
                        borderColor="transparent"
                        transition="all 0.3s ease"
                        _hover={{
                            transform: "translateY(-5px)",
                            borderColor: hoverColor,
                            "& svg": {
                                color: hoverColor
                            },
                            "& p": {
                                color: hoverColor
                            }
                        }}
                    >
                        <Box
                            as={tech.icon}
                            w={12}
                            h={12}
                            mx="auto"
                            color={textColor}
                            transition="color 0.3s ease"
                        />
                        <Text
                            mt={2}
                            fontSize="xs"
                            fontFamily="'Press Start 2P', cursive"
                            color={textColor}
                            transition="color 0.3s ease"
                        >
                            {tech.name}
                        </Text>
                    </MotionBox>
                ))}
            </SimpleGrid>
        </motion.div>
    );
}

export default Techstack;
