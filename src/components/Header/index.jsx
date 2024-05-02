import React, { useState } from "react";

const Header = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  return (
    <header className="shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px]">
      <div className="flex flex-wrap items-center justify-between gap-5 relative">
        <a href="#">
          <img src="/src/assets/logo.png" alt="logo" className="w-16" />
        </a>
        {localStorage.getItem("token") ? (
          <div className="flex lg:order-1 max-sm:ml-auto">
            <button
              id="dropdownUserAvatarButton"
              data-dropdown-toggle="dropdownAvatar"
              onClick={() => setDropdownVisible(!isDropdownVisible)}
            >
              <div class="relative">
                <img
                  class="w-10 h-10 rounded-full"
                  src="/src/assets/profile.jpg"
                  alt=""
                />
                <span class="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
              </div>
            </button>
            {isDropdownVisible && (
              <div
                id="dropdownAvatar"
                className="absolute top-full right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-white dark:divide-gray-600"
              >
                <div className="px-4 py-2">
                  <p className="text-sm font-bold">John Doe</p>
                  <p className="text-xs text-gray-500">johndoe@example.com</p>
                </div>
                <div className="px-4 py-2">
                  <a
                    href="#"
                    className="block text-sm text-black font-semibold"
                  >
                    Profile
                  </a>
                  <a href="#" className="block text-sm text-black">
                    Settings
                  </a>
                  <a href="#" className="block text-sm text-black">
                    Logout
                  </a>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex lg:order-1 max-sm:ml-auto">
            <button className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]">
              Login
            </button>
            <button className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff] ml-3">
              Sign up
            </button>
            <button id="toggle" className="lg:hidden ml-7">
              <svg
                className="w-7 h-7"
                fill="#000"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        )}
        {localStorage.getItem("token") ? (
          <></>
        ) : (
          <ul
            id="collapseMenu"
            className="lg:!flex lg:space-x-5 max-lg:space-y-2 max-lg:hidden max-lg:py-4 max-lg:w-full"
          >
            <li className="max-lg:border-b max-lg:bg-[#007bff] max-lg:py-2 px-3 max-lg:rounded">
              <a
                href="#"
                className="lg:hover:text-[#007bff] text-[#007bff] max-lg:text-white block font-semibold text-[15px]"
              >
                Home
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
              <a
                href="#"
                className="lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
              >
                Team
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
              <a
                href="#"
                className="lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
              >
                Feature
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
              <a
                href="#"
                className="lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
              >
                Blog
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
              <a
                href="#"
                className="lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
              >
                About
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
              <a
                href="#"
                className="lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
              >
                Contact
              </a>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
