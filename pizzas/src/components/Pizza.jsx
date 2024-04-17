import React from 'react'
import '../styles/Pizza.css'
import placeholder from '../assets/pizzaplaceholder.jpg'

function Pizza({pizza}) {
  return (
    <div className='pizza'>
      <img src={placeholder} alt='pizza'/>
      <div className='content'>
        <h2>{pizza.name}</h2>
        <h4>{pizza.ingredients}</h4>
        <h5>Available in:</h5>
        <ul>
          {pizza.restaurants.map((restaurant) => <li>{restaurant.restaurant.name} @ ${restaurant.price}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default Pizza