import { useDispatch, useSelector } from "react-redux"
import { incrementCountAction } from "./redux/action"

function App() {

  const count = useSelector( (state) => state.count)
  const dispatch = useDispatch()
 

  return (
    <div >
      <h1>Count : {count}</h1>
      <button onClick={ () => dispatch(incrementCountAction(1))}>Increment</button>
      <button onClick={ () => dispatch(incrementCountAction(-1))}>Decrement</button>  
    </div>
  )
}

export default App
