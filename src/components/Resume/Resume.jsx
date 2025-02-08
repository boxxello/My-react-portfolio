import React, { useState, useEffect } from "react";
import {
    Container,
    Box,
    useColorModeValue,
    Button,
    VStack,
    Text,
    Link,
    Flex,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";
import { FaDownload } from "react-icons/fa";
import Particle from "@/components/Particle.jsx";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
// Set worker
const resumePath = "/assets/Resume_Francesco_Bosso.pdf";

function Resume() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    const bgColor = useColorModeValue("gray.50", "gray.900");
    const buttonColorScheme = useColorModeValue("teal", "teal");


    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setIsLoading(false);
    }

    function onDocumentLoadError(error) {
        console.error('Error loading PDF:', error);
        setIsLoading(false);
    }

    const containerAnimation = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <Box
            as="section"
            minH="100vh"
            bg={bgColor}
            py={16}
            position="relative"
            overflow="hidden"
        >
            <Particle />
            <Container maxW="container.xl" position="relative" zIndex={1}>
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={containerAnimation}
                >
                    <VStack spacing={8} align="center">
                        <Flex
                            direction="column"
                            align="center"
                            w="100%"
                            maxW="800px"
                            p={4}
                            borderRadius="lg"
                            bg={useColorModeValue("white", "gray.800")}
                            boxShadow="xl"
                        >
                            <Button
                                as={Link}
                                href={resumePath}
                                download="Resume_Francesco_Bosso.pdf"
                                colorScheme={buttonColorScheme}
                                size="lg"
                                mb={8}
                                leftIcon={<FaDownload />}
                                _hover={{
                                    transform: "scale(1.05)",
                                    textDecoration: "none"
                                }}
                            >
                                <FormattedMessage id="resume.download" defaultMessage="Download Resume" />
                            </Button>

                            <Box
                                w="100%"
                                overflow="auto"
                                css={{
                                    "&::-webkit-scrollbar": {
                                        width: "4px",
                                    },
                                    "&::-webkit-scrollbar-track": {
                                        width: "6px",
                                    },
                                    "&::-webkit-scrollbar-thumb": {
                                        background: useColorModeValue("gray.300", "gray.600"),
                                        borderRadius: "24px",
                                    },
                                }}
                            >
                                <Document
                                    file={resumePath}
                                    onLoadSuccess={onDocumentLoadSuccess}
                                    onLoadError={onDocumentLoadError}
                                    loading={
                                        <Text textAlign="center" py={4}>
                                            <FormattedMessage id="resume.loading" defaultMessage="Loading PDF..." />
                                        </Text>
                                    }
                                    error={
                                        <Text textAlign="center" py={4} color="red.500">
                                            <FormattedMessage id="resume.error" defaultMessage="Error loading PDF. Please try downloading instead." />
                                        </Text>
                                    }
                                >
                                    <Page
                                        pageNumber={pageNumber}
                                        width={Math.min(800, window.innerWidth - 32)}
                                        renderTextLayer={true}
                                        renderAnnotationLayer={true}
                                    />
                                </Document>
                                {numPages && (
                                    <Text textAlign="center" mt={4}>
                                        <FormattedMessage
                                            id="resume.pageInfo"
                                            defaultMessage="Page {current} of {total}"
                                            values={{
                                                current: pageNumber,
                                                total: numPages
                                            }}
                                        />
                                    </Text>
                                )}
                            </Box>
                        </Flex>
                    </VStack>
                </motion.div>
            </Container>
        </Box>
    );
}

export default Resume;
