import React from 'react'
import productList from './data'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div className="product-container">
      {productList.map((item, index) => {
        return (
          <div className="product-card" key={index}>
           <Link to={`/product/${item.id}`}>
           <img 
              src={item.img} 
              alt="product-img" 
              className="product-card-image"
            />
           </Link>
            <div className="product-card-details">
              <h2 className="product-card-price">Price: ₹{item.price}</h2>
              <h3 className="product-card-brand">Brand: {item.brand}</h3>
              <h3 className="product-card-model">Model: {item.model}</h3>
              <h3 className="product-card-space">Space: {item.space}</h3>
              <h3 className="product-card-type">Type: {item.type}</h3>
              <button className="product-card-btn">Add to Cart</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Product
