import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Box, Center, useColorModeValue } from "@chakra-ui/react";

function Github() {
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

    return (
        <Center py={8}>
            <Box
                maxW="100%"
                overflowX="auto"
                bg={useColorModeValue('white', 'gray.800')}
                p={4}
                borderRadius="lg"
                boxShadow="sm"
            >
                <GitHubCalendar
                    username="boxxello"
                    blockSize={15}
                    blockMargin={5}
                    theme={calendarTheme}
                    fontSize={16}
                />
            </Box>
        </Center>
    );
}

export default Github;
