import React, { useEffect, useState } from "react";
import {doUpdateLastSignTime, loadUserData } from "../../../store/actions/AuthActions";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Loader from "../../../commonComponent/Loader";
import { Link, useHistory } from "react-router-dom";
import { doUpdateProfile } from "../../../store/actions/ProfileAction";
// import Profile from "../../../assets/Profile.png";
import { storage } from "../../../config/Firebase";
import { MdEdit } from "react-icons/md";
import { doCheckCourse } from "../../../store/actions/CoursesAction";
export default function User() {
  const userData = useSelector((state) => state.AuthReducer.userData);
  const uid = useSelector(state => state.AuthReducer.user?.uid)
  const photoURL = useSelector((state) => state.AuthReducer.user.photoURL);
 
  const docId = userData.docId;
 

  // For Check Course user enroll or not already
  useEffect(() => {
    dispatch(doCheckCourse(uid,setSpin))
    dispatch(doUpdateLastSignTime(docId))
  
}, [])

  const [Email, setEmail] = useState(userData.Email);
  const [Name, setName] = useState(userData.Name);
  const [Phone, setPhone] = useState(userData.Phone);
  const [RegNo, setRegNo] = useState(userData.RegNo);
  const [MyCourse, setMyCourse] = useState(userData.MyCourse);
  const [Spin, setSpin] = useState(false);
  const [Category, setCategory] = useState("Hot");

  const [IMG, setIMG] = useState(photoURL);
  const [file, setFile] = useState();

  const dispatch = useDispatch();
  const history = useHistory();

  const handleImageChange = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setIMG(URL.createObjectURL(file));
    setFile(file);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setSpin(true);
    const storageRef = storage.ref("Profile/");
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    const P_link = await fileRef.getDownloadURL();

    if (Name === "" || Phone === "") {
      return alert("All Fields Required");
    }

    const obj = {
      Name: Name,
      Phone: Phone,
      photoURL: P_link,
    };
    console.log("Check obj in USERUPDAATE form", obj.photoURL);

    dispatch(doUpdateProfile(obj, history, setSpin, docId));

    console.log("Check obj in USERUPDAATE form", obj);
  };
  if (Spin) {
    return <Loader />;
  }
  const imageInput = () => {
    const image = document.getElementById("imageInput");
    image.click();
  };

  // Get student Enrolled Course 

  return (
    <div
      className="pt-5  pb-5 "
      style={{
        // backgroundImage: `url(${Profile})`,
      }}
    >
      <Container>
        <Form onSubmit={onSubmit}>
          <div className="text-center mb-3">
            <img
              src={IMG}
              alt="Profile"
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                border: "1px solid black",
              }}
            />
            <Form.Control
              type="file"
              hidden
              id="imageInput"
              onChange={(e) => handleImageChange(e)}
            />
            <br />
            <MdEdit
              size={25}
              style={{ marginLeft: 100, marginTop: -20 }}
              onClick={imageInput}
            />
          </div>
          <Row>
            <Col xs={12} md={{ span: 6, offset: 3 }}>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label style={{ fontSize: 20 }}>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={Name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </Form.Group>
            </Col>

            <Col xs={12} md={{ span: 6, offset: 3 }}>
              <Form.Group className="mb-3" controlId="formBasicNumber">
                <Form.Label style={{ fontSize: 20 }}>Phone Number</Form.Label>
                <Form.Control
                  type="number"
                  value={Phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={{ span: 6, offset: 3 }}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ fontSize: 20 }}>Email address</Form.Label>
                <Form.Control type="email" value={Email} readOnly />
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
