import React from 'react'
import '../styles/Header.css'
import logo from '../assets/pizza.png'
import searchIcon from '../assets/searchicon.png'
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
        <div className='brand'>
            <img src={logo} alt='pizza'/>
        </div>
        <div className='navbar'>
            <div className='searchbar'>
                <input type='text' id='search' placeholder='search restaurants...'/>
                <img src={searchIcon} alt='search' />
            </div>
            <ul className='navlinks'>
                <li>
                    <span class="material-symbols-outlined">
                        home_app_logo
                    </span>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <span class="material-symbols-outlined">
                        restaurant
                    </span>
                    <Link to='/restaurants'>Restaurants</Link>
                </li>
                <li>
                    <span class="material-symbols-outlined">
                        local_pizza
                    </span>
                    <Link to='/pizzas'>Pizzas</Link>
                </li>
                <li>
                    <span class="material-symbols-outlined">
                        shopping_cart
                    </span>
                    <Link to='/restaurant_pizza'>Order</Link>
                </li>
            </ul>
        </div>

    </header>
  )
}
