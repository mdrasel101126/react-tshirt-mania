import React from "react";
import Myself from "./Myself";

const Father = ({ house }) => {
  return (
    <div className="box">
      <h3>Father</h3>
      <p>House : {house}</p>
      <div className="flex">
        <Myself></Myself>
      </div>
    </div>
  );
};

export default Father;
