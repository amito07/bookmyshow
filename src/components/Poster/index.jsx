import React from "react";

const PosterComponent = ({posters}) => {
  return (
    <div
      className="p-4 bg-violet-50 dark:bg-violet-800 flex flex-row flex-nowrap overflow-x-auto"
      id="now_showing"
      role="tabpanel"
      aria-labelledby="profile-tab"
    >
      {posters.map((x) => (
        <img
          src={x.image}
          alt={x.name}
          className="w-52 m-1 rounded-md transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 cursor-pointer "
        />
      ))}
    </div>
  );
};

export default PosterComponent;
