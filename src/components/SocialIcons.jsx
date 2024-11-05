import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import GitHubIcon from '@mui/icons-material/GitHub';
// import { FaLinkedin } from 'react-icons/fa';
import { FiGithub } from "react-icons/fi";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { MdMailOutline } from "react-icons/md";


const SocialIcons = () => {
  return (
    <>
      <Container>
        <p className="lets-connect">LET'S <span>CONNECT</span></p>
        <Row>
          <Col md={12}>
            <ul className="social-icons">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/hannah-chapman-13360097/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <RiLinkedinBoxLine className="home-icon linkedin-icon"/>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/hannahchapman79"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub className="home-icon"/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:hannahchapman1999@aol.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <MdMailOutline className="home-icon"/>
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
