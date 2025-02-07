import React, { useState, useEffect, lazy, Suspense } from "react";
import {
    Container,
    Stack,
    Button,
    Box,
    useColorModeValue,
    Text,
    Center,
    Spinner,
} from "@chakra-ui/react";
import { AiOutlineDownload } from "react-icons/ai";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import { Document, Page, pdfjs } from "react-pdf";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const resumePath = "/assets/Resume_Francesco_Bosso.pdf";

function Resume() {
    const [width, setWidth] = useState(window.innerWidth);
    const [numPages, setNumPages] = useState(null);
    const [pageNumber] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const bgColor = useColorModeValue("gray.50", "gray.900");
    const pdfBgColor = useColorModeValue("white", "gray.800");

    useEffect(() => {
        const setDimension = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener("resize", setDimension);
        return () => window.removeEventListener("resize", setDimension);
    }, []);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setIsLoading(false);
        setError(null);
        console.log("PDF loaded successfully!");
    }

    function onDocumentLoadError(error) {
        setError(error.message);
        setIsLoading(false);
        console.error("Error loading PDF:", error.message);
    }

    function renderPDFContent() {
        const scale = width > 786 ? 1.7 : 0.6;
        return <Page pageNumber={pageNumber} scale={scale} />;
    }

    return (
        <Box minH="100vh" bg={bgColor} pt={20} pb={10}>
            <Container maxW="container.xl">
                <Suspense
                    fallback={
                        <Center h="100vh">
                            <Spinner size="xl" color="teal.500" />
                        </Center>
                    }
                >
                    <Particle />
                </Suspense>

                <Stack spacing={8} align="center">
                    <Button
                        as="a"
                        href="/Resume_Francesco_Bosso.pdf"
                        target="_blank"
                        colorScheme="teal"
                        size="lg"
                        leftIcon={<AiOutlineDownload />}
                        _hover={{
                            transform: "translateY(-2px)",
                            boxShadow: "lg",
                        }}
                        transition="all 0.3s"
                    >
                        Download CV
                    </Button>

                    <Box
                        w="100%"
                        display="flex"
                        justifyContent="center"
                        overflow="auto"
                        bg={pdfBgColor}
                        p={4}
                        borderRadius="lg"
                        boxShadow="md"
                        position="relative"
                    >
                        {isLoading && (
                            <Center position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
                                <Spinner size="xl" color="teal.500" />
                            </Center>
                        )}
                        {error && (
                            <Center position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
                                <Text color="red.500">Error loading PDF: {error}</Text>
                            </Center>
                        )}
                        <Document
                            file={resumePath}
                            onLoadSuccess={onDocumentLoadSuccess}
                            onLoadError={onDocumentLoadError}
                            loading={null}
                        >
                            {renderPDFContent()}
                        </Document>
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
}

export default Resume;
