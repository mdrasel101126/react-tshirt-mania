import React, { useContext } from "react";
import Cousin from "./Cousin";
import { HouseContext } from "./Grandpa";

const Auncle = () => {
  const house = useContext(HouseContext);
  return (
    <div className="box">
      <h3>Ancle</h3>
      <p>House: {house}</p>
      <div className="flex">
        <Cousin></Cousin>
        <Cousin></Cousin>
      </div>
    </div>
  );
};

export default Auncle;
