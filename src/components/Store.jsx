import { useState } from "react"
import { applyMiddleware } from "@reduxjs/toolkit"
import { useSelector } from "react-redux"
import { addToCart } from "../features/cart/cartSlice"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import {ToastContainer, toast} from 'react-toastify';

const Store = () => {
    const products = useSelector((state) => state.product)
    const cart = useSelector((state) => state.cart);
    const [filteredProducts, setFilteredProducts] = useState(products)
    const categories = [...new Set(products.map((product) => product.category))]
    const [activeCategory,setActiveCategory] = useState("all")
    const dispatch = useDispatch()
    const handleCategory = (category) => {
        setActiveCategory(category)
        category === "all" ? setFilteredProducts(products) : setFilteredProducts(products.filter((product) => product.category === category))
    
    }
    const handleAddToCart = (product) => {
        dispatch(addToCart({...product,quantity:1}))
        toast(`Added ${product.name} on cart`)
    }
  return (
    <>
    <ToastContainer autoClose={500}/>
    <div className="mx-auto w-3/4">
       <Link to="/cart">Cart</Link>
        <h2>Categories</h2>
        <button className={`border mx-1 px-2 my-1 hover:bg-orange-400 ${activeCategory ==="all"? "bg-orange-400":null}`} onClick={()=>handleCategory("all")}>All</button>
        {
            categories.map((category,index)=>(
                <button className={`border mx-1 px-2 my-1 hover:bg-orange-400 ${activeCategory === category ? "bg-orange-400":null}`} onClick={()=>handleCategory(category)} key={index}>{category}</button>
            ))
        }
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 w-3/4 mx-auto gap-4 my-8">
        {
            filteredProducts.map((product,index) => (
                <div key={index} className=" px-2 relative pb-12 bg-white rounded">
                    <img className="w-40 mx-auto" src={product.img} alt="" />
                    <p className="font-semibold">{product.name}</p>
                    <p className="font-semibold text-orange-400">{product.price}</p>
                    <button className="mb-2 px-2 mt-2 rounded 
                    hover:bg-orange-400
                    border
                    border-orange-400
                    active:scale-95
                    hover:text-white cursor-pointer absolute bottom-[10px]" onClick={()=>handleAddToCart(product)}>Add to Cart</button>
                </div>
            ))
        }
    </div>
    </>
  )
}
export default Store