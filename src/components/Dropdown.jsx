const Dropdown = () => {
  return (
      <div>
        <div className="bg-[#041F1E] h-12 flex justify-center items-center relative">
            <nav>
                <ul className="flex gap-6">
                    <li className="group">
                        <a href="" className=" py-[14px] hover:text-orange-400">Oil & Ghee</a>
                    </li>
                    <li className="group">
                        <a href="" className=" py-[14px] hover:text-orange-400">Honey</a>
                        <ul className="hidden group-hover:block absolute top-full px-0 py-2 bg-gray-50 w-60">
                            <li className="px-8 py-2 hover:bg-orange-400">Sundarban Honey</li>
                            <li className="px-8 py-2 hover:bg-orange-400">Black Seed Honey</li>
                            <li className="px-8 py-2 hover:bg-orange-400">Lichu Flower Honey</li>
                            <li className="px-8 py-2 hover:bg-orange-400">Sidr Honey</li>
                            <li className="px-8 py-2 hover:bg-orange-400">Honeycomb</li>
                        </ul>
                    </li>
                    <li className="group">
                        <a href="" className=" py-[14px] hover:text-orange-400">Dates</a>
                        <ul className="hidden group-hover:block absolute top-full px-0 py-2 bg-gray-50 w-60">
                            <li className="px-8 py-2 hover:bg-orange-400">Safawi/Kalmi</li>
                            <li className="px-8 py-2 hover:bg-orange-400">Medjool</li>
                            <li className="px-8 py-2 hover:bg-orange-400">Sukkari</li>
                            <li className="px-8 py-2 hover:bg-orange-400">Ajwa</li>
                            <li className="px-8 py-2 hover:bg-orange-400">Mabroom</li>
                        </ul>
                    </li>
                    <li className="group">
                        <a href="" className=" py-[14px] hover:text-orange-400">Spices</a>
                        <ul className="hidden group-hover:block absolute top-full px-0 py-2 bg-gray-50 w-60">
                            <li className="px-8 py-2 hover:bg-orange-400">Whole Spices</li>
                            <li className="px-8 py-2 hover:bg-orange-400">Basic Spices</li>
                            <li className="px-8 py-2 hover:bg-orange-400">Mixed Spices</li>
                        </ul>
                    </li>
                    <li className="group">
                        <a href="" className=" py-[14px] hover:text-orange-400">Nuts & Seeds</a>
                        <ul className="hidden group-hover:block absolute top-full px-0 py-2 bg-gray-50 w-60">
                            <li className="px-8 py-2 hover:bg-orange-400">Nuts</li>
                            <li className="px-8 py-2 hover:bg-orange-400">Seeds</li>
                        </ul>
                    </li>
                    <li className="group">
                        <a href="" className=" py-[14px] hover:text-orange-400">Beverage</a>
                        <ul className="hidden group-hover:block absolute top-full px-0 py-2 bg-gray-50 w-60">
                            <li className="px-8 py-2 hover:bg-orange-400">Tea</li>
                            <li className="px-8 py-2 hover:bg-orange-400">Coffee</li>
                        </ul>
                    </li>
                     <li className="group">
                        <a href="" className=" py-[14px] hover:text-orange-400">Rice</a>
                    </li>
                     <li className="group">
                        <a href="" className=" py-[14px] hover:text-orange-400">Flours & Lentils</a>
                        <ul className="hidden group-hover:block absolute top-full px-0 py-2 bg-gray-50 w-60">
                            <li className="px-8 py-2 hover:bg-orange-400">Flours</li>
                            <li className="px-8 py-2 hover:bg-orange-400">Lentils</li>
                        </ul>
                    </li>
                     <li className="group">
                        <a href="" className=" py-[14px] hover:text-orange-400">Certified</a>
                    </li>
                     <li className="group">
                        <a href="" className=" py-[14px] hover:text-orange-400">Pickle</a>
                    </li>
                </ul>
            </nav>
        </div>


    <div className="flex gap-8 overflow-x-scroll w-[60%] mx-auto bg-gray-200 no-scrollbar p-8" >
        <div className="w-[300px] flex-shrink-0 h-50 bg-amber-400">
        </div>
        <div className="w-[300px] flex-shrink-0 h-50 bg-amber-400">
        </div>
        <div className="w-[300px] flex-shrink-0 h-50 bg-amber-400">
        </div>
        <div className="w-[300px] flex-shrink-0 h-50 bg-amber-400">
        </div>
        <div className="w-[300px] flex-shrink-0 h-50 bg-amber-400">
        </div>
        <div className="w-[300px] flex-shrink-0 h-50 bg-amber-400">
        </div>
        <div className="w-[300px] flex-shrink-0 h-50 bg-amber-400">
        </div>
        <div className="w-[300px] flex-shrink-0 h-50 bg-amber-400">
        </div>
        
    </div>

    <div className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory w-[60%] mx-auto bg-gray-200 no-scrollbar p-8">
  
  <div className="w-[300px] flex-shrink-0 h-[200px] bg-amber-400 snap-start"></div>
  <div className="w-[300px] flex-shrink-0 h-[200px] bg-amber-400 snap-start"></div>
  <div className="w-[300px] flex-shrink-0 h-[200px] bg-amber-400 snap-start"></div>
  <div className="w-[300px] flex-shrink-0 h-[200px] bg-amber-400 snap-start"></div>
  <div className="w-[300px] flex-shrink-0 h-[200px] bg-amber-400 snap-start"></div>
  <div className="w-[300px] flex-shrink-0 h-[200px] bg-amber-400 snap-start"></div>

</div>

    </div>
  )
}
export default Dropdown