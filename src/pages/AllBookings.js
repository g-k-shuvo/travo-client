import React from "react";
import { Container, Row, Table } from "react-bootstrap";
import PageHeading from "../components/PageHeading";
import Loader from "../components/Loader";
import { MdOutlineChangeCircle, MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import useAllBookings from "../hooks/useAllBookings";

export default function AllBookings() {
  const { loading, allBookings, removeBooking, updateBookingStatus } =
    useAllBookings();

  return (
    <section id="all-bookings">
      <PageHeading pageName="Bookings" text="Home / All Bookings" />
      <div className="section-padding">
        <Container>
          {loading ? (
            <Row className="gy-5">
              <Loader />
            </Row>
          ) : (
            <Row>
              {allBookings.length !== 0 ? (
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
                      <th>Name</th>
                      <th>Date</th>
                      <th>Tickets</th>
                      <th>Status</th>
                      <th>Edit Status</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allBookings.map((booking) => (
                      <tr key={booking._id}>
                        <td>{booking.destination}</td>
                        <td>{booking.name}</td>
                        <td>{booking.date}</td>
                        <td>{booking.numberOfTickets}</td>
                        <td>{booking.status} </td>
                        <td>
                          <button
                            onClick={() => updateBookingStatus(booking._id)}
                            className="t-btn-standard"
                          >
                            <MdOutlineChangeCircle size={20} /> Edit
                          </button>
                        </td>
                        <td>
                          <button
                            onClick={() => removeBooking(booking._id)}
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
                  <h3 className="mb-5 ">No Bookings Availabel!</h3>
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
