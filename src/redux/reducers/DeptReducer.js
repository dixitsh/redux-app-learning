const initialState={
    id:12,
    deptName:"DevOps"
}
const DeptReducer=(state=initialState, action)=>{
    switch(action.type){
        case "CHANGE_DEPT":
            return{
                ...state,
                deptName:"HR"
            }
        default:
            return state;
    }
}
export default DeptReducer;