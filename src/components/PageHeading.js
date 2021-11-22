import React from "react";
import { Col, Container } from "react-bootstrap";

export default function PageHeading({ pageName, text }) {
  return (
    <section className="section-padding page-heading">
      <Container>
        <Col>
          <div className="page-heading-text">
            <h1>{pageName}</h1>
            <h3>{text}</h3>
          </div>
        </Col>
      </Container>
    </section>
  );
}
