import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(()=> {
        const fetchUsers = async () => {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users");
            setUsers(res.data);
        }
        fetchUsers()
    },[])

  return (
    <div className="grid grid-cols-2 gap-5 m-4">
        {
            users.map((user,index) => (
                <div key={index} className="border p-2 rounded hover:bg-gray-300">
                    <Link state={user} to={`/user/${user.id}`}>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                    </Link>
                </div>
            ))
        }
    </div>
  )
}
export default Users

