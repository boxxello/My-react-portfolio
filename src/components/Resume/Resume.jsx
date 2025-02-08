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
import Particle from "@/components/Particle.jsx";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink = "https://raw.githubusercontent.com/boxxello/My-react-portfolio/master/public/Resume_Francesco_Bosso.pdf";
const resumePath = "/assets/Resume_Francesco_Bosso.pdf";

function Resume() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [scale, setScale] = useState(1.7);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setScale(width > 786 ? 1.7 : 0.6);
        };

        handleResize(); // Set initial scale
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
        setIsLoading(false);
        setError(null);
    };

    const onDocumentLoadError = (error) => {
        console.error('Error loading PDF:', error);
        setError('Failed to load PDF. Please try again later.');
        setIsLoading(false);
    };

    return (
        <Box minH="100vh" bg={useColorModeValue('gray.50', 'gray.900')}>
            <Container maxW="container.xl" py={10}>
                <Suspense fallback={<Center h="100vh"><Spinner size="xl" /></Center>}>
                    <Particle />
                </Suspense>

                <Stack spacing={8} align="center">
                    <Box
                        w="full"
                        bg={useColorModeValue('white', 'gray.800')}
                        rounded="lg"
                        p={6}
                        textAlign="center"
                        pos="relative"
                    >
                        {isLoading && (
                            <Center py={10}>
                                <Spinner size="xl" />
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
                                    <Spinner size="xl" />
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
                            <Text mt={4} color={useColorModeValue('gray.600', 'gray.400')}>
                                Page {pageNumber} of {numPages}
                            </Text>
                        )}
                    </Box>

                    <Button
                        leftIcon={<AiOutlineDownload />}
                        colorScheme="teal"
                        size="lg"
                        as="a"
                        href={resumePath}
                        target="_blank"
                        download
                        _hover={{
                            transform: 'translateY(-2px)',
                            boxShadow: 'lg',
                        }}
                        transition="all 0.2s"
                    >
                        Download CV
                    </Button>
                </Stack>
            </Container>
        </Box>
    );
}

export default Resume;
