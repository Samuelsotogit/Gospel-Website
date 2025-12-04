import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./AppNavbar.css";

export default function AppNavbar() {
  return (
    <Navbar bg="light" expand="lg" className="app-navbar">
      <Container className="navbar-inner">
        <Navbar.Brand as={NavLink} to="/home">
          GospelVisual{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navigation-bar">
            <Nav.Link as={NavLink} to="/home" end>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/faith">
              Faith
            </Nav.Link>
            <Nav.Link as={NavLink} to="/repentance">
              Repentance
            </Nav.Link>
            <Nav.Link as={NavLink} to="/baptism">
              Baptism
            </Nav.Link>
            <Nav.Link as={NavLink} to="/spirit">
              Holy Ghost
            </Nav.Link>
            <Nav.Link as={NavLink} to="/endure">
              Endure
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
