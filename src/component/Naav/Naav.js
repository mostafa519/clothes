import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { AiOutlineMenu } from "react-icons/ai";
import "./naav.css";
import { Link } from "react-router-dom";
const Naav = () => {
  return (
    <Navbar expand="lg" className="naav ">
      <Container>
        <div>
          <AiOutlineMenu className="me-3 fs-3 menu-icon" />

          <Navbar.Brand>ALL CATEGORIES</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/shop">
              Shops
            </Nav.Link>
            <Nav.Link as={Link} to="/brand">
              Brands
            </Nav.Link>
            <Nav.Link as={Link} to="/category">
              Categories
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Naav;
