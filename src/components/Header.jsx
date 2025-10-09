import React from 'react'

function Header() {
  return (
    <div className='header'>
        <div className="logo">
            <img src="../public/brand_logo.png" alt="" />
        </div>
        <ul className='navItems'>
            <li>MENU</li>
            <li>LOCATION</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
        </ul>
        <button className='login'>Login</button>
    </div>
  )
}

export default Header