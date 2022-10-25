import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { faBars, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <Navbar bg="white" expand="md" className="shadow main-header w-100" fixed = "top">
      <Container>
        <Navbar.Brand href="/" className="py-2">Auto Reply Text</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} className = "border-0">
          <FontAwesomeIcon icon={faBars} />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
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