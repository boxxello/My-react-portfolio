import React from "react";
import { Box, Text, Spinner, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";

const MotionBox = motion(Box);

function Pre({ load }) {
    return (
        <MotionBox
            id={load ? "preloader" : "preloader-none"}
            position="fixed"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bg="rgba(26, 32, 44, 0.95)"
            zIndex="9999"
            display="flex"
            alignItems="center"
            justifyContent="center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <VStack spacing={6}>
                <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.700"
                    color="teal.200"
                    size="xl"
                />
                <Text
                    fontFamily="'Press Start 2P', cursive"
                    fontSize="sm"
                    color="teal.200"
                    textShadow="0 0 8px rgba(129, 230, 217, 0.4)"
                    animation="blink 1s infinite"
                >
                    <FormattedMessage id="preloader.text" defaultMessage="LOADING..." />
                </Text>
            </VStack>
        </MotionBox>
    );
}

export default Pre;
