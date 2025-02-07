import React from "react";
import { SimpleGrid, Box, Icon, useColorModeValue } from "@chakra-ui/react";
import { SiLinux, SiWindows, SiMacos, SiDebian, SiUbuntu, SiArchlinux, SiFreebsd, SiFedora } from "react-icons/si";

function OperatingSys() {
    const bgColor = useColorModeValue("white", "gray.700");
    const iconColor = useColorModeValue("teal.600", "teal.200");

    const operatingSystems = [
        { icon: SiWindows, label: "Windows" },
        { icon: SiLinux, label: "Linux" },
        { icon: SiMacos, label: "macOS" },
        { icon: SiDebian, label: "Debian" },
        { icon: SiUbuntu, label: "Ubuntu" },
        { icon: SiArchlinux, label: "Arch Linux" },
        { icon: SiFreebsd, label: "FreeBSD" },
        { icon: SiFedora, label: "Fedora" }
    ];

    return (
        <SimpleGrid
            columns={{ base: 1, sm: 3 }}
            spacing={6}
            justifyItems="center"
        >
            {operatingSystems.map((os, index) => (
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
                        as={os.icon}
                        w={12}
                        h={12}
                        color={iconColor}
                        title={os.label}
                    />
                </Box>
            ))}
        </SimpleGrid>
    );
}

export default OperatingSys;
