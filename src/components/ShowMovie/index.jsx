import React, { useState } from "react";
import { coming_posters, posters, tabNames } from "../../utils/function";
import Tab from "../Tab";
import PosterComponent from "../Poster";
import BuyTickets from "../BuyTickets";

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
          {tabNames.map((x, i) => (
            <li className="me-2" role="presentation" key={i}>
              <Tab
                tab_name={x.name}
                tab_tag={x.tag}
                setActiveTab={setActiveTab}
              />
            </li>
          ))}
        </ul>
      </div>
      <div id="default-tab-content">
        {activeTab === "now_showing" && <PosterComponent posters={posters} />}
        {activeTab === "coming_soon" && (
          <PosterComponent posters={coming_posters} />
        )}
        {activeTab === "buy_tickets" && <BuyTickets />}
      </div>
    </>
  );
};

export default ShowMovies;
