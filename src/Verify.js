import React, { useState } from "react";
import { FiUserPlus, FaVideo } from "react-icons/fi";
import { GiBookStorm } from "react-icons/gi";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { doLogout, doSendMail } from "./component/store/actions/AuthActions";

export default function () {
  const history = useHistory();

    const dispatch = useDispatch()
    const SendMail = () =>{
        dispatch(doSendMail())
    }
    const logout = () =>{
      dispatch(doLogout(history))
  }
  return (
    <div>
      <div>
       
        <Container fluid ClassName="justify-content-center">
          <div class="row justify-content-center" style={{marginTop:200 }}>
            <Col lg={4} md={6} sm={8} style={{
                  padding: 30,
                  boxShadow: "0 1rem 3rem rgba(0,0,0,.175)",
                }}>
                    <p style={{fontStyle:"italic",fontSize:30,marginBottom:40}}>First Verify Your Email</p>
                    <a href="https://mail.google.com/" target="_blank" class="btn btn-info"> Verify</a>
                    <Button variant="dark" style={{marginLeft:20}} onClick={SendMail}> ReSend Email</Button>
                    <Button variant="dark" style={{marginLeft:20}} onClick={logout}> Use another Email</Button>
             
            </Col>
          </div>
        </Container>
      </div>
    </div>
  );
}
