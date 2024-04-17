import React from 'react'
import '../styles/Restaurant.css'
import placeholder from '../assets/restaurant.jpg'
import { Link } from 'react-router-dom'


export default function Restaurant({restaurant}) {
  return (
    <div className='restaurant'>
      <img src={placeholder} alt='restaurant'/>
      <div className='content'>
        <h2><Link to={`/restaurants/${restaurant.id}`}>{restaurant.name}</Link></h2>
        <h4>{restaurant.address}</h4>
        <h5>Our Pizzas</h5>
        <ul>
          {restaurant.pizzas.map((pizza) => <li>{pizza.pizza.name}</li>)}
        </ul>
      </div>
    </div>
  )
}
