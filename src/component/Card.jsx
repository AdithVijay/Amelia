import React from "react";
import { NavLink } from "react-router-dom";

const Card = (prop) => {
  return (
    <div>
      <div>
        <img
          className=" md:h-80  h-24   "
          src={prop.img}
          alt=""
        />
        <h1>{prop.description}</h1>
        <NavLink to="/services" className="  text-primary">
          Explore Services →
        </NavLink>
      </div>
    </div>
  );
};

export default Card;
