import React from "react";

const Card = ({ dishName = "Burger", price = "99" }) => {
  return (
    <div className="dish-card">
      <div className="dish-image">
        <img
          src="https://images.pexels.com/photos/13998878/pexels-photo-13998878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div className="dish-description">
        <h2>{dishName}</h2>
        <h3>Price - INR {price}</h3>
      </div>
    </div>
  );
};

const DishesCard = () => {
  return (
    <div className="cards">
      <Card dishName="Buger" price="99" />
      <Card dishName="Buger" price="99" />
      <Card dishName="Buger" price="99" />
    </div>
  );
};

export default DishesCard;
