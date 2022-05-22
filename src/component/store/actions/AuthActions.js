import { db, auth } from "../../config/Firebase";
import firebase from "firebase";
// import { CHECK_USER } from "../reducers/TodoType";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SIGNUP = "SIGNUP";
export const CHECK_USER = "CHECK_USER";

export const doLogin = (obj, history, setSpin) => async (dispatch) => {
  try {
    setSpin(true);
    // firebase login
    const userResult = await auth.signInWithEmailAndPassword(
      obj.Email,
      obj.Password
    );
    const id = userResult.user.uid;

    const data = await db.collection("User").where("id", "==", id).get();
    let userData = [];
    data.forEach((doc) => {
      userData.push({
        ...doc.data(),
        docId: doc.id,
      });
    });
    console.log("User",userData);
    //Convert Array into Object
    userData = userData.values();
    for (let val of userData) {
      userData = val;
    }
    //End UserData Code

    if (userResult.user.emailVerified === true ) {
      if (userData.role === "user") {
        dispatch({
          type: LOGIN,
          payload: {
            user: userResult.user,
            userData: userData,
          },
        });
        
      }
      
      setSpin(false);
      history.replace("/User");
    } else {
      setSpin(false);
      history.replace("/Login");
      alert("First Verify Email");
    }
  } catch (error) {
    alert(error);
    setSpin(false);
  }
};

export const doSignUp = (obj, history, setSpin) => async (dispatch) => {
  try {
    setSpin(true);
    // firebase login
    const result = await auth.createUserWithEmailAndPassword(
      obj.Email,
      obj.Password
    );
    await result.user.updateProfile({
      displayName: obj.Name
    });
    await result.user.sendEmailVerification();
    await db.collection("User").add({
      Name: obj.Name,
      Country: obj.Country,
      City: obj.City,
      Email: obj.Email,
      Phone: obj.Phone,
      Password: obj.Password,
      joinDate: new Date().toLocaleDateString(),
      LastSignIn: new Date().toLocaleString(),
      id: result.user.uid,
    });
    dispatch({
      type: SIGNUP,
      payload: result.user,
    });

    setSpin(false);
    history.replace("/Login");
    alert("Plz Check Your Email For Verification");
  } catch (error) {
    history.replace("/SignUp");
    setSpin(false);
    alert(JSON.stringify(error));
  }
};

export const doChangePassword =
  (Password, history, setSpin, docId) => async (dispatch) => {
    try {
      setSpin(true);
      const user = await firebase.auth().currentUser;
      console.log("USERS", user);
      await user.updatePassword(Password);
      await db.collection("User").doc(docId).update({
        Password: Password,
      });
      setSpin(false);
      alert("Your Password Update");
    } catch (error) {
      alert(error);
      setSpin(false);
      console.log("error", error);
    }
  };

export const doSendMail = () => async (dispatch) => {
  try {
    console.log("doSendMail Working");
    const user = await firebase.auth().currentUser;
    await user.sendEmailVerification();
    console.log("doSendMail Done");
  } catch (error) {
    alert(JSON.stringify(error));
    console.log("error", error);
  }
};

export const doLogout = (history) => (dispatch) => {
  try {
    console.log("Logout Working");
    // firebase login
    const res = auth.signOut();
    console.log("user", res);
    dispatch({
      type: LOGOUT,
    });
    history.replace('/')
  } catch (error) {
    alert(JSON.stringify(error));
    console.log("error", error);
  }
};

export const doCheckUser = (user) => async (dispatch) => {
  try {
    const id = user.uid;
    //For Getting data Which user Provide on the time of Signup
    const data = await db.collection("User").where("id", "==", id).get();
    let userData = [];
    data.forEach((doc) => {
      userData.push({
        ...doc.data(),
        docId: doc.id,
      });
    });
    //Convert Array into Object
    userData = userData.values();
    for (let val of userData) {
      userData = val;
    }

    // console.log("userDataaaaa",userData.role);
    if (userData.role === user) {
      dispatch({
        type: CHECK_USER,
        payload: {
          user: user,
          userData: userData,
        },
      });

      
    }
    //End UserData Code
  
  } catch (error) {

    alert(JSON.stringify(error));
    console.log("error", error);
  }
};

export const doUpdateLastSignTime = (docId) => async (dispatch) => {
  try {
    const date = new Date()
    await db.collection("User").doc(docId).update({
      LastSignIn: date.toLocaleString()
    })


  } catch (error) {
    alert(JSON.stringify(error));

  }
};

export const doSubscribe = (Subscription) => async (dispatch) => {
  try {

    await db.collection("OurSubscriber").add({
      Email: Subscription
    })
    alert("You subscribe Successfully")


  } catch (error) {
    alert(error);

  }
};

