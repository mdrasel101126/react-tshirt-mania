import React from "react";
import "./Tshirts.css";

const Tshirts = ({ shirt, handleAddToCart }) => {
  return (
    <div className="shirt-container">
      <img src={shirt.picture} alt="" />
      <h4>{shirt.name}</h4>
      <p>Price: {shirt.price}</p>
      <button onClick={() => handleAddToCart(shirt)}>Add to Cart</button>
    </div>
  );
};

export default Tshirts;
