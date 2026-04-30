import { useState } from "react"

const Tab = () => {
    const [tab, setTab] = useState("tab1")
  return (
    <div className="mx-auto bg-gray-300 w-1/2">

        <div className="flex">
            <button className={`border p-2 hover:bg-green-400 ${tab === "tab1" ? "bg-green-400":null}`} onClick={()=>setTab("tab1")}>tab1</button>
            <button className={`border p-2 hover:bg-green-400 ${tab === "tab2" ? "bg-green-400":null}`} onClick={()=>setTab("tab2")}>tab2</button>
            <button onClick={()=>setTab("tab3")} className={`border p-2 hover:bg-green-400 ${tab === "tab3" ? "bg-green-400":null}`}>tab3</button>
        </div>
        
        <div>
            {
                tab === "tab1" && 
                <div>
                    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime nobis debitis dolor id cum eveniet placeat odio quis illo velit?</h1>
                </div>
            }
            {
                tab === "tab2" && 
                <div>
                    <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates exercitationem nobis ut voluptate consequatur, omnis molestias unde assumenda? Enim aspernatur consequuntur tempore. In possimus, molestias officia cupiditate vel, tenetur earum sunt voluptas ipsam vero soluta numquam. Repudiandae impedit laborum illo hic corrupti, ipsa adipisci quam tenetur, ullam, quos reiciendis mollitia.</h3>
                </div>
            }
            {
                tab === "tab3" && 
                <div>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis tenetur vel, quasi, placeat eveniet nihil ipsa doloribus recusandae libero veniam beatae ad voluptatibus error odio, voluptates modi. Rem cum expedita nam aspernatur, aut doloremque nulla commodi quam voluptatibus, possimus deleniti.</h3>
                </div>
            }
        </div>
    </div>
  )
}
export default Tab