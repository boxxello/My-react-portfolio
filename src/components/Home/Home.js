import React, {lazy, Suspense} from "react";
import {Container, Row, Col} from "react-bootstrap";
import homeLogo from "../../Assets/home-main2.svg";


import Home2 from "./Home2";
import Type from "./Type";
import '../styles/home.css';


const Particle = lazy(() => import("../Particle").then(({default: Particle}) => ({default: Particle})));


function Home() {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Suspense fallback={<div>Loading particles...</div>}>
                    <Particle/>
                </Suspense>
                <Container className="home-content">
                    <Row>
                        <Col md={7} className="home-header">
                            <h1 className="heading">
                                boxxo.<strong className="main-name">is()</strong>
                            </h1>

                            <h1 className="heading-name">

                                <strong className="main-name"> Francesco Bosso</strong>
                            </h1>

                            <div style={{padding: 50, textAlign: "left"}}>
                                <Type/>
                            </div>
                        </Col>

                        <Col md={5} style={{paddingBottom: 20}}>
                            <img src={homeLogo} alt="home pic" className="img-fluid2"/>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Home2/>
        </section>
    );
}

export default Home;
