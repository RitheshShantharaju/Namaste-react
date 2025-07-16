import { CDN_URL } from "./utils/constants";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
    resData?.info;
  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h3>{cuisines.join(",")}</h3>
      <h3>{costForTwo}</h3>
      <h3>{avgRating} Stars</h3>
    </div>
  );
};

export default RestaurantCard;
