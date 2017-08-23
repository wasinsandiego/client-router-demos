import React from 'react'
import { Link } from 'redux-little-router'
import '../ui/main-nav.css'
import '../ui/nav-item.css'

const MainNav = () => (
  <nav className='nav'>
    <ul className='nav-items'>
      <li className='nav-item'>
        <Link className='nav-item-cta' href='/'>Home</Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-item-cta' href='/characters'>Characters</Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-item-cta' href='/houses'>Houses</Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-item-cta' href='/books'>Books</Link>
      </li>
    </ul>
  </nav>
)

export default MainNav
