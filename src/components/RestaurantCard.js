import RatingSvg from './Rating';
import { BASE_IMG_URL } from '../utils/constants';

const RestaurantCard = ({ resData }) => {
  const {
    name,
    avgRating,
    sla,
    cuisines,
    cloudinaryImageId,
    aggregatedDiscountInfoV3,
  } = resData;

  return (
    <div className="res-card">
      <div className="res-card-img-contaier">
        <img
          src={`${BASE_IMG_URL}/${cloudinaryImageId}`}
        />
        <div className="offer-container">
          <p>{aggregatedDiscountInfoV3?.header}</p>
          <p>{aggregatedDiscountInfoV3?.subHeader}</p>
        </div>
      </div>

      <div className="res-card-content">
        <h3>{name}</h3>
        <div className="rating">
          <RatingSvg />
          <p>{avgRating}</p>
          <p>
            {'  •  '} {sla?.slaString}
          </p>
        </div>
        <p className="cuisine-desc">{cuisines.join(', ')}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
