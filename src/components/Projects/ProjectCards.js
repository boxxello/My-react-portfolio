import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {BiLinkExternal} from "react-icons/bi";
import '../styles/projects.css';


function ProjectCards(props) {
    return (

        <Card className="project-card-view ">
            <div className="ratio ratio-1x1">
                <Card.Img variant="top" src={props.imgPath} alt="card-img" className="cardImage"/>
            </div>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>

                <Card.Text>
                    {props.description}
                </Card.Text>

                {props.showBtn ?
                    <Button variant="primary" href={props.link} target="_blank "
                            className="btn btn-success btn-lg ml-auto">
                        <BiLinkExternal/> &nbsp;
                        {props.btn_text}

                    </Button> : null}

            </Card.Body>

        </Card>

    );
}

export default ProjectCards;
