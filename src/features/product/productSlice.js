import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id:1,
        name:"Black seed honey 1kg",
        category:"Honey",
        price:1440,
        img:"https://backoffice.ghorerbazar.com/productImages/fAewT1767418525.jpg"
    },
    {
        id:2,
        name:"Lichu flower honey 1kg",
        category:"Honey",
        price:1000,
        img:"https://backoffice.ghorerbazar.com/productImages/A14zf1767418585.jpg"
    },
    {
        id:3,
        name:"Sundarban honey 1kg",
        category:"Honey",
        price:2200,
        img:"https://backoffice.ghorerbazar.com/productImages/CvT2N1767414529.jpg"
    },
    {
        id:4,
        name:"African organic wild honey 1kg",
        category:"Honey",
        price:2200,
        img:"https://backoffice.ghorerbazar.com/productImages/6ctmE1775107173.jpg"
    },
    {
        id:5,
        name:"Black seed honey 1kg",
        category:"Honey",
        price:1440,
        img:"https://backoffice.ghorerbazar.com/productImages/fAewT1767418525.jpg"
    },
    {
        id:6,
        name:"Ajwa premium dates 1kg (jumbo)",
        category:"Dates",
        price:2250,
        img:"https://backoffice.ghorerbazar.com/productImages/IyJYh1776762485.jpg"
    },
    {
        id:7,
        name:"Egyptian Medjool Large 1kg",
        category:"Dates",
        price:1980,
        img:"https://backoffice.ghorerbazar.com/productImages/YOL6J1767074338.jpg"
    },
    {
        id:8,
        name:"Gura Masala Combo (Mini Pack)",
        category:"Masala",
        price:950,
        img:"https://backoffice.ghorerbazar.com/productImages/BVB2a1767100552.jpg"
    },
    {
        id:9,
        name:"Laal Atta 2kg",
        category:"Atta",
        price:200,
        img:"https://backoffice.ghorerbazar.com/productImages/tFQxp1767439453.jpg"
    },
    {
        id:10,
        name:"Deshi Mastard oil 2kg",
        category:"Oil",
        price:620,
        img:"https://backoffice.ghorerbazar.com/productImages/xZ5261767248563.jpg"
    },
    {
        id:11,
        name:"Gawa Ghee 500gm",
        category:"Ghee",
        price:850,
        img:"https://backoffice.ghorerbazar.com/productImages/l4UhS1767097338.jpg"
    },
    {
        id:12,  
        name:"USDA Organic Beetroot powder 250gm",
        category:"powder",
        price:1000,
        img:"https://backoffice.ghorerbazar.com/productImages/DhzUM1767604901.jpg"
    },
]
const productSlice = createSlice({
    name:"product",
    initialState,
})

export default productSlice.reducer;