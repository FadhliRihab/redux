import ToDo from "./reducer/ToDo";
import { createStore } from "redux";

const store = createStore(
    ToDo, /* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  export default store