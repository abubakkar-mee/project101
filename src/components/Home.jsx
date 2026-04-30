import { useAtom } from "jotai"
import { countAtom } from "../store/store"
import { Link } from "react-router-dom"

const Home = () => {
    const [count, setCount] = useAtom(countAtom)

    const increment = () => {
        setCount((prev)=> prev+1)
    }
    const decrement = () => {
        setCount((prev)=> prev - 1)
    }
  return (
    <div>
        <Link to="/store">Store</Link>
        <Link to="/cart">Cart</Link>
        <h2>count is {count}</h2>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
    </div>
  )
}
export default Home
