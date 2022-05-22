import React, { useState } from "react";
import { FiUserPlus, FaVideo } from "react-icons/fi";
import { GiBookStorm } from "react-icons/gi";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { doSignUp } from "../../../store/actions/AuthActions";
import { useDispatch } from "react-redux";
import Loader from "../../../commonComponent/Loader";
import { CustomInput } from "../../../commonComponent/Custom";
import bg from '../../../assets/bg.jpg'


export default function SignUp() {
  const [Name, setName] = useState("");
  const [Country, setCountry] = useState("");
  const [City, setCity] = useState("");

  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState();
  const [Password, setPassword] = useState();
  const [Spin, setSpin] = useState(false)

  const dispatch = useDispatch();
  const history = useHistory();


  const onSubmit = (e) => {
    if (Name === "" || Country === "" || City === "" || Email === "" || Phone === "" || Password === "") {
      return (
        alert("All fields required")
      )

    }
    e.preventDefault();
    const obj = {
      Name: Name,
      Country: Country,
      City: City,
      Email: Email,
      Phone: Phone,
      role: "user",
      Password: Password,
      joinDate: new Date().toLocaleDateString(),
      LastSignIn: new Date().toLocaleString(),
    };
    dispatch(doSignUp(obj, history, setSpin));
    setName("");
    setCountry("");
    setCity("")
    setEmail("");
    setPhone("");
    setPassword("");
    
  };

  if (Spin) {
    return (
      <Loader />

    )
  }

  return (
    <div style={{backgroundImage: `url(${bg})`,backgroundSize:"cover",paddingBottom:20}}>
      <div class="text-center mt-2 " style={{ fontSize: 30 }}>
        <GiBookStorm size={40} color="" style={{ marginRight: 10 }} />

        <span>Online Restaurant Management System</span>
      </div>
      <p class="text-center">
        <FiUserPlus
          size={25}
          color=""
          style={{ alignSelf: "center", marginBottom: 12 }}
        />
        <span style={{ fontSize: 25, marginLeft: 10 }}>User Area</span>
      </p>
      <Container fluid ClassName="justify-content-center">
        <div class="row justify-content-center mt-5">
          <Col lg={6} md={8} sm={10}>

            <div

              style={{ padding: 30, boxShadow: "0 1rem 3rem  #061521" }}
            >
              <h2 style={{ textAlign: "center", marginBottom: 30, fontFamily: "monospace", fontSize: 40 }} >SignUp</h2>

              <Row>
                <Col>
                  <CustomInput label="Name"  placeholder="Enter your Name" value={Name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }} />
                </Col>
                <Col>
                  <CustomInput label="Email" type="Email" placeholder="Enter Your Email" value={Email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }} />
                </Col>
              </Row>

              <Row>
                <Col>
                  <CustomInput label="Phone" type="Number" placeholder="Enter Your Phone" value={Phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }} />

                </Col>

                <Col>
                  <CustomInput label="Country" placeholder="Enter Your Country" value={Country}
                    onChange={(e) => {
                      setCountry(e.target.value);
                    }} />
                </Col>
              </Row>

              <Row>
                <Col>
                  <CustomInput label="City" placeholder="Enter Your City" value={City}
                    onChange={(e) => {
                      setCity(e.target.value);
                    }} />

                </Col>

                <Col>
                  <CustomInput label="Password" type="Password" placeholder="Enter Your Password" value={Password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }} />
                </Col>
              </Row>

              <Button variant="dark" type="submit" onClick={onSubmit}>
                Submit
              </Button>
            </div>
          </Col>
        </div>
      </Container>
      
    </div>
  );
}
