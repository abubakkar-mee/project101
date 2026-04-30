import { useState } from "react"

const Modal = () => {
    const [show, setShow] = useState(false)
  return (
    <div className="bg-gray-300 h-screen">
        <button className="border" onClick={()=>setShow(!show)}>show</button>
        {/* <div className={`h-screen w-full bg-gray-300 absolute top-0 left-0 flex justify-center items-center opacity-[.5]`}>
        </div> */}
        <div className={`bg-white w-[300px] p-6 absolute top-16 left-16 shadow-amber-300 ease-out transition-all duration-100 hover:shadow-2xl ${show ? "scale-100":"scale-0"}`}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae commodi corporis dolorem explicabo voluptatibus inventore, accusamus voluptates odio nihil saepe illum consequuntur ipsa amet quam expedita ducimus incidunt rem quisquam.</p>
            </div>
    </div>
  )
}
export default Modal