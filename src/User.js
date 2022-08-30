import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {modifyDeptNameAction} from "./redux/actions/deptAction";
import {modifyUserNameAction} from "./redux/actions/userAction";
function User(){
    const data= useSelector((state)=>state);
    const dispatch= useDispatch();
    console.log(data);
    return(
        <>
        <h1>User Component</h1>
        <h2>DEPT: {data.dept.deptName}</h2>
        <button onClick={()=>dispatch(modifyDeptNameAction())}>Change Dept</button>
        <h2>NAME: {data.user.username}</h2>
        <button onClick={()=>dispatch(modifyUserNameAction())}>Change Name</button>
        </>
    )
}
export default User;