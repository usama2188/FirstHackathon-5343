import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Loader from "../../../commonComponent/Loader";
import { Link, useHistory } from "react-router-dom";
import { doChangePassword } from "../../../store/actions/AuthActions";

export default function ChangePassword() {
  const userData = useSelector((state) => state.AuthReducer.userData);

  const [Email, setEmail] = useState(userData.Email);
  const [OldPassword, setOldPassword] = useState();
  const [Password, setPassword] = useState();
  const [Spin, setSpin] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const docId = userData.docId
  const onSubmit = (e) => {
    e.preventDefault();
    if (OldPassword === "" || Password === "") {
      return alert("All Fields Required");
    }
    if (OldPassword === userData.Password) {
      dispatch(doChangePassword(Password, history, setSpin, docId));
    } else {
      setPassword(Password);
      setOldPassword(OldPassword)
      alert("Your Old Password is Wrong");

    }

    // setOldPassword("")
    setPassword("");
    setOldPassword("")
  };
  if (Spin) {
    return <Loader />;
  }
  return (
    <div className="mt-5 mb-5">
      <Container>
        <Form onSubmit={onSubmit}>
          <Row>
            <Col xs={12} md={{ span: 6, offset: 3 }}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ fontSize: 20 }}>Email address</Form.Label>
                <Form.Control type="email" value={Email} readOnly />
              </Form.Group>
            </Col>
            <Col xs={12} md={{ span: 6, offset: 3 }}>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label style={{ fontSize: 20 }}>
                  Enter Old Password
                </Form.Label>
                <Form.Control
                  type="Text"
                  value={OldPassword}
                  onChange={(e) => {
                    setOldPassword(e.target.value);
                  }}
                />
              </Form.Group>
            </Col>

            <Col xs={12} md={{ span: 6, offset: 3 }}>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label style={{ fontSize: 20 }}>
                  Enter New Password
                </Form.Label>
                <Form.Control
                  type="Text"
                  value={Password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={{ span: 6, offset: 3 }}>
              <Button variant="outline-info" type="submit">
                Update
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}
