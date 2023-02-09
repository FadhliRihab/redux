import { DELETE_TODO, GET_TODO } from "../ActionTypes/TodoAction"

const initialState = {
       TODOS: [
        {
          id: Math.random(),
          text:"learn redux",
          isComplet:false,
        },
        {
            id:Math.random(),
            text:"learn react",
            isComplet:true,
        },
        {
            id:Math.random(),
            text:"learn api",
            isComplet:false,
        }
       ]
}

const ToDo= (state = initialState, { type, payload }) => {
  switch (type) {

  case GET_TODO:
    return { ...state}
  
  case DELETE_TODO:
    return{...state,TODOS:state.TODOS.filter((el)=>el.id!==payload)}
  default:
    return state
  }
}
export default ToDo
