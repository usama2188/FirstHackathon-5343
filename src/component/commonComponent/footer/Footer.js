import React, { useState } from "react";
import { Card, Row, Nav, Col, Container, Button,Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";
import { useDispatch } from "react-redux";

import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { doSubscribe } from "../../store/actions/AuthActions";

export default function Footer() {
  const dispatch = useDispatch();
  const [Subscription, setSubscription] = useState();
  const subscribe = (e) => {
    e.preventDefault();
    if(Subscription === ""){
      return (
        alert("Email is necessary")
      )
    }
    dispatch(doSubscribe(Subscription));
    setSubscription("");
  };

  return (
    <div style={{marginTop:30}}>
      <Container fluid className="px-5 py-5 bg-dark ">
        <Row className="justify-content-lg-center">
          <Col lg={4} md={6} sm={12}>
            <h3 className="footer-heading heaC1">About</h3>
           <p className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it</p>

           <div className="pt-2 d-flex ">
              <a
                target="_blank"
                href="$"
                className=""
              >
                <FaFacebook size={30} color="rgb(169, 169, 169)" />
              </a>
              <a
                target="_blank"
                href="#"
                className="ms-3"
              >
                <FaLinkedin size={30} color="rgb(169, 169, 169)" />
              </a>
              <a
                target="_blank"
                href="#"
                className="ms-3"
              >
                <IoLogoYoutube size={30} color="rgb(169, 169, 169)" />
              </a>
            </div>
           

          </Col>

          <Col lg={4} md={6} sm={12}>
            <h3 className="footer-heading  heaC1">Cities</h3>

            <Nav className="d-flex flex-column">
              <Link to="/Faisalabad" className="footer-link ">
                Faisalabad
              </Link>
              <Link to="/Lahore" className="footer-link">
                Lahore
              </Link>
              <Link to="/Karachi" className="footer-link">
                Karachi
              </Link>
              <Link to="/Multan" className="footer-link">
                Multan
              </Link>
             
            </Nav>
            
          </Col>

          <Col lg={4} md={6} sm={12}>
            <h3 className="footer-heading heaC1">Services</h3>
            <Nav className="d-flex flex-column">
              <Link to="/Pizza" className="footer-link ">
                Pizza
              </Link>
              <Link to="/Biryani" className="footer-link">
                Biryani
              </Link>
              <Link to="/Rice" className="footer-link">
                Rice
              </Link>
              <Link to="/Pasta " className="footer-link">
                Pasta
              </Link>
             
            </Nav>
          </Col>
        </Row>
      </Container>
      <div style={{ backgroundColor: "gray" }}>
        <h6 className="text-center py-1 text-white">
          COPYRIGHT © 2021 Saylani. ALL RIGHTS RESERVED.
          <Link to="/AdminLogin" className="Admin ms-1 ">
            Admin
          </Link>
        </h6>
      </div>
    </div>
  );
}
