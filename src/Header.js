import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div>

        <Link to="/home" className='link m-4'>Home</Link>
        <Link to="/info" className='link'>Info</Link>
        <Link to="/about" className=' m-4'>
          <li>
            About
          </li>
          </Link>
        <Link to="/contact" className=' m-4'>
          <li>
            Contact
          </li>
            </Link>
            
        <Link to="/shop" className=' m-4'>
          <li>
            Shop
          </li>
            </Link>
      </div>
      <div className='logo'>

      </div>
    </header>
  )
}

export default Header