
import {S_ADD_COURSE,CHECK_COURSE} from "../actions/CoursesAction";
// we will use this isUserLoggedIn in navigation for checking weather user login or not
const initialState = {
 course:null
 }
 
 
 
 function CoursesReducer(state=initialState, action) {
     switch (action.type) {
        case CHECK_COURSE:{
            
                 return {
                     ...state,
                     course: action.payload
                 };
             }

            
                
             
            
         default:
         return state;
     }
 }
 
 export default CoursesReducer;