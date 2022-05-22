import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./NavigationBar.css";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    }
    else {
      setColorchange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);
  const move = () => {
  window.scrollTo(0, 0)


  }

  return (
    <div className="mar">
      <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" className={colorChange ? 'bg-dark' : 'navbar'} style={{ fontWeight: "500", backgroundColor: "transparent" }}>
        <Container>
          <Navbar.Brand href="/" className="fw-bold heaC">
            Restaurant
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="">
            <Nav
              className="ms-auto"
              onSelect={(selectedKey) => history.push(selectedKey)}>
              <Nav.Link eventKey="/" onClick={move}>Home</Nav.Link>
              <Nav.Link href="#About" >
                About Us
              </Nav.Link>
              <Nav.Link  href="#Restaurant">Restaurant</Nav.Link>


            </Nav>
            <Nav className="ms-3">
              <Nav.Link as={Link} to="/Login" style={{ backgroundColor: "white", color: "black", borderRadius: 10, textAlign: "center" }}>Order</Nav.Link>

            </Nav>


          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
