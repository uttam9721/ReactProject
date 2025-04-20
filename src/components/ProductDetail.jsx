import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import productList from './data'
// import './Product.css'

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({})

  useEffect(() => {
    const result = productList.find((item) => item.id ==id)
    setProduct(result)
  }, [id])

  return (
    <div className="product-detail-container">
      <div className="product-detail-card">
        <div className="product-image">
          <img src={product.img} alt="Product" />
        </div>
        <div className="product-info">
          <h2 className="product-brand">{product.brand}</h2>
          <h3 className="product-model">{product.model}</h3>
          <p className="product-price">Price: ₹{product.price}</p>
          <p className="product-space">Space: {product.space}</p>
          <p className="product-camera">Camera: {product.camera}</p>
          <p className="product-battery">Battery: {product.battery}</p>
          <p className="product-description">{product.description}</p>
          <button className="product-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
