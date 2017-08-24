import React from 'react'
import { Link } from 'redux-little-router'
import '../ui/main-nav.css'
import '../ui/nav-item.css'

const MainNav = () => (
  <nav className='nav'>
    <ul className='nav-items'>
      <li className='nav-item'>
        <Link className='nav-item-cta' href='/' activeProps={{ className: 'nav-item-cta nav-item-cta-selected' }}>Home</Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-item-cta' href='/characters?page=1&pageSize=100' activeProps={{ className: 'nav-item-cta nav-item-cta-selected' }}>Characters</Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-item-cta' href='/houses?page=1&pageSize=100' activeProps={{ className: 'nav-item-cta nav-item-cta-selected' }}>Houses</Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-item-cta' href='/books?page=1&pageSize=100' activeProps={{ className: 'nav-item-cta nav-item-cta-selected' }}>Books</Link>
      </li>
    </ul>
  </nav>
)

export default MainNav
