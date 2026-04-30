import { useAtom } from "jotai"
import { countAtom } from "../store/store"

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
        <h2>count is {count}</h2>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
    </div>
  )
}
export default Home
