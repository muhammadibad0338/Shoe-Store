import React, { useState } from 'react'
import './App.css';
import shoes from './shoe.json'
import ImageHover from './ImageHover'
import { Link } from 'react-router-dom';

const Product = () => {

    return (
        <>
            <h1>Product</h1>
            <div className="container shoe_main">
                <div className="row">
                    {Object.keys(shoes).map(value => {
                        return (
                            <Link to={`/product/${value}`} className="col-lg-4  col-sm-12 shoe_prdct" key={value}>
                                <h4>{shoes[value].name}</h4>
                                <ImageHover src={shoes[value]} />
                                <button className="view_btn">QUICK VIEW</button>
                            </Link>
                        )
                    })}
                </div>
            </div>

        </>

    )
}
export default Product