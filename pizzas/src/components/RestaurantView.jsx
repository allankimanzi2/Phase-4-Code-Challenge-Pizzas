import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import placeholder from '../assets/pizzaplaceholder.jpg'
import '../styles/RestaurantView.css'

function RestaurantView() {
    const [restaurant, setRestaurant] = useState({})
    const [error, setErrors] = useState('')
    const [pizzas, setPizzas] = useState([])
    const {id} = useParams()


    useEffect(()=>{
        fetch(`/api/restaurants/${id}`)
        .then(r => r.json())
        .then((res) => {
            setRestaurant(res)
            setPizzas(res.pizzas)
        })
    }, [id])
    
  return (
    <div className='restaurantview'>
        <h1>{restaurant.name}</h1>
        <h3>{restaurant.address}</h3>
        <h4>Our Pizza Menu:</h4>
        <div className='pizzamenu'>
            {pizzas.map((pizza) => (
                <div className='pizzacard' key={pizza.id}>
                    <img src={placeholder} alt=''/>
                    <h3>{pizza.pizza.name}</h3>
                    <p>{pizza.pizza.ingredients}</p>
                    <span>Price:$<em>{pizza.price}</em></span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RestaurantView