
import {LOGIN,LOGOUT,SIGNUP,CHECK_USER} from "../actions/AuthActions";
// we will use this isUserLoggedIn in navigation for checking weather user login or not
const initialState = {
  isUserLoggedIn : false,
  user: null,
  userData: null,
 }
 
 
 
 function AuthReducer(state=initialState, action) {
     switch (action.type) {
        case SIGNUP:{
            // if user login than what?
                 return {
                     ...state,
                    user: action.payload
                 };
             }

             case CHECK_USER:{
                // if user login than what?
                     return {
                         ...state,
                         isUserLoggedIn:  true,
                         user: action.payload.user,
                         userData:action.payload.userData
                     };
                 }

         case LOGIN:{
        // if user login than what?
       
             return {
                 ...state,
                isUserLoggedIn:  true,
                user: action.payload.user,
                userData:action.payload.userData
             };
         }

         case LOGOUT:{
            // if user login than what?
                 return {
                     ...state,
                    isUserLoggedIn:  false,
                    user:null
                 };
             }
                
             
            
         default:
         return state;
     }
 }
 
 export default AuthReducer;