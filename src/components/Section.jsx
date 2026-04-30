import { useState } from "react"

const Section = () => {
  return (
    <div>
        <div className="grid grid-cols-2 w-[80%] m-auto gap-4 mt-8">
            <div className="flex bg-[#F1F1F1] items-center justify-between pl-8 pr-4 p-8 rounded gap-6">
                <div>
                    <p className="text-[#999999] mb-2">New Smart Watch</p>
                    <p className="text-2xl font-bold text-[#456173] mb-1">Get 20% OFF on your First Order</p>
                    <button className="border px-4 py-2 rounded-3xl bg-[#213440] text-white mt-2 hover:bg-transparent hover:text-black cursor-pointer">Shop New</button>
                </div>
                <div>
                    <img className="w-[200px] animate-drop" src="/src/assets/1.png" alt="" />
                </div>
            </div>
            <div className="flex bg-[#F1F1F1] items-center justify-between pl-8 pr-4 p-8 rounded-md gap-6">
                <div>
                    <p className="text-[#999999] mb-2">Get 10% OFF on First Order</p>
                    <p className="text-2xl font-bold text-[#456173] mb-1">Buy Smart and Luxury Watch Today!</p>
                    <button className="border px-4 py-2 rounded-3xl bg-[#213440] text-white mt-2 hover:bg-transparent hover:text-black cursor-pointer">Shop New</button>
                </div>
                <div>
                    <img className="w-[200px] animate-drop" src="/src/assets/2.png" alt="" />
                </div>
            </div>
        </div>

        <div className="mt-10 bg-[#FCFCFC] m-10">
            <h2 className="text-center text-[#456173] text-4xl font-semibold mb-1">Serenity Classic Smart Watch</h2>
            <p className="text-center text-[#999999]">Our luxury collection is not only about indulgence but also about making responsible choices.</p>

            <div className="grid grid-cols-[30%_40%_30%] mt-8">
                <div className="grid grid-cols-2 justify-center gap-4 p-4">
                    <div className="grid place-items-center hover:bg-gray-200 p-2 rounded">
                        <img src="src/assets/1.png" className="w-[50px]" alt="" />
                        <p className="text-sm">Watch Strap</p>
                        <p className="text-xs">Alligator leather</p>
                    </div>
                    <div className="grid place-items-center hover:bg-gray-200 p-2 rounded">
                        <img src="src/assets/2.png" className="w-[50px]" alt="" />
                        <p className="text-sm">Case Material</p>
                        <p className="text-xs">Gold-plated</p>
                    </div>
                    <div className="grid place-items-center hover:bg-gray-200 p-2 rounded">
                        <img src="src/assets/2.png" className="w-[50px]" alt="" />
                        <p className="text-sm">Case Diameter</p>
                        <p className="text-xs">Case Diameter</p>
                    </div>
                    <div className="grid place-items-center hover:bg-gray-200 p-2 rounded">
                        <img src="src/assets/1.png" className="w-[50px]" alt="" />
                        <p className="text-sm">Water Resistance</p>
                        <p className="text-xs">50 meters</p>
                    </div>
                </div>
                <div className=" flex justify-center">
                    <img src="src/assets/2.png" className="w-[250px] animate-pulse" alt="" />
                </div>
                <div className="flex justify-center">
                    <div >
                        <div className="bg-[#F4F4F4] flex justify-center px-8 py-6 rounded-lg w-[180px]" >
                            <img src="src/assets/watch2.png" alt="" className="w-[150px]" />
                        </div>
                        <div className="mt-2">
                            <p className="text-center">Elipse Crono</p>
                            <p className="text-center">$620.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Section