import { useState } from "react"
import { orderAtom,totalAmountAtom } from "../store/store"
import { useAtom } from "jotai"

const Products = () => {
    const [orders, setOrders] = useAtom(orderAtom)
    const [totalAmount] = useAtom(totalAmountAtom)
    const [products, setProducts] = useState(
        [
            {
                id:1,
                name:"iphone",
                price:50000
            },
            {
                id:2,
                name:"samsung",
                price:40000
            },
            {
                id:3,
                name:"vivo",
                price:45000
            }
        ]
    )

    const createOrder = (product) => {
        const order = {
            productName:product.name,
            amount:product.price,
            user:"palash"
        }
        setOrders((prev)=>[...prev,order])
    }

  return (
    <div>
        <div className="grid grid-cols-3 m-4 gap-2">
        {
            products.map((product,index)=>(
                <div className="border p-2 rounded">
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                    <button
                    onClick={()=>createOrder(product)}
                    className="border px-2 rounded bg-green-400 cursor-pointer">Order</button>
                </div>
            ))
        }
        </div>

        <h2>all orders</h2>
        <h4>Total order amount is {totalAmount}</h4>
        {
            orders.length && 
            <table className="border border-collapse w-3/4 mx-auto">
            <tr className="border">
                <th className="border">Product_name</th>
                <th className="border">amount</th>
                <th className="border">user_name</th>
            </tr>
            {
                orders.map((order,index)=>(
                   <tr className="border hover:bg-gray-300" key={index}>
                    <td className="border p-1">{order.productName}</td>
                    <td className="border p-1">{order.amount}</td>
                    <td className="border p-1">{order.user}</td>
                   </tr> 
                ))
            }
        </table>
        }
    </div>
  )
}
export default Products