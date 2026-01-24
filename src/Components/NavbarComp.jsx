import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { HashLink } from 'react-router-hash-link';
import '../Css/Style.css';

const NavbarComp = () => {
  const [navbarTransparent, setNavbarTransparent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // scroll ke baad
        setNavbarTransparent(true);
      } else {
        setNavbarTransparent(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`navbar-custom ${navbarTransparent ? 'navbar-transparent' : ''}`}
    >
      <Container xxl>
        <Navbar.Brand as={HashLink} to="/#home">SoftLand</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto" navbarScroll>
            <Nav.Link as={HashLink} smooth to="/#home">Home</Nav.Link>
            <Nav.Link as={HashLink} smooth to="/#about">About</Nav.Link>
            <Nav.Link as={HashLink} smooth to="/#features">Features</Nav.Link>
            <Nav.Link as={HashLink} smooth to="/#pricing">Pricing</Nav.Link>
            <NavDropdown title="More" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action2">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">Something else</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={HashLink} smooth to="/#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
