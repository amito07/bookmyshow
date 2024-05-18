import { useState } from "react";
import { HomeIcon } from "../../utils/icons";
// import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";
import {userDetails} from '../../react_query_function'
const Header2 = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const {data} = userDetails()
  return (
    <header className="absolute top-0 left-0 w-full flex justify-between items-center pt-8 pb-8 pr-24 pl-24 z-10">
      <a href="#" className="text-2xl text-white tracking-normal font-bold">
        BookMyShow
      </a>
      <ul className="flex space-x-4">
        <li className="text-white font-semibold tracking-normal cursor-pointer transition-all">
          <a href="#" className="text-white hover:text-red-500">
            <HomeIcon />
          </a>
        </li>
        <li className="text-white font-semibold tracking-normal cursor-pointer transition-all">
          <a href="#" className="text-white hover:text-red-500">
            Adults
          </a>
        </li>
        <li className="text-white font-semibold tracking-normal cursor-pointer transition-all">
          <a href="#" className="text-white hover:text-red-500">
            Kids
          </a>
        </li>
        <li className="text-white font-semibold tracking-normal cursor-pointer transition-all">
          <a href="#" className="text-white hover:text-red-500">
            Up Coming
          </a>
        </li>
        <li className="text-white font-semibold tracking-normal cursor-pointer transition-all">
          <a href="#" className="text-white hover:text-red-500">
            Trending
          </a>
        </li>
      </ul>
      <div className="relative w-72 h-10 grid grid-cols-6 place-items-end">
        {localStorage.getItem("token") ? (
          <div className="col-end-7 col-span-2">
            <img
              className="w-10 h-10 rounded-full cursor-pointer"
              src="/src/assets/profile.jpg"
              alt=""
              onClick={() => setDropdownVisible(!dropdownVisible)}
            />
            <span class="top-0 left-18 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
            {dropdownVisible && (
              <div className="absolute top-full right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                {/* Dropdown content goes here */}
                <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
                  <div>{data?.data?.username}</div>
                  <div class="font-medium truncate">{data?.data?.email}</div>
                </div>
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownInformationButton"
                >
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                </ul>
                <div class="py-2">
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            )}
          </div>
        ) : (
          <>
            <div className="col-span-2">
              <button className="w-full h-full text-white hover:bg-red-600 px-4 rounded-2xl border-2 hover:border-red-600 transition-all duration-200">
                Sign Up
              </button>
            </div>
            <div className="col-span-2">
              <button className="w-full h-full text-white hover:bg-red-600 px-4 rounded-2xl border-2 hover:border-red-600 transition-all duration-200">
                Sign In
              </button>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header2;
