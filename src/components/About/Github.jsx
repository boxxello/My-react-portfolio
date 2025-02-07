import React from "react";
import { Box, VStack, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";

const MotionBox = motion(Box);

function Github() {
    const bgColor = useColorModeValue("gray.50", "gray.700");
    const borderColor = useColorModeValue("teal.500", "teal.200");
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

    return (
        <VStack spacing={6}>
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
                _hover={{
                    transform: "translateY(-5px)"
                }}
            >
                <Box
                    as="iframe"
                    src="https://github-readme-stats.vercel.app/api/top-langs?username=boxxello&show_icons=true&locale=en&layout=compact&theme=react&hide_border=true&bg_color=0D1117"
                    w="100%"
                    h="200px"
                    border="none"
                    overflow="hidden"
                    loading="lazy"
                />
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
                maxW="800px"
                mx="auto"
                transition="transform 0.3s ease"
                _hover={{
                    transform: "translateY(-5px)"
                }}
                overflowX="auto"
            >
                <GitHubCalendar
                    username="boxxello"
                    blockSize={12}
                    blockMargin={5}
                    theme={calendarTheme}
                    fontSize={16}
                    style={{ width: '100%' }}
                />
            </MotionBox>
        </VStack>
    );
}

export default Github;
