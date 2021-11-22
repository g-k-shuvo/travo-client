import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { MdLocationPin, MdPersonOutline, MdWatchLater } from "react-icons/md";
import { useHistory, useParams } from "react-router";
import PageHeading from "../components/PageHeading";
import useAuth from "../hooks/useAuth";
import useTour from "../hooks/useTour";
import Swal from "sweetalert2";
import "../styles/Details.css";

export default function Details() {
  const { id } = useParams();
  const { tour } = useTour(id);
  const { user } = useAuth();
  const history = useHistory();

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    fetch("https://grisly-pirate-99712.herokuapp.com/book", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          reset();
          Swal.fire({
            icon: "success",
            title: "Tour Booked Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          history.push(`/mybookings/${user.email}`);
        }
      });
  };

  return (
    <section id="details">
      <PageHeading pageName="Tour Details" text="Home / Tour Details" />
      <div className="section-padding">
        <Container>
          <Row>
            <Col md={8}>
              <div className="details-text">
                <h1>Tour Details</h1>
                <Image src={tour.image} className="img-fluid" />
                <h2>{tour.title}</h2>
                <div className="detail-meta">
                  <div className="day">
                    <h3>
                      <MdWatchLater size={26} />
                    </h3>
                    <h5>{tour.duration} Days</h5>
                  </div>
                  <div className="age">
                    <h3>
                      <MdPersonOutline size={26} />
                    </h3>
                    <h5>{tour.age} +</h5>
                  </div>
                  <div className="location">
                    <h3>
                      <MdLocationPin size={26} />
                    </h3>
                    <h5>{tour.location}</h5>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="booking">
                <h1>Book This Tour</h1>
                <div className="booking-form">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                      autoComplete="off"
                      type="text"
                      placeholder="Destination"
                      defaultValue={tour.title}
                      {...register("destination", { required: true })}
                    />
                    <input
                      autoComplete="off"
                      type="text"
                      placeholder="Name"
                      defaultValue={user.displayName}
                      {...register("name", { required: true })}
                    />
                    <input
                      autoComplete="off"
                      type="email"
                      placeholder="Email"
                      defaultValue={user.email}
                      {...register("email", { required: true })}
                    />
                    <input
                      autoComplete="off"
                      type="text"
                      placeholder="Phone"
                      {...register("phone", { required: true, maxLength: 11 })}
                    />
                    <input
                      type="date"
                      placeholder="Date"
                      {...register("date", { required: true })}
                    />
                    <input
                      type="number"
                      placeholder="Number Of Tickets"
                      min="1"
                      {...register("numberOfTickets", {
                        required: true,
                      })}
                    />

                    <select
                      hidden
                      defaultValue="pending"
                      {...register("status")}
                    >
                      <option value="completed">Completed</option>
                      <option value="pending">Pending</option>
                    </select>

                    <input type="submit" />
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
