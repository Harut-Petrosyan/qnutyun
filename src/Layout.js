import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Header from './Header'

function Layout() {
  return (
    <div>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default Layout
