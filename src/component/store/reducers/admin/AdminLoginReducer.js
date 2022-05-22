
import {ADMIN_LOGIN,ADMIN_LOGOUT} from "../../actions/adminAction/AdminLoginAction";
// we will use this isAdminLoggedIn in navigation for checking weather user login or not
const initialState = {
  isAdminLoggedIn : false,
  Admin: null,
  AdminData:null,
}
 
 
 
 function AdminLoginReducer(state=initialState, action) {
     switch (action.type) {
      

         case ADMIN_LOGIN:{
        // if user login than what?
       
             return {
                 ...state,
                isAdminLoggedIn:  true,
                Admin: action.payload.Admin,
                AdminData:action.payload.AdminData
               
             };
         }

         case ADMIN_LOGOUT:{
            // if user login than what?
                 return {
                     ...state,
                    isAdminLoggedIn:  false,
                    Admin:null
                 };
             }
                
             
            
         default:
         return state;
     }
 }
 
 export default AdminLoginReducer;