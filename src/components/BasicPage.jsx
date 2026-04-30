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
      <div className="flex gap-4">
        <Link className="border p-2" to="/store">Store</Link>
        <Link className="border p-2" to="/cart">Cart</Link>
      </div>
    </div>
  )
}
export default BasicPage
