import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Loader from "../components/Loader";
import PageHeading from "../components/PageHeading";
import useTeam from "../hooks/useTeam";
import "../styles/Team.css";

export default function Team() {
  const { loading, team } = useTeam();
  return (
    <section id="team">
      <PageHeading pageName="Our Team" text="Home / Our Team" />
      <div className="section-padding">
        <Container>
          {loading ? (
            <Row className="gy-5">
              <Loader />
            </Row>
          ) : (
            <Row className="gy-5">
              {team.map((t) => (
                <Col key={t._id} md={3}>
                  <div className="team">
                    <div className="team-img">
                      <Image src={t.image} className="img-fluid" />
                    </div>
                    <div className="team-info">
                      <h3>{t.name}</h3>
                      <p>{t.designation}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </div>
    </section>
  );
}
