import React from "react";
import {Col, Row} from "react-bootstrap";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiPython,
    DiGit, DiJava, DiCss3,
} from "react-icons/di";
import {SiC, SiCsharp, SiPytorch, SiTensorflow} from "react-icons/si";

function Techstack() {
    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
            <Col xs={4} md={2} className="tech-icons">
                <SiCsharp/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJava/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiPython/>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiC/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiCss3/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiTensorflow/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPytorch/>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <DiNodejs/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiReact/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiGit/>
            </Col>

        </Row>
    );
}

export default Techstack;
