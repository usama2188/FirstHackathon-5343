
import {G_U_COURSE,G_SUBSCRIBER,G_USER} from "../../actions/adminAction/GetDataAction";
// we will use this isUserLoggedIn in navigation for checking weather user login or not
const initialState = {
 userCourse:null,
 OurSubscriber:null,
 User:null,
 }
 
 
 
 function GetDataReducer(state=initialState, action) {
     switch (action.type) {
        case G_U_COURSE:{

            
                 return {
                     ...state,
                     userCourse: action.payload
                 };
             }
             case G_SUBSCRIBER:{            
                return {
                    ...state,
                    OurSubscriber: action.payload
                };
            }
            case G_USER:{            
                return {
                    ...state,
                    User: action.payload
                };
            }


            
                
             
            
         default:
         return state;
     }
 }
 
 export default GetDataReducer;