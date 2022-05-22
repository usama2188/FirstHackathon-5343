import React from "react";
import { Modal,Button } from "react-bootstrap";

export default function ModalAlert(props) {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
          <h4>
         {props.detail}
          </h4>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-info" onClick={props.onHide}>Close</Button>
          <Button  variant="outline-success" onClick={props.submit}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
