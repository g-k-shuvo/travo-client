import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import client1 from "../images/client1.png";
import client2 from "../images/client2.png";
import client3 from "../images/client3.png";
import client4 from "../images/client4.png";
import client5 from "../images/client5.png";
import SectionHeading from "./SectionHeading";

export default function Associates() {
  return (
    <section id="associates" className="section-padding">
      <SectionHeading subHeading="Our Best Traveling" heading="Associates" />
      <Container>
        <Row className="justify-content-between text-center gy-5">
          <Col md={2}>
            <Image src={client1} />
          </Col>
          <Col md={2}>
            <Image src={client2} />
          </Col>
          <Col md={2}>
            <Image src={client3} />
          </Col>
          <Col md={2}>
            <Image src={client4} />
          </Col>
          <Col md={2}>
            <Image src={client5} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
