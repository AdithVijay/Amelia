import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = (prop) => {
  return (
    <div>
       
        <div>
            <img className=' w-60' src={prop.img} alt="" />
            <h1>{prop.description}</h1>
            <NavLink to="/services" className=' ring'>
              Explore Services ----
            </NavLink>
        </div>
    </div>
  )
}

export default Card
