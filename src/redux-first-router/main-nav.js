import React from 'react'
import Link from 'redux-first-router-link'
import '../ui/main-nav.css'
import '../ui/nav-item.css'

const MainNav = () => (
  <nav className='nav'>
    <ul className='nav-items'>
      <li className='nav-item'>
        <Link className='nav-item-cta' to='/'>Home</Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-item-cta' to='/characters?page=1&pageSize=100'>Characters</Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-item-cta' to='/houses?page=1&pageSize=100'>Houses</Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-item-cta' to='/books?page=1&pageSize=100'>Books</Link>
      </li>
    </ul>
  </nav>
)

export default MainNav
