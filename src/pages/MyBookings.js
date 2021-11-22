import React from "react";
import { Container, Row, Table } from "react-bootstrap";
import PageHeading from "../components/PageHeading";
import useMyBookings from "../hooks/useMyBookings";
import Loader from "../components/Loader";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";

export default function MyBookings() {
  const { loading, myBookings, removeBooking } = useMyBookings();

  return (
    <section id="my-bookings">
      <PageHeading pageName="Bookings" text="Home / My Bookings" />
      <div className="section-padding">
        <Container>
          {loading ? (
            <Row className="gy-5">
              <Loader />
            </Row>
          ) : (
            <Row>
              {myBookings.length !== 0 ? (
                <Table
                  responsive
                  striped
                  bordered
                  hover
                  className="text-center"
                >
                  <thead>
                    <tr>
                      <th>Destinaiton</th>
                      <th>Date</th>
                      <th>Tickets</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {myBookings.map((booking) => (
                      <tr key={booking._id}>
                        <td>{booking.destination}</td>
                        <td>{booking.date}</td>
                        <td>{booking.numberOfTickets}</td>
                        <td>
                          <button
                            onClick={() => {
                              removeBooking(booking._id);
                            }}
                            className="t-btn-danger"
                          >
                            <MdOutlineDelete size={20} /> Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              ) : (
                <div className="text-center">
                  <h3 className="mb-5 "> You Haven't Booked Yet!</h3>
                  <Link className="t-btn-lg" to="/">
                    Book Now
                  </Link>
                </div>
              )}
            </Row>
          )}
        </Container>
      </div>
    </section>
  );
}
