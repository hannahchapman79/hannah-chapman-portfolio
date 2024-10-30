import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

function Projects() {
    return (
        <Container fluid className="project-section">
            <Container>
                <h1 className="project-heading">
                    My <strong>Projects </strong>
                </h1>
                <p style={{ color: "black" }}>
                    Here are some recent projects I&apos;ve developed.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card-item">
                        <ProjectCard
                            imgPath="/assets/clearskies.png"
                            title="Clear Skies Weather App"
                            description="Clear Skies is a mobile app built with Flutter and Dart, designed to strengthen OOP skills. It fetches real-time weather data for any city, dynamically adjusting colors and icons based on current conditions for an engaging user experience."
                            ghLink="https://github.com/hannahchapman79/Clear-Skies-Weather-App"
                            demoLink="https://drive.google.com/file/d/1ae1AzyVsOoVHljPtHj8L2Hk7fjC0QbeS/view?usp=sharing"
                        />
                    </Col>

                    <Col md={4} className="project-card-item">
                        <ProjectCard
                            imgPath="/assets/wildsight.png"
                            title="Wildsight"
                            description="An AI-powered mobile app developed as part of a team, that identifies plants through the user's camera. Users can save sightings and explore a heatmap to view global discoveries. Built with React Native, Node.js, and PostgreSQL, integrated with Google and Apple Maps."
                            ghLink="https://github.com/DevDolphin7/WildSight-FE"
                            ghSecondaryLink="https://github.com/fekoware/wildside-be"
                            demoLink="https://northcoders.com/project-phase/wildsight"
                        />
                    </Col>

                    <Col md={4} className="project-card-item">
                        <ProjectCard
                            imgPath="/assets/ncnews.png"
                            title="NC News"
                            description="A full-stack news application inspired by Reddit. The back-end API and database utilises Express and PSQL, while the front end, built with React, JavaScript, HTML, and CSS, allows users to explore articles by topic, upvote or downvote content, and add comments. This platform provides an interface for viewing, interacting with, and contributing to various news articles and discussions."
                            ghLink="https://github.com/hannahchapman79/nc-news"
                            ghSecondaryLink="https://github.com/hannahchapman79/be-nc-news"
                            demoLink="https://66b5de66c4712d2e55c90430--hdcnews.netlify.app/"
                        />
                    </Col>

                    <Col md={4} className="project-card-item">
                        <ProjectCard
                            imgPath="/assets/catify.png"
                            title="Catify"
                            description="A fun, responsive front-end app built through pair programming, using React, JavaScript, HTML, and CSS to fetch random cat photos via an external API. Users can select the number of images and filter by specific breeds, making it easy to explore various cat breeds."
                            ghLink="https://github.com/hannahchapman79/Catify "
                            demoLink="https://hannahs-catify-app.netlify.app/"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;