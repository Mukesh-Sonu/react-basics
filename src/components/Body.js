import RestaurantCard from './RestaurantCard';
import restaurants from '../utils/mockData';
import { useState } from 'react';

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurants)
  return (
    <div className="body">
      <div className='body-container'>
      <div className='filter-container'>
        <button className="filter-btn" onClick={
          () => {
            const topRatedList = listOfRestaurants.filter(restaurant => restaurant.info.avgRating > 4)
            setListOfRestaurants(topRatedList)
          }
        }>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard resData={restaurant.info} key={restaurant.info.id} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default Body;
