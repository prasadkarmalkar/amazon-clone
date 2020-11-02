import React from 'react'
import { useStateValue } from '../ContextApi/StateProvider'
import BasketProduct from './BasketProduct'
import './Checkout.css'
import Subtotal from './Subtotal'
import FlipMove from 'react-flip-move';

function Checkout() {
    const [{ basket }, dispatch] = useStateValue()

    let total = 0;
    basket.map((val) => {
        total += val.price
    })
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"></img>
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                </div>
                <div className="checkout__basketProduct">
                    {basket.map((item) =>
                        (<BasketProduct key={basket.indexOf(item)} id={item.id} image={item.image} title={item.title} price={item.price} rating={item.rating} ></BasketProduct>))}
                </div>

            </div>
            <div className="checkout__right">
                <Subtotal noOfProducts={basket.length} total={total}></Subtotal>

            </div>
        </div>
    )
}

export default Checkout
