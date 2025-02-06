import React from "react";
import Card from "react-bootstrap/Card";
import {ImPointRight} from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p className={"about-paragraph"}>
                        Hi everyone, I am <span className="purple">Francesco Bosso </span>
                        from <a href={"https://goo.gl/maps/pjcVMRXYCcQoqhSd9"} target="_blank" rel={"noreferrer"}
                                className={"a-about"}>Portici, Italia.</a>
                        <br/>I'm currently studying for IT at <a href={"https://www.unisa.it/"}
                                                                 target="_blank"
                                                                 rel={"noreferrer"} className={"a-about"}> Fisciano
                        Univerisity</a>
                        <br/>
                        <br/>
                        Apart from coding, here are some activities that I like doing:
                    </p>
                    <ul>

                        <li className="about-activity">
                            <ImPointRight/> Travelling
                        </li>
                        <li className="about-activity">
                            <ImPointRight/> Drawing
                        </li>
                        <li className="about-activity">
                            <ImPointRight/> Illustrating album arts
                        </li>
                        <li className="about-activity">
                            <ImPointRight/> Thinking about new startups
                        </li>

                    </ul>

                    <p style={{marginBlockEnd: 0, color: "rgb(155 126 172)"}}>
                        "Do what you love love what you do"{" "}
                    </p>

                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
