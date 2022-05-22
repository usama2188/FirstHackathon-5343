import { db, auth } from "../../config/Firebase";
import firebase from "firebase";

// import { CHECK_USER } from "../reducers/TodoType";

export const S_ADD_COURSE = "S_ADD_COURSE";
export const CHECK_COURSE = "S_ADD_COURSE";

export const doCheckCourse = (uid, setSpin) => async (dispatch) => {
  try {
    setSpin(true);
    await db
      .collection("MyCourse")
      .where("uid", "==", uid)
      .onSnapshot((querySnapshot) => {
        const CourseList = [];
        querySnapshot.forEach((doc) => {
          CourseList.push({
            ...doc.data(),
            docId: doc.id,
          });
        });

        dispatch({
          type: CHECK_COURSE,
          payload: CourseList,
        });
        setSpin(false);
      });
  } catch (error) {
    alert(error);
    setSpin(false);
  }
};

export const doS_addCourse =
  (obj, history, setSpin, userData) => async (dispatch) => {
    try {
      setSpin(true);

      await db.collection("MyCourse").add({
        RegNo: obj.RegNo,
        Course: obj.Course,
        uid: obj.uid,
        request: false,
        Name: userData.Name,
        Email: userData.Email,
        Phone: userData.Phone,
      });
      setSpin(false);
      alert("You send request successfully");

      history.replace("/User/MyCourses");
    } catch (error) {
      alert(error);
      setSpin(false);
    }
  };
