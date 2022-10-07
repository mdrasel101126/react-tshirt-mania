import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveShirt }) => {
  return (
    <div>
      <h3 className={`bold ${cart.length === 2 ? "blue" : "undefined"}`}>
        Cart Summary
      </h3>
      <h4>Total Product: {cart.length}</h4>
      {cart.map((shirt) => (
        <p>
          {shirt.name}{" "}
          <button onClick={() => handleRemoveShirt(shirt)}>X</button>
        </p>
      ))}
      {cart.length >= 3 && <p>Will be Poor</p>}
    </div>
  );
};

export default Cart;
