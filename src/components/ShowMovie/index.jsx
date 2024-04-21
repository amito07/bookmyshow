import React, { useState } from "react";
import { coming_posters, posters, tabNames } from "../../utils/function";
import Tab from "../Tab";
import PosterComponent from "../Poster";
import BuyTickets from "../BuyTickets";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ShowMovies = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const navigate = useNavigate()

  console.log("activeTab", activeTab);

  useEffect(() => {
    if (activeTab === "show_times") {
      console.log('Hiiiiiiiiiii')
      navigate('/showtime');
    }
  }, [activeTab]);

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
        {activeTab === "show_times" && <Link to="/showtime" />}
      </div>
    </>
  );
};

export default ShowMovies;
