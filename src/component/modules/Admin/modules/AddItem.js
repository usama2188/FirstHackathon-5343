import React, { useState, useEffect } from 'react'
import { Card, Modal, Table, Row, Col, Form, Container, Button } from "react-bootstrap";
import { CustomInput } from '../../../commonComponent/Custom'
import { useSelector, useDispatch } from "react-redux";
import { doAddRestaurantItem, doGetRestaurantList } from '../../../store/actions/adminAction/AdminControlAction';
import Loader from '../../../commonComponent/Loader';
import { storage } from "../../../config/Firebase";



export default function AddItem() {
    const dispatch = useDispatch()
    const uid = useSelector(state => state.AdminLoginReducer.Admin?.uid)
    const RestaurantList = useSelector(state => state.AdminControlReducer.RestaurantList)

    const result = RestaurantList.find(({ ownerId }) => ownerId === uid);
    console.log("result", result.docId);
    useEffect(() => {
        dispatch(doGetRestaurantList(setSpin))

    }, [])

    const [ItemName, setItemName] = useState()
    const [Price, setPrice] = useState()
    const [Category, setCategory] = useState()
    const [DeliveryType, setDeliveryType] = useState()
    const [file, setFile] = useState();

    const [Spin, setSpin] = useState(false);


    const AddItem = async (e) => {
        e.preventDefault();
        setSpin(true);
        const storageRef = storage.ref("RestaurantItem/");
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        const item_img_link = await fileRef.getDownloadURL();


        if (ItemName === "" || Price === "") {
            return (
                alert("All Fields Required")
            )

        }

        const obj = {
            ItemName: ItemName,
            Price: Price,
            Category: Category,
            DeliveryType: DeliveryType,
            RestaurantDocId: result.docId,
            ItemImg: item_img_link,
        }
        dispatch(doAddRestaurantItem(obj, setSpin))
        console.log("checxgxakahfkwrjhsgsvgfkk",obj);
        console.log("SUCCESS");

        setItemName("")
        setPrice("")

    }

    // Add Image Area
    const handleImageChange = async (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        setFile(file);
    };

    if (Spin) {

        return <Loader />;
    }

    return (
        <div>
            <Container>
                <h2 className="text-center mt-4">Add Item</h2>
                <Row>
                    <Col xs={12} md={{ span: 6, offset: 3 }}>
                        <CustomInput label="Item Name" type="ItemName" placeholder="Enter Your ItemName" value={ItemName}
                            onChange={(e) => {
                                setItemName(e.target.value);
                            }} />

                    </Col>

                    <Col xs={12} md={{ span: 6, offset: 3 }}>
                        <CustomInput label="Price" type="Price" placeholder="Enter Your Price in PKR" value={Price}
                            onChange={(e) => {
                                setPrice(e.target.value);
                            }} />

                    </Col>

                    <Col xs={12} md={{ span: 6, offset: 3 }}>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label style={{ fontWeight: "bold" }}>Chose Category</Form.Label>

                            <Form.Select
                                onChange={(e) => {
                                    setCategory(e.target.value);
                                }}
                            >
                                <option>Select</option>

                                <option>Chowmein</option>
                                <option>Singaporean</option>
                                <option>Itly</option>

                            </Form.Select>
                        </Form.Group>
                    </Col>

                    <Col xs={12} md={{ span: 6, offset: 3 }}>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label style={{ fontWeight: "bold" }}>Delivery Type</Form.Label>

                            <Form.Select
                                onChange={(e) => {
                                    setDeliveryType(e.target.value);
                                }}
                            >
                                <option>Select</option>

                                <option>Free</option>
                                <option>Paid</option>


                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col xs={12} md={{ span: 6, offset: 3 }}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="fw-bold">Chose Item Pic </Form.Label>
                            <Form.Control
                                type="file"
                                id="imageInput"
                                onChange={(e) => handleImageChange(e)}
                            />
                        </Form.Group>
                        
                        </Col>
                    <Col xs={12} md={{ span: 6, offset: 3 }}>
                        <Button variant="success" onClick={AddItem}>Add Item</Button>

                    </Col>

                </Row>



            </Container>

        </div>
    )
}
