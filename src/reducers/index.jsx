import authenticatedReducer from "./authenticated";
import userReducer from "./user";
import {combineReducers} from "redux";

const allReducers = combineReducers({
    authenticated: authenticatedReducer,
    user:userReducer
})

export default allReducers;