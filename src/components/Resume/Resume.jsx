import React, { useState, useEffect, Suspense } from "react";
import {
    Container,
    Box,
    useColorModeValue,
    Button,
    VStack,
    Text,
    Link,
    Flex,
    Center,
    Spinner,
    Stack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";
import { AiOutlineDownload } from "react-icons/ai";
import Particle from "@/components/Particle.jsx";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { Document, Page, pdfjs } from "react-pdf";
import { Global } from '@emotion/react';


// Imposta il worker di PDF.js (il file deve essere presente in /public)
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";

const resumeLink = "https://raw.githubusercontent.com/boxxello/My-react-portfolio/master/public/Resume_Francesco_Bosso.pdf";

function Resume() {
    // Group all useState hooks at the top
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [scale, setScale] = useState(1.0);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // Theme colors
    const bgColor = useColorModeValue("gray.50", "gray.900");
    const textColor = useColorModeValue("gray.600", "gray.400");

    // Document handlers
    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
        setIsLoading(false);
        setError(null);
    };

    const onDocumentLoadError = (error) => {
        console.error("Error loading PDF:", error);
        setError("Failed to load PDF. Please try again later.");
        setIsLoading(false);
    };

    // Window resize effect
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            // Linear interpolation function
            const lerp = (min, max, t) => min + (max - min) * t;
            
            // Define scale boundaries
            const minScale = 0.6;  // Scale at smallest width
            const maxScale = 1.4;  // Scale at largest width
            const minWidth = 480;  // Smallest supported width
            const maxWidth = 1440; // Largest width before scale caps
            
            // Calculate normalized position between min and max width
            const t = Math.max(0, Math.min(1, (width - minWidth) / (maxWidth - minWidth)));
            
            // Calculate scale using linear interpolation
            const newScale = lerp(minScale, maxScale, t);
            
            // Set the scale, clamped between min and max values
            setScale(Math.max(minScale, Math.min(maxScale, newScale)));
        };

        handleResize(); // Set initial scale
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Animation variants
    const containerVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const arcadeVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { delay: 0.3, duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <Box
            as="section"
            minH="100vh"
            pt={{ base: "16", md: "24" }}
            pb={20}
            bg={bgColor}
        >
            <Global
                styles={`
                    .pdf-page {
                        display: flex !important;
                        justify-content: center !important;
                    }
                    .pdf-page canvas {
                        max-width: 100% !important;
                        height: auto !important;
                    }
                `}
            />

            <Container maxW="container.xl" px={{ base: 4, md: 8 }}>
                <Stack spacing={8} align="center">
                    <motion.div
                        variants={containerVariant}
                        initial="hidden"
                        animate="visible"
                        style={{ width: "100%" }}
                    >
                        <Box
                            bg={useColorModeValue("white", "gray.800")}
                            p={{ base: 4, md: 8 }}
                            rounded="xl"
                            shadow="2xl"
                            w="100%"
                            maxW={{ base: "100%", md: "100%" }}
                            mx="auto"
                            position="relative"
                            _hover={{
                                transform: "translateY(-2px)",
                                boxShadow: useColorModeValue(
                                    "0 4px 20px rgba(79, 209, 197, 0.2)",
                                    "0 4px 20px rgba(129, 230, 217, 0.2)"
                                ),
                            }}
                            transition="all 0.3s ease"
                        >
                            {isLoading && (
                                <Box
                                    position="absolute"
                                    inset={0}
                                    bg={useColorModeValue("white", "gray.800")}
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    zIndex={1}
                                    rounded="xl"
                                >
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    >
                                        <Spinner size="xl" color="teal.400" thickness="4px" />
                                    </motion.div>
                                </Box>
                            )}

                            <Document
                                file={resumeLink}
                                onLoadSuccess={onDocumentLoadSuccess}
                                onLoadError={onDocumentLoadError}
                                loading={null}
                            >
                                <Box
                                    overflow="auto"
                                    maxW="100%"
                                    mx="auto"
                                    minH="80vh"
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    sx={{
                                        '&::-webkit-scrollbar': {
                                            width: '8px',
                                            height: '8px',
                                        },
                                        '&::-webkit-scrollbar-thumb': {
                                            backgroundColor: 'rgba(79, 209, 197, 0.3)',
                                            borderRadius: '4px',
                                        },
                                    }}
                                >
                                    <Center w="100%" h="100%">
                                        <Box
                                            position="relative"
                                            w="fit-content"
                                            mx="auto"
                                            bg={useColorModeValue("white", "gray.800")}
                                            p={4}
                                            borderRadius="xl"
                                            boxShadow="xl"
                                        >
                                            <Page
                                                pageNumber={pageNumber}
                                                scale={scale}
                                                renderTextLayer={true}
                                                renderAnnotationLayer={true}
                                                className="pdf-page"
                                            />
                                        </Box>
                                    </Center>
                                </Box>
                            </Document>

                            {!isLoading && !error && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <Text
                                        mt={4}
                                        color={textColor}
                                        textAlign="center"
                                        fontFamily="'Press Start 2P', cursive"
                                        fontSize="sm"
                                    >
                                        Page {pageNumber} of {numPages}
                                    </Text>
                                </motion.div>
                            )}
                        </Box>
                    </motion.div>

                    <motion.div
                        variants={arcadeVariant}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button
                            leftIcon={<AiOutlineDownload />}
                            colorScheme="teal"
                            size="lg"
                            as="a"
                            href={resumeLink}
                            target="_blank"
                            download
                            _hover={{
                                transform: "translateY(-2px)",
                                boxShadow: "0 0 15px rgba(79, 209, 197, 0.6)",
                            }}
                            _active={{
                                transform: "translateY(1px)",
                            }}
                            transition="all 0.2s"
                            fontFamily="'Press Start 2P', cursive"
                        >
                            Download CV
                        </Button>
                    </motion.div>
                </Stack>
            </Container>
        </Box>
    );
}

export default Resume;
