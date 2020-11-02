import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
                    className="home__containerImage"></img>
            </div>
            <div className="home__row">
<Product id={1} title="CHIPTRONEX X410B Mid Tower ATX Cabinet USB 3.0 " price={255} rating={4.7} image="https://m.media-amazon.com/images/I/71i-US6qJwL._AC_UY218_.jpg"></Product>
<Product id={2} title="CHIPTRONEX X410B Mid Tower ATX Cabinet USB 3.0 " price={255} rating={4.7} image="https://m.media-amazon.com/images/I/71i-US6qJwL._AC_UY218_.jpg"></Product>
            </div>
            
            <div className="home__row">
            <Product id={3} title="CHIPTRONEX X410B Mid Tower ATX Cabinet USB 3.0 " price={255} rating={4.7} image="https://m.media-amazon.com/images/I/71i-US6qJwL._AC_UY218_.jpg"></Product>
            <Product id={4} title="CHIPTRONEX X410B Mid Tower ATX Cabinet USB 3.0 " price={255} rating={4.7} image="https://m.media-amazon.com/images/I/71i-US6qJwL._AC_UY218_.jpg"></Product>
            <Product id={5} title="CHIPTRONEX X410B Mid Tower ATX Cabinet USB 3.0 " price={255} rating={4.7} image="https://m.media-amazon.com/images/I/71i-US6qJwL._AC_UY218_.jpg"></Product>

            </div>
            
            <div className="home__row">
            <Product title="CHIPTRONEX X410B Mid Tower ATX Cabinet USB 3.0 " price={255} rating={4.7} image="https://m.media-amazon.com/images/I/71i-US6qJwL._AC_UY218_.jpg"></Product>
            </div>

        </div>
    )
}

export default Home
