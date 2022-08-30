import {configureStore} from "@reduxjs/toolkit"
import UserReducer from "../reducers/UserReducer";
import DeptReducer from "../reducers/DeptReducer";

const reducer={
    user:UserReducer,
    dept:DeptReducer
}
const store=configureStore({
    reducer
})
export default store