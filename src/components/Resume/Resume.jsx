import React, {useState, useEffect, lazy, Suspense} from "react";
import {Container, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {AiOutlineDownload} from "react-icons/ai";
import {Document, Page} from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import '../styles/resume.css';

// Simple Particle import
const Particle = lazy(() => import("../Particle"));

function Resume() {
    const [width, setWidth] = useState(window.innerWidth);
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function onDocumentLoadSuccess({numPages}) {
        setNumPages(numPages);
        setLoading(false);
    }

    function onDocumentLoadError(error) {
        console.error('Error loading PDF:', error);
        setError(error);
        setLoading(false);
    }

    const renderPDFContent = () => {
        if (loading) {
            return <div className="loading-message">Loading PDF...</div>;
        }
        if (error) {
            return <div className="error-message">Error loading PDF. Please try again later.</div>;
        }
        return (
            <Page
                pageNumber={pageNumber}
                scale={width > 786 ? 1.7 : 0.6}
                renderTextLayer={true}
                renderAnnotationLayer={true}
                loading={<div>Loading page...</div>}
            />
        );
    };

    return (
        <div>
            <Container fluid className="resume-section">
                <Suspense fallback={<div>Loading particles...</div>}>
                    <Particle/>
                </Suspense>

                <Row className="resume">
                    <Document
                        file="/Resume_Francesco_Bosso.pdf"
                        onLoadSuccess={onDocumentLoadSuccess}
                        onLoadError={onDocumentLoadError}
                        loading={<div>Loading PDF...</div>}
                        error={<div>Error loading PDF!</div>}
                        className="d-flex justify-content-center"
                    >
                        {renderPDFContent()}
                    </Document>
                </Row>

                <Row style={{justifyContent: "center", position: "relative"}}>
                    <Button
                        variant="primary"
                        href="/Resume_Francesco_Bosso.pdf"
                        target="_blank"
                        style={{maxWidth: "250px"}}
                    >
                        <AiOutlineDownload/>
                        &nbsp;Download CV
                    </Button>
                </Row>
            </Container>
        </div>
    );
}

export default Resume;
