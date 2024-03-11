import React from "react";
import { NavLink } from "react-router-dom";

const Card = (prop) => {
  return (
    <div className=" lg:text-2xl  ">
      <div>
        <img
          className=" md:h-80 xl:h-96   max-width: 100%;  h-48  object-cover  min-w-[100%]"
          src={prop.img}
          alt=""
        />
        <h1  >{prop.description}</h1>
        <NavLink to="/services" className="  text-primary">
          Explore Services →
        </NavLink>
      </div>
    </div>
  );
};

export default Card;
