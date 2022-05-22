import React,{useEffect,useState} from 'react'
import { Container, Row,Card, Col, Form, Button } from "react-bootstrap";

import { useParams,Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { doGetRestaurantItem } from '../../../store/actions/adminAction/AdminControlAction';
import Loader from '../../../commonComponent/Loader';



export default function Restaurant() {
    const {id} = useParams()
  const [Spin, setSpin] = useState(false)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(doGetRestaurantItem(setSpin))
        
    }, [])

  const RestaurantItem = useSelector(state => state.AdminControlReducer?.RestaurantItem)
 
  const result = RestaurantItem?.filter((item)=>{
      if (item.RestaurantDocId === id        ) {
          return (
              item
          )
          
      }
  })
  console.log("result", result);



if (Spin) {
    return (
      <Loader />

    )
  }

    return (
        <div>
        <Container>
        <h2 className="text-center mt-4">
          Restaurant Item 
        </h2>

        <Row>
          {result?.map((item)=>{
            return(
               <Col  lg={4} md={4} sm={6} className="mt-4 Course_Card">

              <Link to={`/${item.RestaurantName}/${item.docId}`} style={{textDecoration:"none",color:"black"}}>
              <Card style={{border: '1px solid gray',  borderRadius:2 }} className="R_C">
                <Card.Img
                  variant="top"
                  src={item.ItemImg}
                  height="200px"
                  className="cc "
                />
                <Card.Body style={{minHeight:50}}>
                  <Card.Title>{item.ItemName}</Card.Title>
                  <Card.Text>{item.Price} PKR</Card.Text>
  
                
                </Card.Body>
                <Card.Footer className="text-muted" style={{display:"flex",justifyContent:"space-between"}}>
                  <h6>{item.Category}</h6>
                  <h6>{item.DeliveryType}</h6>
                </Card.Footer>
              </Card>
              </Link>

            </Col>
             

            )
          })}
         
        </Row>

      </Container>
        </div>
    )
}
