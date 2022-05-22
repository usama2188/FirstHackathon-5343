import React from "react";
import { Spinner } from "react-bootstrap";


export default function Loader() {
  return (
    <div style={{minHeight:300}}>
        <div style={{position:"absolute", top:300,right:650}}>
        <Spinner animation="grow" className="ms-1" variant="dark"  size="lg"/>
        <Spinner animation="grow" className="ms-1" variant="dark" /> 
        <Spinner animation="grow" className="ms-1" variant="dark" />
        
    </div>

    </div>
  
  );
}
