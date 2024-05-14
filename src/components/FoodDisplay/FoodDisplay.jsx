import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import "./FoodDisplay.css"
import FoodItem from '../FoodItem/FoodItem'
const FoodDisplay = ({category}) => {
    const {food_list } = useContext(StoreContext)
    return (
        <div className='food-display' id='food-display'>
            <h2>Top Dishes near you</h2>
            <div className="food-display-list">

                {food_list?.map((item,index)=>{
                    console.log("item",item)
                    return <FoodItem key={index} id={item.id} name={item.name} description={item.description} image={item.image} price={item.price} />
                })}
            </div>
        </div>
    )
}

export default FoodDisplay