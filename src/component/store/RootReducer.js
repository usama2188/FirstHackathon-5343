import { combineReducers } from "redux";
import AuthReducer from "./reducers/AuthReducer";
import PicReducer from "./reducers/PicReducer";
import ProfileReducer from "./reducers/ProfileReducer";
import CoursesReducer from "./reducers/CoursesReducer";
import GetDataReducer from './reducers/admin/GetDataReducer';
import AdminLoginReducer from './reducers/admin/AdminLoginReducer';
import AdminControlReducer from './reducers/admin/AdminControlReducer';




const rootReducer = combineReducers({
    AuthReducer,
    AdminControlReducer,
    PicReducer,
    ProfileReducer,
    AdminLoginReducer,
    CoursesReducer,
    GetDataReducer,

});


export default rootReducer;

