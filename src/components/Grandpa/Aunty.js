import React from "react";
import Cousin from "./Cousin";

const Aunty = () => {
  return (
    <div className="box">
      <h3>Aunty</h3>
      <p>House:</p>
      <div className="flex">
        <Cousin></Cousin>
      </div>
    </div>
  );
};

export default Aunty;
