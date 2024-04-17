import React from 'react'
import { useState, useEffect } from "react";
import Pizza from './Pizza';
import '../styles/Pizzas.css'


export default function Pizzas() {
  const [pizzas, setPizzas]=useState([])

  useEffect(()=>{
      fetch('/api/pizzas').then(r => r.json())
      .then(pizzas => {
        setPizzas(pizzas)
        console.log(pizzas);
      })
  }, [])

  const pizza_cards = pizzas.map((pizza) => (
    <Pizza key={pizza.id} pizza={pizza}/>
  ))

  return (
    <div className='pizzas'>
      <h1>Our pizzas</h1>
      <div className='pizza-grid'>
        {pizza_cards}
      </div>
    </div>
  )
}
