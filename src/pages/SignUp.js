import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import logo from "../images/logo.png";
import "../styles/AuthStyles.css";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const { signUpUser, signInWithGoogle, signInWithFacebook } = useAuth();

  const validateImgUrl = (url) => {
    return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
  };

  //Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateImgUrl(imageUrl)) {
      await signUpUser(email, password, name, imageUrl);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Provide A Valid Image URL",
      });
      setImageUrl("");
      return;
    }
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
                  <h4 className="text-center">Sign Up</h4>
                  <form onSubmit={handleSubmit} className="login-form mt-4">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Username <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            name="username"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Image Url <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Image Url"
                            value={imageUrl}
                            onChange={(e) => {
                              setImageUrl(e.target.value);
                            }}
                            name="imageurl"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
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
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Password <span className="text-danger">*</span>
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="d-grid">
                          <button type="submit" className="btn btn-primary">
                            Register
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

                    <div className="col-12 text-center">
                      <p className="mb-0 mt-3">
                        <small className="text-dark me-2">
                          Already have an account ?
                        </small>
                        <Link to="/signin" className="text-dark fw-bold">
                          Sign In
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
