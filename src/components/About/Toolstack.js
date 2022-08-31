import React from "react";
import {Col, Row} from "react-bootstrap";
import {
    SiVisualstudiocode,
    SiJupyter,
    SiHeroku,
    SiAnaconda,
    SiAmazonaws,
    SiApache,
    SiDocker,
    SiEclipseide,
    SiIntellijidea,
    SiWebstorm,
    SiAdobeaftereffects, SiAdobelightroom, SiWordpress, SiAndroidstudio, SiStackoverflow,
} from "react-icons/si";

import {DiPhotoshop} from "react-icons/di";

function Toolstack() {
    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
            <Col xs={4} md={2} className="tech-icons">
                <SiVisualstudiocode/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiJupyter/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiAnaconda/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiAmazonaws/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiApache/>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiDocker/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiEclipseide/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiIntellijidea/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiWebstorm/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiHeroku/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiAndroidstudio/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiPhotoshop/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiAdobeaftereffects/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiAdobelightroom/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiWordpress/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiStackoverflow/>
            </Col>


        </Row>
    );
}

export default Toolstack;
