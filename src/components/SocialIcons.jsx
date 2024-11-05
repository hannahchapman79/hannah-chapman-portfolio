import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import GitHubIcon from '@mui/icons-material/GitHub';
import { FaLinkedin } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={12}>
            <ul className="social-icons">
              <li>
                <a
                  href="https://github.com/hannahchapman79"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon className="home-icon"/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/hannah-chapman-13360097/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedin className="home-icon"/>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SocialIcons;
