import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "../features/counter/counterSlice"
import { addTodo } from "../features/todo/todoSlice";
import { Link } from "react-router-dom";

const BasicPage = () => {

  const count = useSelector((state) => state.counter.value);
  const todos = useSelector((state) => state.todo)
  const dispatch = useDispatch();

  return (
    <div>
      <Link to="/store">Store</Link>
      <Link to="/cart">Cart</Link>
      <button onClick={()=>dispatch(increment())}>add</button>
      <h1>{count}</h1>
      <button onClick={()=> dispatch(decrement())}>minus</button>

      <section>
        <button onClick={()=> dispatch(addTodo(`todo no is ${Math.floor(Math.random() * 100)}`))}>Add Todo</button>
        {
          todos.map((todo,index) =>(
            <h2 key={index}>
              {todo}
            </h2>
          ))
        }
      </section>
    </div>
  )
}
export default BasicPage
