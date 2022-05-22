import React from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap";


export  function CustomInput(props) {
    const {label,type,placeholder,text,onChange,value, ...rest } = props;
  
      return (
        <Form>
        <Form.Group className="mb-3" controlId={`formBasic${type}`}>
          <Form.Label className="fw-bold text-white">{label}</Form.Label>
          <Form.Control type={type} value={value} placeholder={placeholder} className="CustomInput " onChange={onChange} />
          <Form.Text className="" style={{color:"#dfebf2"}}>
            {text}
          </Form.Text>
        </Form.Group>
        </Form>
    )
  }