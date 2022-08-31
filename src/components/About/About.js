import React, {lazy, Suspense} from "react";
import {Container, Row, Col} from "react-bootstrap";

import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import OperatingSys from "./OperatingSys";
import '../styles/about.css';

const Particle = lazy(() => import("../Particle").then(({default: Particle}) => ({default: Particle})));

function About() {
    return (
        <Container fluid className="about-section">
            <Suspense fallback={<div>Loading particles...</div>}>
                <Particle/>
            </Suspense>
            <Container>
                <Row style={{justifyContent: "center", padding: "10px"}}>
                    <Col
                        md={7}
                        style={{
                            justifyContent: "center",
                            paddingTop: "30px",
                            paddingBottom: "50px",
                        }}
                    >
                        <h1 style={{fontSize: "2.1em", paddingBottom: "20px"}}>
                            about('<strong className="purple">selected</strong>')
                        </h1>
                        <Aboutcard/>
                    </Col>
                    <Col
                        md={5}
                        style={{paddingTop: "120px", paddingBottom: "50px"}}
                        className="about-img"
                    >
                        <img src={laptopImg} alt="about" className="img-fluid"/>
                    </Col>
                </Row>
                <h1 className="project-heading">
                    Professional <strong className="purple">Skillset </strong>
                </h1>

                <Techstack/>

                <h1 className="project-heading">
                    <strong className="purple">Tools</strong> I use
                </h1>
                <Toolstack/>
                <h1 className="project-heading">
                    <strong className="purple">Operating Systems</strong> I am familiar with
                </h1>
                <OperatingSys/>
                <Github/>
            </Container>
        </Container>
    );
}

export default About;
