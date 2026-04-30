import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { removeItem } from "../features/cart/cartSlice"
import { useDispatch } from "react-redux"
const Cart = () => {
    const cart = useSelector((state) => state.cart)
    console.log(cart)
    const dispatch = useDispatch()
    let totalPrice = 0;
    cart.forEach((item) => {
        const itemPrice = item.quantity * item.price;
        totalPrice += itemPrice;
    })
  return (
    <div className="w-1/2 mx-auto bg-gray-200 p-8">
        {
           cart.map((cartItem,id) => (
                <div key={id} className="flex gap-2 my-2 items-center">
                    <img src={cartItem.img} className="w-[30px] h-[30px] object-cover" alt="" />
                    <h2>{cartItem.name}---{cartItem.quantity}*{cartItem.price}={cartItem.quantity*cartItem.price}</h2>
                    <button onClick={()=>dispatch(removeItem({id:cartItem.id}))}>❌</button>
                </div>
            )) 
        }
        <h2 className="font-semibold">Total Price {totalPrice}</h2>
        <button className="border px-4 py-2 my-2">Checkout</button>
        <Link className="block" to="/store">Store</Link>
    </div>
  )
}
export default Cart