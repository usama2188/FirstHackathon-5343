import React from "react";
import { Navbar, Nav, Container,Button, NavDropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./AdminNavigationBar.css";
import { Link } from "react-router-dom";
import { doAdminLogout } from "../../../store/actions/adminAction/AdminLoginAction";

export default function AdminNavigationBar() {
  const history = useHistory();
  const dispatch = useDispatch()

  const Logout =()=>{
    dispatch(doAdminLogout())
   

  }


  return (
    
    <div  className="">
    <Navbar collapseOnSelect expand="lg"  variant="dark"  className="bg-dark" style={{fontWeight:"500"}}>
      <Container>
        <Navbar.Brand href="/" className="fw-bold heaC">
         Admin Panel
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="ms-5">
          <Nav
            className=""                   
            onSelect={(selectedKey) => history.push(selectedKey)}>
            <Nav.Link eventKey="/Admin">Home</Nav.Link>

            <Nav.Link eventKey="/Admin/AddItem">Add Item</Nav.Link>
            <Nav.Link eventKey="/Admin/Pending">Pending</Nav.Link>
            <Nav.Link eventKey="/Admin/Accepted"> Accepted</Nav.Link>
            <Nav.Link eventKey="/Admin/Delivered">Delivered</Nav.Link>
         
            

            <Nav.Link  onClick={Logout}>Logout</Nav.Link>


          </Nav>
          

          <Nav className="ms-auto">
       
            
          </Nav>
         
          
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
    
  );
}
