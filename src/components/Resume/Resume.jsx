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

// Imposta il worker di PDF.js (il file deve essere presente in /public)
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";

// Percorso del PDF (assicurati che il file esista in /public/assets)
const resumeLink =
    "https://raw.githubusercontent.com/boxxello/My-react-portfolio/master/public/Resume_Francesco_Bosso.pdf";

function Resume() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [scale, setScale] = useState(1.7);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // Adatta lo scale in base alla larghezza della finestra
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setScale(width > 786 ? 1.7 : 0.6);
        };

        handleResize(); // Imposta lo scale iniziale
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

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

    // Varianti per animazioni arcade con Framer Motion
    const arcadeVariant = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <Box minH="100vh" bg={useColorModeValue("gray.900", "black")}>
            <Container maxW="container.xl" py={10}>
                {/* Il Particle component può avere effetti in stile arcade */}
                <Suspense fallback={<Center h="100vh"><Spinner size="xl" /></Center>}>
                    <Particle />
                </Suspense>

                <Stack spacing={8} align="center">
                    <motion.div
                        variants={arcadeVariant}
                        initial="hidden"
                        animate="visible"
                    >
                        <Box
                            w="full"
                            bg={useColorModeValue("gray.50", "gray.800")}
                            rounded="lg"
                            p={6}
                            textAlign="center"
                            pos="relative"
                            border="4px solid #39ff14" // bordo neon verde
                            boxShadow="0 0 20px #39ff14"  // effetto glow neon
                            fontFamily="'Press Start 2P', cursive" // font in stile arcade
                        >
                            {isLoading && (
                                <Center py={10}>
                                    <Spinner size="xl" color="#39ff14" />
                                </Center>
                            )}

                            {error && (
                                <Center py={10}>
                                    <Text color="red.500">{error}</Text>
                                </Center>
                            )}

                            <Document
                                file={resumeLink}
                                onLoadSuccess={onDocumentLoadSuccess}
                                onLoadError={onDocumentLoadError}
                                loading={
                                    <Center py={10}>
                                        <Spinner size="xl" color="#39ff14" />
                                    </Center>
                                }
                            >
                                <Page
                                    pageNumber={pageNumber}
                                    scale={scale}
                                    renderTextLayer={true}
                                    renderAnnotationLayer={true}
                                />
                            </Document>

                            {!isLoading && !error && (
                                <Text mt={4} color={useColorModeValue("gray.600", "gray.400")}>
                                    Page {pageNumber} of {numPages}
                                </Text>
                            )}
                        </Box>
                    </motion.div>

                    <motion.div
                        variants={arcadeVariant}
                        initial="hidden"
                        animate="visible"
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
                                boxShadow: "0 0 10px #39ff14",
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
