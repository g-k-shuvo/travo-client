import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import PageHeading from "../components/PageHeading";
import aboutImg from "../images/about-section-bg.jpg";
import "../styles/About.css";

export default function About() {
  return (
    <section id="about">
      <PageHeading pageName="About Us" text="Home / About Us" />
      <div className="section-padding">
        <Container>
          <Row>
            <Col md={6}>
              <div className="about-text">
                <h3>a few words</h3>
                <h1>About Us</h1>
                <p>
                  Dreaming of a romantic getaway to Hawaii or an exciting
                  vacation in Las Vegas? If planning the trip and making the
                  reservations seem like a lot of work just to get some rest and
                  relaxation, you've come to the right place! For over 30 years,
                  the professional travel agents at American Tourist Travel
                  Agency have been planning all-inclusive vacations, charters,
                  tours and vacation packages for individuals, families and
                  groups, and we'd love to do the same for you. Call or e-mail
                  us for a free quote and you'll be on your way to your dream
                  vacation!
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="about-image">
                <Image src={aboutImg} className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
