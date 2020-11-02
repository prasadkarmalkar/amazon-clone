import React from 'react'
import './Product.css'
import {useStateValue} from '../ContextApi/StateProvider.js'
function Product({id=1, title, image, price, rating}) {
    const [{ basket }, dispatch] = useStateValue();
    const addToBasket = ()  =>{
        dispatch({
            type:"ADD_TO_BASKET",
            item: {
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating
            }
        })
    }
    return (
        <div className="product">

            <div className="product__info">
    <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
    <strong>{price}</strong>
                </p>
    <p className="product__rating">Rating: {rating}</p>

            </div>

            <img className="product__image" src={image}></img>
            <button onClick={addToBasket} className="product__addToCartButton">Add To Cart</button>
        </div>
    )
}

export default Product
