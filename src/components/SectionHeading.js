import React from "react";
import { Container } from "react-bootstrap";

export default function SectionHeading({ subHeading, heading }) {
  return (
    <div className="section-heading">
      <Container>
        <div className="section-heading-text">
          <h2>{subHeading}</h2>
          <h1>{heading}</h1>
        </div>
      </Container>
    </div>
  );
}
