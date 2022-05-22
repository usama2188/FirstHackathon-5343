import {GET_RESTAURANT,GET_FILTER_RESTAURANT,GET_RESTAURANT_ITEM,GET_COURSE_LIST} from "../../actions/adminAction/AdminControlAction";
const initialState = {
 RestaurantList: null,
 FilterRestaurantList: null,
 RestaurantItem:null,
 GetCourseList:null,
 }
 
 
 
 function AdminControlReducer(state=initialState, action) {
     switch (action.type) {
      
             case GET_RESTAURANT:{
            
                return {
                    ...state,
                    RestaurantList: action.payload
                };
            }

            case GET_RESTAURANT_ITEM:{
            
                return {
                    ...state,
                    RestaurantItem:  action.payload
                };
            }
            case GET_COURSE_LIST:{
            
                return {
                    ...state,
                    GetCourseList:  action.payload
                };
            }

            case GET_FILTER_RESTAURANT:{
            
                return {
                    ...state,
                    FilterRestaurantList:  action.payload
                };
            }
        default:
         return state;
     }
 }
 
 export default AdminControlReducer;