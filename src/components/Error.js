import React from "react";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router";
import "../styles/Error.css";

export default function Error() {
  const history = useHistory();

  const handleRoute = () => {
    history.push("/");
  };
  return (
    <section id="error">
      <Container>
        <div className="error-text">
          <h1>404</h1>
          <h2>Opps! Page Not Found!</h2>
          <button onClick={handleRoute} className="t-btn-lg">
            Home
          </button>
        </div>
      </Container>
    </section>
  );
}
