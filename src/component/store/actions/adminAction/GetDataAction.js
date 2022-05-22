import { db, auth } from "../../../config/Firebase";
import firebase from "firebase";

// import { CHECK_USER } from "../reducers/TodoType";

export const G_U_COURSE = "G_U_COURSE";
export const G_USER = "G_USER";
export const G_SUBSCRIBER = "G_SUBSCRIBER";

export const doGetCourseByAdmin = (setSpin) => async (dispatch) => {
  try {
    setSpin(true);
    await db.collection("MyCourse").onSnapshot((querySnapshot) => {
      let userCourseList = [];
      querySnapshot.forEach((doc) => {
        userCourseList.push({
          ...doc.data(),
          docId: doc.id,
        });
      });

      console.log("CheckFinal", userCourseList);

      dispatch({
        type: G_U_COURSE,
        payload: userCourseList,
      });
      setSpin(false);
    });
  } catch (error) {
    alert(error);
    setSpin(false);
  }
};

export const doGetSubscriber = (setSpin) => async (dispatch) => {
  try {
    setSpin(true);
    await db.collection("OurSubscriber").onSnapshot((querySnapshot) => {
      let OurSubscriber = [];
      querySnapshot.forEach((doc) => {
        OurSubscriber.push({
          ...doc.data(),
          docId: doc.id,
        });
      });

      console.log("OurSubscriber", OurSubscriber);

      dispatch({
        type: G_SUBSCRIBER,
        payload: OurSubscriber,
      });
      setSpin(false);
    });
  } catch (error) {
    alert(error);
    setSpin(false);
  }
};

export const doGetUserByAdmin = (setSpin) => async (dispatch) => {
  try {
    setSpin(true);
    await db.collection("User").onSnapshot((querySnapshot) => {
      let User = [];
      querySnapshot.forEach((doc) => {
        User.push({
          ...doc.data(),
          docId: doc.id,
        });
      });

      dispatch({
        type: G_USER,
        payload: User,
      });
      setSpin(false);
    });
  } catch (error) {
    alert(error);
    setSpin(false);
  }
};

export const doAcceptRequest = (docId, setSpin) => async (dispatch) => {
  try {
    setSpin(true);
    const userCourse = await db.collection("MyCourse").doc(docId).update({
      request: true,
    });
    alert("Done");
    setSpin(false);
  } catch (error) {
    alert(error);
    setSpin(false);
  }
};

export const doDeleteRequest = (docId, setSpin) => async (dispatch) => {
  try {
    setSpin(true);
    const userCourse = await db.collection("MyCourse").doc(docId).delete()
    alert("Done");
    setSpin(false);
  } catch (error) {
    alert(error);
    setSpin(false);
  }
};
