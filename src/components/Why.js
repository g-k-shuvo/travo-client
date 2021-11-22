import React from "react";
import SectionHeading from "./SectionHeading";
import "../styles/Why.css";
import { Col, Container, Row } from "react-bootstrap";
import {
  MdAttachMoney,
  MdSentimentSatisfiedAlt,
  MdStarOutline,
  MdThumbUpOffAlt,
} from "react-icons/md";

export default function Why() {
  return (
    <section id="why" className="section-padding">
      <SectionHeading subHeading="We Are Best" heading="Why Us" />
      <Container>
        <Row>
          <Col>
            <div className="why-text">
              <ul>
                <li>
                  <p>
                    <span>
                      <MdThumbUpOffAlt size={28} />
                    </span>
                    All placges and activiates are carefully picked by us
                  </p>
                </li>
                <li>
                  <p>
                    <span>
                      <MdAttachMoney size={28} />
                    </span>
                    Best price guaranteee & Hassle free!
                  </p>
                </li>
                <li>
                  <p>
                    <span>
                      <MdStarOutline size={28} />
                    </span>
                    We are an award winning agency
                  </p>
                </li>
                <li>
                  <p>
                    <span>
                      <MdSentimentSatisfiedAlt size={28} />
                    </span>
                    Trusted by more than 80,000 customers
                  </p>
                </li>
              </ul>
              <button className="t-btn-lg">Read More</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
