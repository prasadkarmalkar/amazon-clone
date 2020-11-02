import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { Link } from 'react-router-dom'
function Subtotal({noOfProducts,total}) {
    
    return (
        <div className="subtotal">
            <CurrencyFormat renderText={(value) => (
                <>
                    <p>
                        Subtotal ({noOfProducts} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" ></input> This Order Contains A Gift
                            </small>
                    
                </>
            )}
                decimalScale={2}
                value={total}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}></CurrencyFormat>
                <Link to="/payment"><button className="subtotal__button">Proceed To Checkout</button></Link>
        </div>
    )
}

export default Subtotal
