import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

function Cv() {
    const cvPath = "/assets/hannah-chapman-cv.pdf";

    return (
        <div>
            <Container fluid className="cv-section">
                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <Button
                        variant="primary"
                        href={cvPath}
                        target="_blank"
                        className="purple-button"
                        style={{ maxWidth: 250 }}
                    >
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </Button>
                </Row>

                <Row style={{ justifyContent: "center", padding: 20 }}>
                    <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.2.146/build/pdf.worker.min.js`}>
                        <div style={{ width: "60vw", height: "100%" }}>
                            <Viewer fileUrl={cvPath} style={{ width: "100%", height: "100%" }} defaultScale={1.5} />
                        </div>
                    </Worker>
                </Row>
            </Container>
        </div>
    );
}

export default Cv;