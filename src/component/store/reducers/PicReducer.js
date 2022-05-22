import {
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  LOAD_POST,
  CHECKED_POST,
} from "../actions/Types";
// we will use this isUserLoggedIn in navigation for checking weather user login or not
const initialState = {
  isUserLoggedIn: false,
  user: null,
  
picData:null
};

function PicReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_POST: {
    console.log("Red",action.payload );

        return {
          ...state,
          picData: action.payload,
          

        };
      }

    case ADD_POST: {
      // if user login than what?
      return {
        ...state,
      };
    }

    default:
      return state;
  }
}

export default PicReducer;
