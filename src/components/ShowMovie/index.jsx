import React, { useState } from "react";
import { posters } from "../../utils/function";

const ShowMovies = () => {
  const [activeTab, setActiveTab] = useState("profile");

  console.log("activeTab", activeTab);

  return (
    <>
      <div className="mb-4">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="default-tab"
          data-tabs-toggle="#cc8fdfaault-tab-content"
          role="tablist"
        >
          <li className="me-2" role="presentation">
            <button
              className="inline-block p-4 border-b-2 rounded-t-lg text-gray-500 hover:text-violet-700 hover:border-violet-700 dark:hover:text-violet-700 transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-110"
              id="profile-tab"
              data-tabs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
              onClick={() => setActiveTab("profile")}
            >
              Now Showing
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className="inline-block p-4 border-b-2 rounded-t-lg text-gray-500  hover:text-violet-700 hover:border-violet-700 dark:hover:text-violet-700  transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-110"
              id="dashboard-tab"
              data-tabs-target="#dashboard"
              type="button"
              role="tab"
              aria-controls="dashboard"
              aria-selected="false"
              onClick={() => setActiveTab("dashboard")}
            >
              Coming Soon
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className="inline-block p-4 border-b-2 rounded-t-lg text-gray-500  hover:text-violet-700 hover:border-violet-700 dark:hover:text-violet-700 transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-110"
              id="settings-tab"
              data-tabs-target="#settings"
              type="button"
              role="tab"
              aria-controls="settings"
              aria-selected="false"
              onClick={() => setActiveTab("settings")}
            >
              Buy Tickets
            </button>
          </li>
          <li role="presentation">
            <button
              className="inline-block p-4 border-b-2 rounded-t-lg text-gray-500  hover:text-violet-700 hover:border-violet-700 dark:hover:text-violet-700 transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-110"
              id="contacts-tab"
              data-tabs-target="#contacts"
              type="button"
              role="tab"
              aria-controls="contacts"
              aria-selected="false"
              onClick={() => setActiveTab("contacts")}
            >
              Show Times
            </button>
          </li>
        </ul>
      </div>
      <div id="default-tab-content">
        {activeTab === "profile" && (
          <div
            className="p-4 bg-violet-50 dark:bg-violet-800 flex flex-row flex-nowrap overflow-x-auto"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            {posters.map((x) => (
              <img src={x.image} alt={x.name} className="w-52 m-1 rounded-md transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 cursor-pointer " />
            ))}
          </div>
        )}
        {activeTab === "dashboard" && (
          <div
            className="p-4 rounded-lg bg-violet-50 dark:bg-violet-800"
            id="dashboard"
            role="tabpanel"
            aria-labelledby="dashboard-tab"
          >
            <p className="text-sm text-violet-500 dark:text-violet-400">
              This is some placeholder content the{" "}
              <strong className="font-medium text-violet-800 dark:text-white">
                Dashboard tab's associated content
              </strong>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classNamees to control the
              content visibility and styling.
            </p>
          </div>
        )}
        {activeTab === "settings" && (
          <div
            className="p-4 rounded-lg bg-violet-50 dark:bg-violet-800"
            id="settings"
            role="tabpanel"
            aria-labelledby="settings-tab"
          >
            <p className="text-sm text-violet-500 dark:text-violet-400">
              This is some placeholder content the{" "}
              <strong className="font-medium text-violet-800 dark:text-white">
                Settings tab's associated content
              </strong>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classNamees to control the
              content visibility and styling.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default ShowMovies;
