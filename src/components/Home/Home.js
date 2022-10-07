import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import Tshirts from "../Tshirts/Tshirts";
import "./Home.css";

const Home = () => {
  const shirts = useLoaderData();
  const [cart, setCart] = useState([]);
  const handleAddToCart = (AddedShirt) => {
    const exists = cart.find((shirt) => shirt._id === AddedShirt._id);
    if (exists) {
      alert("Alrady Exist...Chose Another");
    } else {
      const newCart = [...cart, AddedShirt];
      setCart(newCart);
    }
  };
  const handleRemoveShirt = (RemoveShirt) => {
    const remainingShirt = cart.filter(
      (shirt) => shirt._id !== RemoveShirt._id
    );
    setCart(remainingShirt);
  };
  return (
    <div className="home-container">
      <div className="shirts-container">
        {shirts.map((shirt) => (
          <Tshirts
            key={shirt._id}
            shirt={shirt}
            handleAddToCart={handleAddToCart}
          ></Tshirts>
        ))}
      </div>
      <Cart cart={cart} handleRemoveShirt={handleRemoveShirt}></Cart>
    </div>
  );
};

export default Home;
