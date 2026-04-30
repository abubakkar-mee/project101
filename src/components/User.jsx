import { useParams,useLocation } from "react-router-dom"

const User = () => {
    const {id} = useParams();
    const {state} = useLocation();
    const {name,email,phone} = state;
  return (
    <div>
        <h2>user id is {id}</h2>
        <p>{name}</p>
    </div>
  )
}
export default User