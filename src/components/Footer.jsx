import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={{ backgroundColor: 'rgba(26, 31, 36, 0.8)', padding: '10px 0', color: '#aaa', fontSize: '0.9rem' }}>
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col md="auto" className="text-center">
            <Link to="/" className="mx-2 text-decoration-none" style={{ color: '#aaa' }}>Home</Link>
            <Link to="/about" className="mx-2 text-decoration-none" style={{ color: '#aaa' }}>About</Link>
            <Link to="/projects" className="mx-2 text-decoration-none" style={{ color: '#aaa' }}>Projects</Link>
            <Link to="/cv" className="mx-2 text-decoration-none" style={{ color: '#aaa' }}>CV</Link>
            <Link to="/contact" className="mx-2 text-decoration-none" style={{ color: '#aaa' }}>Contact</Link>
          </Col>

          <Col md="auto" className="text-center">
            <p style={{ color: '#aaa', fontSize: '0.9rem', margin: '0' }}>© 2024 Hannah Chapman. All rights reserved.</p>
          </Col>

          <Col md="auto" className="text-center">
            <a href="mailto:hannahchapman1999@aol.com" style={{ color: '#aaa', marginRight: '15px' }}>hannahchapman1999@aol.com</a>
            <a href="https://github.com/hannahchapman79" target="_blank" rel="noopener noreferrer" style={{ color: '#aaa', fontSize: '1.2rem', marginRight: '15px' }}>
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/hannah-chapman-13360097/" target="_blank" rel="noopener noreferrer" style={{ color: '#aaa', fontSize: '1.2rem' }}>
              <FaLinkedin />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;