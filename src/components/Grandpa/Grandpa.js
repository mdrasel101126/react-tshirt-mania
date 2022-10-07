import React, { createContext } from "react";
import Auncle from "./Auncle";
import Aunty from "./Aunty";
import Father from "./Father";
import "./Grandpa.css";

export const HouseContext = createContext("matir house");

const Grandpa = () => {
  const house = 5;
  return (
    <HouseContext.Provider value="gold house">
      <div className="box">
        <h3>Grandpa</h3>
        <p>House : {house}</p>
        <div className="flex">
          <Father></Father>
          <Aunty></Aunty>
          <Auncle></Auncle>
        </div>
      </div>
    </HouseContext.Provider>
  );
};

export default Grandpa;
