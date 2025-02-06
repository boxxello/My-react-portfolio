import React from "react";
import {Container, Row, Col, Button} from "react-bootstrap";

function Footer({ changeLanguage, currentLocale }) {
    return (
        <Container fluid className="footer">
            <Row>
                <Col md="4" className="footer-copywright"/>
                <Col md="4" className="footer-copywright">
                    <h3>Designed and Developed by Francesco Bosso</h3>
                </Col>
                <Col md="4" className="footer-copywright">
                    <Button onClick={() => changeLanguage(currentLocale === 'en' ? 'it' : 'en')}>
                        {currentLocale === 'en' ? 'Italiano' : 'English'}
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;
