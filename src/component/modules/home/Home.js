import React, { useState, useEffect } from "react";
import "./Home.css";

import { useDispatch } from "react-redux";
import { Card, Row, Nav, Col, Modal, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from './Home/Header'
import About from './Home/About'
import Shop from './Home/Shop'
import Menu from './Home/Menu'
import Clients from './Home/Clients'
import TopRestaurant from './Home/TopRestaurant'
import banner from '../../assets/First/banner.jpg'


import Marquee from "../../commonComponent/Marquee";


export default function Home() {
  const [Trending, setTrending] = useState(true);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   setTimeout(() => {
  //     handleShow();
  //   }, 700);
  // }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const news = useSelector((state) => state.AdminControlReducer?.news);

  return (
    <div style={{}}>
      <Header/>
      <About/>
      <Shop />
      <Menu />
      <Clients />
      <TopRestaurant />


      {/* Modal For Latest News */}
      <>
        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Latest News</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {news?.map((item) => {
              return (
                <>
                  <a
                    href="#L_News"
                    style={{
                      textDecoration: "none",
                      fontWeight: "bold",
                      fontSize: 20,
                      color: "#25254b",
                    }}
                  >
                    {item.NewsTitle}                  
                  </a>
                  <br />
                </>
              );
            })}
          </Modal.Body>

          <Marquee title="Latest News From AFTC" />
        </Modal>
      </>
      {/* End Modal  */}

     
    
    </div>
  );
}
