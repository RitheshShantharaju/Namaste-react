import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

import resList from "./utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //   if (listOfRestaurant.length === 0) {
  //     return <Shimmer />;
  //   }
  return (
    <div className="body">
      <div className="filter-btn">
        <input
          className="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            const filteredRestaurant = listOfRestaurant.filter((res) =>
              res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
            );
            setfilteredRestaurant(filteredRestaurant);
          }}
        >
          Search
        </button>
        <button
          className="filter-restaurant"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res?.info?.avgRating > 4.3
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant?.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
