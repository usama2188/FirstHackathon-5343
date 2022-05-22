
import {UPDATE_PROFILE} from "../actions/ProfileAction";
// we will use this isUserLoggedIn in navigation for checking weather user login or not
const initialState = {
  user: null,
  userData: null,
 }
 
 
 
 function ProfileReducer(state=initialState, action) {
     switch (action.type) {
        case UPDATE_PROFILE:{
            // if user login than what?
                 return {
                     ...state,
                 };
             }

            
                
             
            
         default:
         return state;
     }
 }
 
 export default ProfileReducer;