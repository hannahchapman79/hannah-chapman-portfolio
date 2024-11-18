import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsPlayCircle } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function ProjectCard(props) {

    const renderTooltip = () => (
        <Tooltip id="button-tooltip">
            Backend Repo
        </Tooltip>
    );

    return (
        <Card className="project-card">
            <Card.Body>
                <Card.Img src={props.imgPath} alt="Project displayed on simulator"></Card.Img>
                <Card.Title className="card-title">{props.title}</Card.Title>
                <Card.Text className="card-description"
                style={{ textAlign: "justify" }}>
                    {props.description}
                </Card.Text>
                
                <Button className="outline-button" variant="primary" href={props.ghLink} target="_blank">
                    <BsGithub/> GitHub&nbsp;
                </Button>

                {props.ghSecondaryLink && (
                    <OverlayTrigger
                        placement="bottom" 
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip()}
                    >
                        <Button className="outline-button"  variant="primary" href={props.ghSecondaryLink} target="_blank" style={{ marginLeft: "10px" }}>
                            <BsGithub /> Backend&nbsp;
                        </Button>
                    </OverlayTrigger>
                )}

                <Button className="outline-button"
                    variant="primary"
                    href={props.demoLink}
                    target="_blank"
                    style={{ marginLeft: "10px" }}
                >
                    <BsPlayCircle /> &nbsp; Demo
                </Button>
            </Card.Body>
        </Card>
    );
}
export default ProjectCard;