import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "../styles/Footer.css";
import logo from "../images/logo.png";

export default function Footer() {
  return (
    <footer className="section-padding">
      <Container>
        <div className="footer-logo">
          <Image src={logo} />
        </div>
        <div className="footer-content">
          <Row className="gy-5">
            <Col lg={4}>
              <div className="footer-heading">
                <h3>Contact With Us</h3>
              </div>
              <div className="footer-details">
                <ul>
                  <li>
                    <p>
                      <span>London:</span> +6-345-3456-244
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>New York:</span> +1-345-33454-5
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>Tokyo:</span> +34-8757-4666
                    </p>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={4}>
              <div className="footer-heading">
                <h3>About Us</h3>
              </div>
              <div className="footer-details">
                <ul>
                  <li>
                    <p>Our Story</p>
                  </li>
                  <li>
                    <p>Travel Blog and Tips</p>
                  </li>
                  <li>
                    <p>Privacy & Policy</p>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={4}>
              <div className="footer-heading">
                <h3>Support</h3>
              </div>
              <div className="footer-details">
                <ul>
                  <li>
                    <p>Be Our Partnar</p>
                  </li>
                  <li>
                    <p>Work With Us</p>
                  </li>
                  <li>
                    <p>Customer Support</p>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
}
