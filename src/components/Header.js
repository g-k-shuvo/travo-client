import React from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { MdLogout } from "react-icons/md";
import "../styles/Header.css";
import logo from "../images/logo.png";
import useAuth from "../hooks/useAuth";
import { useHistory } from "react-router";

export default function Header() {
  const { user, signOutUser } = useAuth();

  const history = useHistory();

  const handleMyBookings = () => {
    history.push(`/mybookings/${user.email}`);
  };

  const handleAllBookings = () => {
    history.push("/allbookings");
  };

  const handleAddTour = () => {
    history.push("/addtour");
  };

  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <LinkContainer to="/">
              <Image src={logo} />
            </LinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>About Us</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/team">
                <Nav.Link>Our Team</Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav className="ms-auto">
              {user.displayName ? (
                <>
                  <button className="header-btn" onClick={handleMyBookings}>
                    My Bookings
                  </button>
                  <button className="header-btn" onClick={handleAllBookings}>
                    Manage Bookings
                  </button>
                  <button className="header-btn" onClick={handleAddTour}>
                    Add Tour
                  </button>
                  <div className="header-img">
                    <img src={user.photoURL} alt="" />
                  </div>
                  <button className="header-btn" onClick={signOutUser}>
                    <MdLogout /> Logout
                  </button>
                </>
              ) : (
                <>
                  <LinkContainer to="/signin">
                    <Nav.Link>Sign In</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/signup">
                    <Nav.Link>Sign Up</Nav.Link>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
