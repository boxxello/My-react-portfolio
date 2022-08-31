import React, {lazy, Suspense} from "react";
import {Container, Row, Col} from "react-bootstrap";
import ProjectCard from "./ProjectCards";


import captcha_eval
    from "../../Assets/Projects/captcha-eval-min_1.webp";
import anticheat
    from "../../Assets/Projects/anticheat-test-min_1.webp";
import warehouse_project
    from "../../Assets/Projects/logo-warehouse-min_1.webp";

import treedots from "../../Assets/Projects/tree-dots-min_1.webp";

const Particle = lazy(() => import("../Particle").then(({default: Particle}) => ({default: Particle})));


function Projects() {
    return (
        <Container fluid className="project-section">
            <Suspense fallback={<div>Loading particles...</div>}>
                <Particle/>
            </Suspense>
            <Container>
                <h1 className="project-heading">
                    work('<strong className="purple">selected</strong>')
                </h1>
                <p style={{color: "white"}}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row style={{justifyContent: "center", paddingBottom: "10px"}}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={warehouse_project}

                            showBtn={true}
                            title="Amazon WareHouseDeals Italia"
                            description="A scraper which allows us to check for discounts or price errors on Amazon WareHouse IT
                             in the shortest possible time to allow Telegram channel users to buy the posted products."
                            btn_text="Join the TG channel"
                            link="https://t.me/WarehouseDealsItalia"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={captcha_eval}
                            showBtn={false}
                            title="Captcha solver"
                            description="Deep learning image classification tool trained with around 5 thousand images.
                             The model was trained using Tensorflow 2 framework and has +95% accuracy "

                            link="#"
                        />
                    </Col>

                    <Col md={4} className="project-card">

                        <ProjectCard
                            imgPath={anticheat}

                            showBtn={true}
                            title="Client AntiCheat"
                            description="A FiveM Anticheat client which performed a scan through regedit key files memory strings, prefetch file analysis,
                             Fivem client process memory dumps but also allowed to have a quick look into pc specs, folders and so on."
                            btn_text="View on Github"
                            link="https://github.com/boxxello/Fivem"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={treedots}
                            showBtn={false}
                            title="More are coming"
                            description="Stay tuned!"

                            link="#"
                        />
                    </Col>


                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
