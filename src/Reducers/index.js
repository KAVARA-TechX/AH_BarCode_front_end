import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import {itemListReducer} from "./itemListReducer";
const rootReducer = combineReducers({
    user: userReducer,
    list: itemListReducer,
});

export default rootReducer;