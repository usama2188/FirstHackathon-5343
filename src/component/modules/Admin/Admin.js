import React, { useEffect } from "react";

import { Form } from "react-bootstrap";
import "./Admin.css";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../commonComponent/Loader";
import { Link, useHistory } from "react-router-dom";
import { CustomInput } from "../../commonComponent/Custom";
import { storage } from "../../config/Firebase";
import { FiCheckCircle } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";


import { Card, Modal, Table, Row, Col, Container, Button } from "react-bootstrap";


import { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { doAddRestaurant, doGetFilterRestaurantList, doGetRestaurantList } from "../../store/actions/adminAction/AdminControlAction";


export default function Admin() {

  useEffect(() => {
    dispatch(doGetFilterRestaurantList(uid,setSpin))
   
  }, [])
 
  const uid = useSelector(state => state.AdminLoginReducer.Admin?.uid)
  const RestaurantList = useSelector(state => state.AdminControlReducer?.FilterRestaurantList)
  const history = useHistory();
  const [modalShow, setModalShow] = useState(false);
  //UseState
  const [RestaurantName, setRestaurantName] = useState()
  const [RestaurantDesc, setRestaurantDesc] = useState()
  const [City, setCity] = useState()
  const [Location, setLocation] = useState()
  const [file, setFile] = useState();



  const dispatch = useDispatch();
  const [Spin, setSpin] = useState(false);


  // Add Image Area
  const handleImageChange = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setFile(file);
  };


  //Submit
  const onSubmit = async (e) => {
    e.preventDefault();
    setSpin(true);
    const storageRef = storage.ref("Restaurant/");
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    const P_link = await fileRef.getDownloadURL();

    if (RestaurantName === "" || RestaurantDesc === "" || City === "" || file === "" || file === "") {
      return alert("All Fields Required");
    }

    const obj = {
      RestaurantName: RestaurantName,
      RestaurantDesc: RestaurantDesc,
      City: City,
      Location: Location,
      Img: P_link,
      ownerId: uid,
    };


    dispatch(doAddRestaurant(obj, history, setSpin));
    setModalShow(false)
    setSpin(false);



  };

  if (Spin) {

    return <Loader />;
  }



const filterUserCourse =[]
  return (
    <div style={{minHeight:400}}>
         <Container>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Create Restaurant
          </Modal.Title>
        </Modal.Header>
        <Modal.Body >


          <CustomInput label="RestaurantName" type="RestaurantName" placeholder="Enter Your RestaurantName" value={RestaurantName}
            onChange={(e) => {
              setRestaurantName(e.target.value);
            }} />

          <CustomInput label="RestaurantDesc" type="RestaurantDesc" placeholder="Enter Your RestaurantDesc" value={RestaurantDesc}
            onChange={(e) => {
              setRestaurantDesc(e.target.value);
            }} />

          <CustomInput label="Location" type="Location" placeholder="Enter Your Location" value={Location}
            onChange={(e) => {
              setLocation(e.target.value);
            }} />

          <CustomInput label="City" type="City" placeholder="Enter Your City" value={City}
            onChange={(e) => {
              setCity(e.target.value);
            }} />
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="fw-bold">Chose Restaurant Pic </Form.Label>
            <Form.Control
              type="file"

              id="imageInput"
              onChange={(e) => handleImageChange(e)}
            />
          </Form.Group>



        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onSubmit}>Create</Button>
        </Modal.Footer>
      </Modal>

      {RestaurantList != 0?

      
<div>
<h2 className="text-center mt-4">List Of Order</h2>
<Table responsive>
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Reg-No</th>
        <th>Course</th>
        <th>Accept</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {filterUserCourse?.map((item, index) => {
        return (
          <tr>
            <td>{index + 1} </td>
            <td>{item.Name} </td>
            <td>{item.Email} </td>
            <td>{item.Phone} </td>
            <td>{item.RegNo} </td>
            <td>{item.Course} </td>
            <td>
              <FiCheckCircle
                size={35}
                className="ABC"
                // onClick={() => Accept(item.docId)}
              />
            </td>
            <td>
              <RiDeleteBinLine
                size={40}
                className="ABD"
                // onClick={() => Delete(item.docId)}
              />
            </td>
          </tr>
        );
      })}
    </tbody>
  </Table>
</div>


      :
      <div
      style={{ textAlign: "center", marginTop: 200 }}
      class="shadow p-5"
    >
      <h2 style={{ fontFamily: "cursive" }}>
        Currently, You have no Restaurant
      </h2>
      <Button
        variant="success"
        onClick={() => setModalShow(true)}
      >
        <BsPlus size={25} style={{ marginBottom: 3 }} />
        Create Restaurant
      </Button>
    </div>

      
    }

     


      </Container>
    </div>
  );
}
