import React, {useState, useEffect, lazy, Suspense} from "react";
import {Container, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/Resume_Francesco_Bosso.pdf";
import {AiOutlineDownload} from "react-icons/ai";
import {Document, Page, pdfjs} from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import '../styles/resume.css';


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const Particle = lazy(() => import("../Particle").then(({default: Particle}) => ({default: Particle})));
const resumeLink =
    "https://raw.githubusercontent.com/boxxello/My-react-portfolio/master/public/Resume_Francesco_Bosso.pdf";

function Resume() {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    return (
        <div>
            <Container fluid className="resume-section">
                <Suspense fallback={<div>Loading particles...</div>}>
                    <Particle/>
                </Suspense>


                <Row className="resume">
                    <Document file={resumeLink} className="d-flex justify-content-center">
                        <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6}/>

                    </Document>
                </Row>
                <Row className="resume">
                    <Document file={resumeLink} className="d-flex justify-content-center">
                        <Page pageNumber={2} scale={width > 786 ? 1.7 : 0.6}/>
                    </Document>
                </Row>


                <Row style={{justifyContent: "center", position: "relative"}}>
                    <Button
                        variant="primary"
                        href={pdf}
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

