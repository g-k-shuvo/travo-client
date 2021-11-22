import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import "../styles/AuthStyles.css";
import logo from "../images/logo.png";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const { error, signInUser, signInWithGoogle, signInWithFacebook } = useAuth();

  //Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signInUser(email, password);
  };
  return (
    <section id="authentication" className="section-padding">
      <Container>
        <Row className="justify-content-center">
          <Col lg={5} md={8}>
            <div className="auth-content">
              <div className="auth-logo">
                <img src={logo} alt="" />
              </div>
              <div className="auth-form">
                <div className="auth-form-body">
                  <h4 className="text-center">Sign In</h4>
                  <form onSubmit={handleSubmit} className="login-form mt-4">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Your Email <span className="text-danger">*</span>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Password <span className="text-danger">*</span>
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            required
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 mb-0">
                        <div className="d-grid">
                          <button type="submit" className="btn btn-primary">
                            Sign in
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>

                  <div className="row">
                    <div className="col-lg-12 mt-3 text-center">
                      <h6 className="text-muted">Or</h6>
                    </div>

                    <div className="col-6 mt-3">
                      <div className="d-grid">
                        <button
                          onClick={signInWithGoogle}
                          className="extra-auth-btn"
                        >
                          <FaGoogle /> Google
                        </button>
                      </div>
                    </div>
                    <div className="col-6 mt-3">
                      <div className="d-grid">
                        <button
                          onClick={signInWithFacebook}
                          className="extra-auth-btn"
                        >
                          <FaFacebookF /> Facebook
                        </button>
                      </div>
                    </div>

                    {error && (
                      <div className="row">
                        <div className="col-lg-12 mt-3 text-center">
                          <h6 className="text-danger">{error}</h6>
                        </div>
                      </div>
                    )}

                    <div className="col-12 text-center">
                      <p className="mb-0 mt-3">
                        <small className="text-dark me-2">
                          Don't have an account ?
                        </small>
                        <Link to="/signup" className="text-dark fw-bold">
                          Sign Up
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
