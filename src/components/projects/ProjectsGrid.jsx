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
                <p className="project-subheading">
                    Here are some recent projects I&apos;ve developed.
                </p>
                <section className="project-cards"> 
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <Col md={4} className="project-card-item">
                        <ProjectCard
                            imgPath="/assets/bali-guide.png"
                            title="Bali Guide"
                            description="A smarter way to explore Bali: this itinerary generator combines Meta&apos;s Llama 4 with lived-in personal recommendations to deliver travel plans you won&apos;t find on Google. Built with TypeScript, Node.js and MongoDB."
                            ghLink="https://github.com/hannahchapman79/BaliGuide"
                            ghSecondaryLink="https://github.com/hannahchapman79/BaliGuide-backend"
                            demoLink="https://baliguide.vercel.app/"
                        />
                    </Col>
                <Col md={4} className="project-card-item">
                        <ProjectCard
                            imgPath="/assets/together-events.png"
                            title="Together Events"
                            description="A full-stack community events platform built for Tech Returners. Users can browse, sign up for, and add events to Google Calendar, while admins can create and manage events. Built with Next.js, TypeScript, Node.js, and MongoDB, the app features secure JWT authentication and role-based access."
                            ghLink="https://github.com/hannahchapman79/TogetherEvents-FE"
                            ghSecondaryLink="https://github.com/hannahchapman79/TogetherEvents-BE"
                            demoLink="https://together-events.vercel.app/"
                        />
                    </Col>
                    <Col md={4} className="project-card-item">
                        <ProjectCard
                            imgPath="/assets/clearskies.png"
                            title="Clear Skies Weather App"
                            description="Clear Skies is a mobile app built with Flutter and Dart, to enhance my Object-Oriented Programming skills. It fetches real-time weather data for any city, dynamically adjusting colours and Cupertino icons based on current conditions for an engaging, iOS-like user experience."
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
                            title="HDC News"
                            description="A full-stack news application inspired by Reddit. The back-end API and database utilises Express and PSQL, while the front end, built with React, JavaScript, HTML, and CSS, allows users to explore articles by topic, upvote or downvote content, and add comments."
                            ghLink="https://github.com/hannahchapman79/hdc-news"
                            ghSecondaryLink="https://github.com/hannahchapman79/hdc-news-backend"
                            demoLink="https://hdcnews.netlify.app/"
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
                </section>
            </Container>
        </Container>

    );
}

export default Projects;