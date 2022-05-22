import { db, auth } from "../../../config/Firebase";
import firebase from "firebase";

export const GET_RESTAURANT = "GET_RESTAURANT";
export const GET_FILTER_RESTAURANT = "GET_FILTER_RESTAURANT";
export const GET_RESTAURANT_ITEM = "GET_RESTAURANT_ITEM";
export const GET_ANNOUNCEMENT = "GET_ANNOUNCEMENT";
export const GET_COURSE_LIST = "GET_COURSE_LIST";

export const doAddRestaurant = (obj, setSpin) => async (dispatch) => {
  try {
    await db.collection("Restaurant").add(obj);
    // setSpin(false);
    alert("Restaurant Added")
  } catch (error) {
    alert(error);

  }
};


export const doAddRestaurantItem = (obj, setSpin) => async (dispatch) => {
  try {
    setSpin(true)
    await db.collection("RestaurantItem").add(obj);
    setSpin(false);
    alert("RestaurantItem Added")
  } catch (error) {
    alert(error);

  }
};


export const doGetRestaurantList = (setSpin) => async (dispatch) => {
  try {
    setSpin(true);
    await db.collection("Restaurant").onSnapshot((querySnapshot) => {
      const RestaurantList = [];
      querySnapshot.forEach((doc) => {
        RestaurantList.push({
          ...doc.data(),
          docId: doc.id,
        });
      });

      console.log("CheckRestaurant LISt", RestaurantList);

      dispatch({
        type: GET_RESTAURANT,
        payload: RestaurantList
      });
      setSpin(false);
    });
  } catch (error) {
    alert(error);
    setSpin(false);
  }
};

export const doGetFilterRestaurantList = (id, setSpin) => async (dispatch) => {
  try {
    setSpin(true);
    await db.collection("Restaurant").where("ownerId", "==", id).onSnapshot((querySnapshot) => {
      const FILTER_RESTAURANT = [];
      querySnapshot.forEach((doc) => {
        FILTER_RESTAURANT.push({
          ...doc.data(),
          docId: doc.id,
        });
      });

      console.log("CheckRestaurant LISt", FILTER_RESTAURANT);

      dispatch({
        type: GET_FILTER_RESTAURANT,
        payload: FILTER_RESTAURANT
      });
      setSpin(false);
    });
  } catch (error) {
    alert(error);
    setSpin(false);
  }
};


export const doGetRestaurantItem = (setSpin) => async (dispatch) => {
  try {
    setSpin(true);
    await db.collection("RestaurantItem").onSnapshot((querySnapshot) => {
      const RestaurantItem = [];
      querySnapshot.forEach((doc) => {
        RestaurantItem.push({
          ...doc.data(),
          docId: doc.id,
        });
      });

      console.log("RestaurantItem LISt", RestaurantItem);

      dispatch({
        type: GET_RESTAURANT_ITEM,
        payload: RestaurantItem
      });
      setSpin(false);
    });
  } catch (error) {
    alert(error);
    setSpin(false);
  }
};

export const doDelNews = (docId, setSpin) => async (dispatch) => {
  try {
    setSpin(true);
    await db.collection("News").doc(docId).delete()
    alert("Done");
    setSpin(false);
  } catch (error) {
    alert(error);
    setSpin(false);
  }
};



//Course List Action

export const doAddCourseList = (obj, setSpin) => async (dispatch) => {
  try {
    setSpin(true);
    await db.collection("CourseList").add(obj);
    setSpin(false);
    alert("Course Added")
  } catch (error) {
    alert(error);
    setSpin(false);
  }
};


export const doGetCourseList = (setSpin) => async (dispatch) => {
  try {
    setSpin(true);
    await db.collection("CourseList").onSnapshot((querySnapshot) => {
      const CourseList = [];
      querySnapshot.forEach((doc) => {
        CourseList.push({
          ...doc.data(),
          docId: doc.id,
        });
      });

      console.log("CheckCourseList LISt", CourseList);

      dispatch({
        type: GET_COURSE_LIST,
        payload: CourseList
      });
      setSpin(false);
    });
  } catch (error) {
    alert(error);
    setSpin(false);
  }
};

export const doDelCourseList = (docId, setSpin) => async (dispatch) => {
  try {
    setSpin(true);
    await db.collection("CourseList").doc(docId).delete()
    alert("Done");
    setSpin(false);
  } catch (error) {
    alert(error);
    setSpin(false);
  }
};

