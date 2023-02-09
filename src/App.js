
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Delete_Todo } from './redux/Action/todoAction';

function App() {
  const dispatch=useDispatch();
  const TODOS=useSelector((state)=>state.TODOS);
  return (
    <div className="App">
      {
        TODOS.map((el)=> (
          <div>
          <h5>{el.text}</h5>
          <button onClick={()=>dispatch(Delete_Todo(el.id))}>DELETE</button>
          </div>
        )
        
        )
      }
    </div>
  );
}

export default App;
