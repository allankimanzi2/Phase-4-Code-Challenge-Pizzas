import React from 'react'
import Header from "./Header";
import Home from "./Home";
import Restaurants from "./Restaurants";
import Pizzas from "./Pizzas";
import { Routes, Route } from "react-router-dom";
import RestaurantPizzaForm from "./RestaurantPizzaForm";
import RestaurantView from './RestaurantView';

export default function App() {
    
    return (
        <main>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} exact/>
                <Route path='/restaurants' element={<Restaurants />} />
                <Route path="/pizzas" element={<Pizzas />}/>
                <Route path="/restaurant_pizza" element={<RestaurantPizzaForm />}/>
                <Route path='/restaurants/:id' element={<RestaurantView />}/>
            </Routes>
        </main>
    )
}
