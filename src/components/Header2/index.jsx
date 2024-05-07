import { HomeIcon } from "../../utils/icons";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";
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
      <div className="relative w-72 h-10">
        <input type="text" placeholder="Search" className="absolute left-0 top-0 w-full h-full text-white bg-transparent border-2 border-gray-400 outline-none rounded-lg backdrop-blur-sm" />
        <MagnifyingGlassCircleIcon className="w-6 h-6 absolute top-1/2 left-2 pr-10 text-white translate-y-1/2"/>
      </div>
    </header>
  )
}

export default Header2;