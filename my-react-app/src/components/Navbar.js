import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar-logo'>
            Aly
        </div>
        <ul className='navbar-menu'>
            <li><a href='/'>Home</a></li>
            <li><a href='/blog'>Blog</a></li>
            <li><a href='/contact'>Contact</a></li>
        </ul>

    </div>
  )
}

export default Navbar