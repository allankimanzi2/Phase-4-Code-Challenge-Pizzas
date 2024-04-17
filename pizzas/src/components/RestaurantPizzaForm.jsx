import React from 'react'
import { useEffect, useState } from 'react'
import '../styles/RestaurantPizzaForm.css'

function RestaurantPizzaForm() {
  const [pizzas, setPizzas]=useState([])
  const [restaurants, setRestaurants]=useState([])
  const [restaurantId, setrestaurantId] = useState('')
  const [pizzaId, setpizzaId] = useState('')
  const [price, setPrice] = useState('')
  const [errors, setErrors]  = useState('')

  useEffect(()=>{
      fetch('/api/pizzas').then(r => r.json())
      .then(pizzas => {
        setPizzas(pizzas)
        console.log(pizzas);
      })
  }, [])

  useEffect(()=>{
      fetch('/api/restaurants').then(r => r.json())
      .then(restaurants => {
        console.log(restaurants)
        setRestaurants(restaurants)
      })
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    const formData = {
      pizza_id: pizzaId,
      restaurant_id: restaurantId,
      price: price
    }
    fetch('/api/restaurant_pizzas', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    }).then((r) =>{
      if (r.ok) {
        alert("The entry has been successfull")
        setpizzaId('')
        setrestaurantId('')
        setPrice('')
      } else {
        r.json().then(err => setErrors(err))
      }
    })
  }
  
  return (
    <form onSubmit={handleSubmit} className='form'>
      <div className='formfields'>
        <label htmlFor="pizza_id">pizza:</label>
        <select
          id="pizza_id"
          name="pizza_id"
          value={pizzaId}
          onChange={(e) => setpizzaId(e.target.value)}
          required
        >
          <option value="">Select a pizza</option>
          {pizzas.map((pizza) => (
            <option key={pizza.id} value={pizza.id}>
              {pizza.name}
            </option>
          ))}
        </select>
      </div>
      <div className='formfields'>
        <label htmlFor="restaurant_id">restaurant:</label>
        <select
          id="restaurant_id"
          name="restaurant_id"
          value={restaurantId}
          onChange={(e) => setrestaurantId(e.target.value)}
          required
        >
          <option value="">Select a restaurant</option>
          {restaurants.map((restaurant) => (
            <option key={restaurant.id} value={restaurant.id}>
              {restaurant.name}
            </option>
          ))}
        </select>
      </div>
      <div className='formfields'>
        <label htmlFor="price">set price:</label>
        <input 
          type='number' 
          id='price' 
          max={30} 
          min={1}
          value={price}
          onChange={(e) => setPrice(parseInt(e.target.value))}
        />
      </div>
      <button type="submit">Add restaurant pizza</button>
    </form>
  )
}

export default RestaurantPizzaForm