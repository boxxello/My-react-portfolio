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
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

const Particle = lazy(() => import("../Particle"));

function Resume() {
    const [width, setWidth] = useState(window.innerWidth);
    const [numPages, setNumPages] = useState(null);
    const [pageNumber] = useState(1);

    const bgColor = useColorModeValue("gray.50", "gray.900");
    const pdfBgColor = useColorModeValue("white", "gray.800");

    useEffect(() => {
        const setDimension = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener("resize", setDimension);

        return () => {
            window.removeEventListener("resize", setDimension);
        };
    }, []);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        console.log("Loaded successfully!");
    }

    function onDocumentLoadError(error) {
        console.error("Error while loading document! " + error.message);
    }

    function renderPDFContent() {
        const scale = width > 786 ? 1.7 : 0.6;
        return <Page pageNumber={pageNumber} scale={scale} />;
    }

    return (
        <Box
            minH="100vh"
            bg={bgColor}
            pt={20}
            pb={10}
        >
            <Container maxW="container.xl">
                <Suspense fallback={
                    <Center h="100vh">
                        <Spinner size="xl" color="teal.500" />
                    </Center>
                }>
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
                        sx={{
                            ".react-pdf__Document": {
                                display: "flex",
                                justifyContent: "center",
                                width: "100%",
                            },
                            ".react-pdf__Page": {
                                boxShadow: "base",
                                borderRadius: "md",
                            },
                            ".react-pdf__Page__canvas": {
                                borderRadius: "md",
                            },
                        }}
                    >
                        <Document
                            file="/Resume_Francesco_Bosso.pdf"
                            onLoadSuccess={onDocumentLoadSuccess}
                            onLoadError={onDocumentLoadError}
                            loading={
                                <Center p={8}>
                                    <Spinner size="xl" color="teal.500" />
                                    <Text ml={4}>Loading PDF...</Text>
                                </Center>
                            }
                            error={
                                <Center p={8}>
                                    <Text color="red.500">Error loading PDF!</Text>
                                </Center>
                            }
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
