import { combineReducers } from "redux";
import authReducer from "./authReducer"
import { carsReducer } from "./carsReducer";

export const rootReducer=combineReducers({
    authReducer,
    carsReducer
})