import React from 'react'
import { useStateValue } from '../ContextApi/StateProvider'
import './BasketProduct.css'
function BasketProduct({id, image, title, price, rating}) {
    const [{basket},dispatch] = useStateValue()
    const removeFromBasket = () =>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id
        })
    }
    return (
        <div className="basketproduct">
            <div className="basketproduct__left">
                <img className="basketproduct__image" src={image}></img>

            </div>
            <div className="basketproduct__right">
                <h4 className="basketproduct__title">{title}</h4>
    <h4 className="basketproduct__price"><small>$</small> <strong>{price}</strong></h4>
    <h5 className="basketproduct__price">Rating :- {rating}</h5>
    <button className="basketproduct__removebtn" onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default BasketProduct
