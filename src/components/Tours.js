import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import useTours from "../hooks/useTours";
import Loader from "./Loader";
import SectionHeading from "./SectionHeading";
import Tour from "./Tour";

export default function Tours() {
  const { loading, tours } = useTours();
  return (
    <section className="section-padding" id="tours">
      <SectionHeading subHeading="Our Trending" heading="Best Offers" />
      <Container>
        {loading ? (
          <Loader />
        ) : (
          <Row className="gy-5">
            {tours.map((tour) => (
              <Col lg={4} key={tour._id}>
                <Tour tour={tour} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </section>
  );
}
