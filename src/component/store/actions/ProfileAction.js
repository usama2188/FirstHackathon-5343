import { db, auth } from "../../config/Firebase";
import firebase from "firebase";

// import { CHECK_USER } from "../reducers/TodoType";

export const UPDATE_PROFILE = "UPDATE_PROFILE";

export const doUpdateProfile =(obj, history, setSpin, docId) => async (dispatch) => {
    try {
      console.log("Check File Update action",obj.photoURL);
    //   setSpin(true);
      // firebase login
      const user = await firebase.auth().currentUser;
     await user.updateProfile({     
        photoURL: obj.photoURL
      })
        const userUpdateResult = await db.collection("User").doc(docId).update({
        Name: obj.Name,
        Phone: obj.Phone,      

      });
      setSpin(false);
      alert("Your Profile Updated")
    } catch (error) {
      alert(error);
      setSpin(false);
    }
  };

