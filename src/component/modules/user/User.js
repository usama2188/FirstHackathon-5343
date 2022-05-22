import React, { useEffect, useState } from "react";
import { Container, Row,Card, Col, Form, Button } from "react-bootstrap";
import png from "../../assets/resturant/jpg.jpg";
import { Link, useHistory } from "react-router-dom";
import './UserPanel.css'
import { useSelector, useDispatch } from "react-redux";





export default function User() {
  
  const RestaurantList = useSelector(state => state.AdminControlReducer?.RestaurantList)



  return (
    <div>
      <Container>
        <h2 className="text-center mt-4">
          Resrurant List
        </h2>
        <Row>
          {RestaurantList.map((item)=>{
            return(
              <Col  lg={4} md={4} sm={6} className="mt-4 Course_Card">

              <Link to={`/${item.RestaurantName}/${item.docId}`} style={{textDecoration:"none",color:"black"}}>
              <Card style={{border: '1px solid gray',  borderRadius:2 }} className="R_C">
                <Card.Img
                  variant="top"
                  src={item.Img}
                  height="200px"
                  className="cc "
                />
                <Card.Body style={{}}>
                  <Card.Title>{item.RestaurantName}</Card.Title>
                  <Card.Text style={{height:100}} className="overflow-hidden">{item.RestaurantDesc}</Card.Text>

  
                
                </Card.Body>
                <Card.Footer className="text-muted" style={{display:"flex",justifyContent:"space-between"}}>
                  <h6>{item.City}</h6>
                  <h6>{item.Location}</h6>
                </Card.Footer>
              </Card>
              </Link>
            </Col>

             

            )
          })}
         
        </Row>

      </Container>


    </div>
  );
}
