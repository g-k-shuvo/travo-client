import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import PageHeading from "../components/PageHeading";
import useAddTour from "../hooks/useAddTour";
import logo from "../images/logo.png";
import Swal from "sweetalert2";

import "../styles/AddTour.css";

export default function AddTour() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [duration, setDuration] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [age, setAge] = useState("");

  const { addTour } = useAddTour();

  const validateImgUrl = (url) => {
    return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
  };

  const data = { title, image, duration, price, location, age };

  //Handle Form Submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateImgUrl(image)) {
      await addTour(data);
    } else {
      Swal.fire("Opps!", "Please Provide A Valid Image URL", "error");
      setImage("");
      return;
    }
  };
  return (
    <section id="add-tour">
      <PageHeading pageName="Add Tour" text="Home / Add Tour" />

      <div className="section-padding">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} md={12}>
              <div className="add-tour-content">
                <div className="add-tour-logo">
                  <img src={logo} alt="" />
                </div>
                <div className="add-tour-form">
                  <div className="add-tour-form-body">
                    <form onSubmit={handleSubmit} className="login-form mt-4">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label className="form-label">
                              Location <span className="text-danger">*</span>
                            </label>
                            <input
                              autoComplete="off"
                              type="text"
                              className="form-control"
                              placeholder="Destination"
                              value={title}
                              onChange={(e) => setTitle(e.target.value)}
                              name="title"
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
                              autoComplete="off"
                              type="text"
                              className="form-control"
                              placeholder="Image Url"
                              value={image}
                              onChange={(e) => {
                                setImage(e.target.value);
                              }}
                              name="image"
                              required
                            />
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="mb-3">
                            <label className="form-label">
                              Duration <span className="text-danger">*</span>
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              placeholder="Duration"
                              name="duration"
                              value={duration}
                              onChange={(e) => setDuration(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label className="form-label">
                              Price <span className="text-danger">*</span>
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              placeholder="Price"
                              value={price}
                              onChange={(e) => setPrice(e.target.value)}
                              required
                            />
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="mb-3">
                            <label className="form-label">
                              Location <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Location"
                              value={location}
                              onChange={(e) => setLocation(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label className="form-label">
                              Age <span className="text-danger">*</span>
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              placeholder="Age"
                              value={age}
                              onChange={(e) => setAge(e.target.value)}
                              required
                            />
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="d-grid">
                            <button type="submit" className="btn btn-primary">
                              Add Tour
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
