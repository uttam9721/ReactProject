import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <>
      <div className="product-nav">
        <div className="navbar">
          <Link to={'/'} className="nav-link">
            <h3>Home</h3>
          </Link>
          <div className="category">
            <h3>About</h3> <br /><br />
            <select name="category" className="select-box">
              <option value="">All</option>
              <option value="mobile">Mobile</option>
              <option value="laptop">Laptop</option>
              <option value="jeans">Jeans</option>
              <option value="shoes">Shoes</option>
              <option value="bluetooth">Bluetooth</option>
              <option value="hoody">Hoody</option>
            </select>
          </div>
          <div className="search-box">
            <input type="search" placeholder="Search Product..." />
          </div>
          <Link to={'/cart'} className="nav-link">
            <h3>Cart</h3>
          </Link>
        </div>
      </div>
    </>
    </div>
  )
}

export default Navbar
