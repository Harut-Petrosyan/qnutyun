import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'> 
        <Link to="/home" className=' m-4'>Home</Link>
        <Link to="/login" className=' m-4'>Login</Link>
    </div>
  )
}

export default Header