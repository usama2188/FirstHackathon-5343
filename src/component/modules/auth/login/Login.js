import React, { useState } from "react";
import { FiUserPlus, FaVideo } from "react-icons/fi";
import { GiBookStorm } from "react-icons/gi";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Loader from "../../../commonComponent/Loader";
import { doLogin } from "../../../store/actions/AuthActions";
import banner from '../../../assets/First/banner.jpg'
import { CustomInput } from "../../../commonComponent/Custom";
import './Login.css'
import bg from '../../../assets/bg.jpg'


export default function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState();
  const [Spin, setSpin] = useState(false)


  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (e) => {
    if (Email === "" || Password === "") {
      return(
        alert("All Fields Required")
      )
      
    }
    e.preventDefault();
    const obj = {
      Email: Email,
      Password: Password,
      
    };
    console.log("checl", obj);
    dispatch(doLogin(obj,history,setSpin));

    setEmail("");
    setPassword("");
  };

  if (Spin) {
    return (
      <Loader />

    )
  }

  return (
    <div style={{backgroundImage: `url(${bg})`,backgroundSize:"cover"}}>

      <div class="text-center pt-5 " style={{ fontSize: 30 }}>
        <GiBookStorm size={40} color="" style={{ marginRight: 10 }} />

        <span style={{fontSize:"bold",fontFamily:"cursive"}}>Online Restaurant Management System</span>
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
          <Col lg={4} md={6} sm={8}>
            <Form.Text className=" p-2" style={{ float: "right",color:"#dfebf2" }} >
              Need an Account{" "}
              <Link to="/SignUp" style={{color:"white"}}>
                SignUp
              </Link>
            </Form.Text>
            <div

              style={{ padding: 30, boxShadow: "0 1rem 3rem #061521" }}
            >

              <CustomInput label="Email" type="Email" placeholder="Enter Your Email" value={Email} text="We'll never share your email with anyone else."
                onChange={(e) => {
                  setEmail(e.target.value);
                }} />

              <CustomInput label="Password"  type="Password" placeholder="Enter Your Password" value={Password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }} />



              <Button variant="dark" type="submit" onClick={onSubmit}>
                Submit
              </Button>
            </div>
          </Col>
         

        </div>
        <h2 style={{marginTop:20,textAlign:"center"}}>
       <Button onClick={()=>{history.replace("/")}}>Back to Home</Button>
          </h2>
       
      </Container>
      <br/>
      <br/>
      
    
    </div>
  );
}
