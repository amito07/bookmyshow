import { HomeIcon } from "../../utils/icons";
// import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";
const Header2 = () => {
  return (
    <header className="absolute top-0 left-0 w-full flex justify-between items-center pt-8 pb-8 pr-24 pl-24 z-10">
      <a href="#" className="text-2xl text-white tracking-normal font-bold">BookMyShow</a>
      <ul className="flex space-x-4">
        <li className="text-white font-semibold tracking-normal cursor-pointer transition-all"><a href="#" className="text-white hover:text-red-500"><HomeIcon/></a></li>
        <li className="text-white font-semibold tracking-normal cursor-pointer transition-all"><a href="#" className="text-white hover:text-red-500">Adults</a></li>
        <li className="text-white font-semibold tracking-normal cursor-pointer transition-all"><a href="#" className="text-white hover:text-red-500">Kids</a></li>
        <li className="text-white font-semibold tracking-normal cursor-pointer transition-all"><a href="#" className="text-white hover:text-red-500">Up Coming</a></li>
        <li className="text-white font-semibold tracking-normal cursor-pointer transition-all"><a href="#" className="text-white hover:text-red-500">Trending</a></li>
      </ul>
      <div className="relative w-72 h-10 grid grid-cols-6 place-items-end">
        <div className="col-span-2">
        <button className="w-full h-full text-white hover:bg-red-600 px-4 rounded-2xl border-2 hover:border-red-600 transition-all duration-200">Sign Up</button>
        </div>
        <div className="col-span-2">
        <button className="w-full h-full text-white hover:bg-red-600 px-4 rounded-2xl border-2 hover:border-red-600 transition-all duration-200">Sign In</button>
        </div>
      </div>
    </header>
  )
}

export default Header2;