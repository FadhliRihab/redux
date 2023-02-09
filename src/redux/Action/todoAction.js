import { DELETE_TODO, GET_TODO } from "../ActionTypes/TodoAction"


export const Get_Todo=()=>{
    return {type:GET_TODO}
}
export const Delete_Todo=(id)=>{
    return {type:DELETE_TODO,payload:id}
}