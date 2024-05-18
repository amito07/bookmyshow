import { FilmIcon } from "@heroicons/react/16/solid";
import { BuildingLibraryIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import MovieList from "../../components/Admin/MovieList";
import TheaterList from "../../components/Admin/TheaterList";

const AdminLandPage = () => {
  const [activeMenu, setActiveMenu] = useState("movies");
  return (
    <div className="flex h-screen bg-gray-200">
      <div className="w-full md:max-w-sm h-full flex flex-col">
        <div className="relative h-full">
          <img
            src="/src/assets/background.PNG"
            alt="background"
            className="object-cover w-full h-full"
          />
          <div className="absolute top-0 left-0 inset-0 bg-black bg-opacity-70">
            <div className="border-b p-3">
              <span className="font-bold text-2xl text-white uppercase">
                Admin
              </span>
            </div>
            <div className="overflow-y-auto">
              <ul>
                <li
                  className="border-b p-3 cursor-pointer text-white text-xl flex flex-row items-center"
                  onClick={() => setActiveMenu("movies")}
                >
                  <FilmIcon className="w-5 h-5" />
                  Movies
                </li>
                <li
                  className="border-b p-3 cursor-pointer text-white text-xl flex flex-row items-center"
                  onClick={() => setActiveMenu("theaters")}
                >
                  <BuildingLibraryIcon className="w-5 h-5" />
                  Theaters
                </li>
                <li className="border-b p-3">
                  <button className="text-white bg-red-600 p-2 rounded-lg">
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-grow bg-gray-200 p-10">
      {activeMenu === 'movies' && <MovieList />}
        {activeMenu === 'theaters' && <TheaterList />}
      </div>
    </div>
  );
};

export default AdminLandPage;
