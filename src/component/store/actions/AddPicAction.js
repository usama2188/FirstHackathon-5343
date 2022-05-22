import { db } from "../../config/Firebase";
import {
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  LOAD_POST,
  CHECKED_POST,
} from "./Types";

export const loadData = async (dispatch) => {
  try {
    
    const data = await db.collection("HotPic").get();
    let picData = []
    data.forEach((doc)=>{
        picData.push(doc.data())
        
    })
    console.log("student Data",picData)


    

    dispatch({
      type: LOAD_POST,
      payload: picData,
    });

  } catch (error) {
    alert(error);
    console.log("error", error);
  }
};

export const addPost = (obj, Category) => async (dispatch) => {
  try {
    console.log("action", obj);
    const objAdd = await db.collection(Category).add(obj);

    dispatch({
      type: ADD_POST,
      payload: objAdd,
    });
    console.log("objAdd", objAdd);
  } catch (error) {
    alert(error);
    console.log("error", error);
  }
};
