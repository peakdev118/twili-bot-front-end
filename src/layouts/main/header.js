import React from "react";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar bg="white" expand="md" className="shadow main-header w-100" fixed = "top">
      <Container>
        <Navbar.Brand className="py-2"><Link to = "/">Auto Reply Text</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} className = "border-0">
          <FontAwesomeIcon icon={faBars} />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav><Link to = "/about" className="w-100 header-navbar-item">About</Link></Nav>
            <Nav><Link to = "/contact" className="w-100 header-navbar-item">Contact</Link></Nav>
            <Nav.Link eventKey={2} href="#memes">
              <FontAwesomeIcon icon={faSignOutAlt} className="me-3" />
              <span>logout</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;