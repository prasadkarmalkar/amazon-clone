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
                <Product id={2} title="Redmi Note 9 Pro (Champagne Gold, 4GB RAM, 128GB Storage) " price={100} rating={4.0} image="https://m.media-amazon.com/images/I/81Ox29uGzNL._AC_UY218_.jpg"></Product>
            </div>

            <div className="home__row">
                <Product id={3} title="ZOTAC Gaming GeForce RTX 2080 Ti  " price={300} rating={4.8} image="https://m.media-amazon.com/images/I/81dsGFdYbZL._AC_UY218_.jpg"></Product>
                <Product id={4} title="AMD Ryzen 7 2700X Desktop Processor 8 " price={350} rating={4.7} image="https://m.media-amazon.com/images/I/61zovsZF-QL._AC_UY218_.jpg"></Product>
                <Product id={5} title="ASUS VivoBook S14 Intel Core i5 " price={500} rating={4.7} image="https://m.media-amazon.com/images/I/81DlMQKtyWL._AC_UY218_.jpg"></Product>

            </div>

            <div className="home__row">
                <Product title="LG Ultragear 27-inch IPS FHD, G-Sync" price={299} rating={4.7} image="https://m.media-amazon.com/images/I/71ZFFvrGaAL._AC_UY218_.jpg"></Product>
            </div>

        </div>
    )
}

export default Home
