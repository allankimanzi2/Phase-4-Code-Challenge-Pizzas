import React from 'react'
import { useState, useEffect } from "react";
import Restaurant from './Restaurant';
import '../styles/Restaurants.css'

export default function Restaurants() {
  const [restaurants, setRestaurants]=useState([])

  useEffect(()=>{
      fetch('/api/restaurants').then(r => r.json())
      .then(restaurants => {
        console.log(restaurants)
        setRestaurants(restaurants)
      })
  }, [])

  
  const restaurant_cards = restaurants.map((restaurant) => (
    <Restaurant key={restaurant.id} restaurant={restaurant}/>
  )) 

  return (
    <div className='restaurants'>
      <h1>Our Restaurants</h1>
      <div className='restaurant-grid'>
        {restaurant_cards}
      </div>
    </div>
  )
}
