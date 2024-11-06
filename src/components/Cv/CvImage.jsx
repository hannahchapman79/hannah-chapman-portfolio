import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Carousel from 'react-bootstrap/Carousel';
import { AiOutlineDownload } from "react-icons/ai";

function CvImage() {

    const cvPath = "/assets/hannah-chapman-cv.pdf";

    return (
        <div>
            <Container fluid className="cv-section">
                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <Button
                        variant="primary"
                        href={cvPath}
                        target="_blank"
                        className="outline-button"
                        style={{ maxWidth: 250 }}
                    >
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </Button>
                </Row>
                <Row style={{ justifyContent: "center", padding: 20 }}>
                    <Carousel>
                        <Carousel.Item>
                            <img className="cv-image" src="/assets/cv-page1.png" alt="Page 1 of CV" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="cv-image" src="/assets/cv-page2.png" alt="Page 2 of CV" />
                        </Carousel.Item>
                    </Carousel>

                </Row>
            </Container>
        </div>
    );
}

export default CvImage;