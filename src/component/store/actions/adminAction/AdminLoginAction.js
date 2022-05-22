import { db, auth } from "../../../config/Firebase";
import firebase from "firebase";

export const ADMIN_LOGIN = "ADMIN_LOGIN";
export const ADMIN_LOGOUT = "ADMIN_LOGOUT";
export const ADMIN_SIGNUP = "ADMIN_SIGNUP";


export const doAdminLogin = (obj, history, setSpin) => async (dispatch) => {
  try {
    setSpin(true);
    // firebase login
    const AdminResult = await auth.signInWithEmailAndPassword(
      obj.Email,
      obj.Password
    );
    const id = AdminResult.user.uid;

    const data = await db.collection("Admin").where("id", "==", id).get();
    let AdminData = [];
    data.forEach((doc) => {
      AdminData.push({
        ...doc.data(),
        docId: doc.id,
      });
    });
    console.log("Admin",AdminData);
    //Convert Array into Object
    AdminData = AdminData.values();
    for (let val of AdminData) {
      AdminData = val;
    }
    //End AdminData Code

    if (AdminResult.user.emailVerified === true) {
      if (AdminData.role === "Admin") {
        dispatch({
          type: ADMIN_LOGIN,
          payload: {
            Admin: AdminResult.user,
            AdminData: AdminData,
          },
        });
        
      }else(
        await auth.signOut()
        

      )
    
      setSpin(false);
      history.replace("/Admin");
    } else {
      setSpin(false);
      history.replace("/AdminLogin");
      alert("First Verify Email");
    }
  } catch (error) {
    alert(error);
    setSpin(false);
  }
};

// export const doCheckUser = (user) => async (dispatch) => {
//   try {
//     const id = user.uid;
//     //For Getting data Which user Provide on the time of Signup
//     const data = await db.collection("Admin").where("id", "==", id).get();
//     let userData = [];
//     data.forEach((doc) => {
//       userData.push({
//         ...doc.data(),
//         docId: doc.id,
//       });
//     });
//     //Convert Array into Object
//     userData = userData.values();
//     for (let val of userData) {
//       userData = val;
//     }
//     //End UserData Code
//     dispatch({
//       type: CHECK_USER,
//       payload: {
//         user: user,
//         userData: userData,
//       },
//     });
//   } catch (error) {

//     alert(JSON.stringify(error));
//     console.log("error", error);
//   }
// };

export const doAdminSignUp = (obj, history, setSpin) => async (dispatch) => {
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
    await db.collection("Admin").add({
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
      type: ADMIN_SIGNUP,
      payload: result.user,
    });

    setSpin(false);
    history.replace("/AdminLogin");
    alert("Plz Check Your Email For Verification");
  } catch (error) {
    history.replace("/SignUp");
    setSpin(false);
    alert(JSON.stringify(error));
  }
};

export const doAdminLogout = () => (dispatch) => {
    try {
      console.log("Logout Working");
      
      const res = auth.signOut();
      dispatch({
        type: ADMIN_LOGOUT,
      });
    } catch (error) {
      alert(error);
    }
  };