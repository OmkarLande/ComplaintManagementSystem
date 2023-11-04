import React from 'react'
import './Header.css'

function Header() {
  return (

    <nav className='taskbar' >
      <ul className='box' >
        <li class="li"><a class="navText" href="/">Home</a></li>
        <li class="li"><a class="navText" href="/aboutus">About</a></li>
        <li class="li"><a class="navText" href="/complaint">Complaint</a></li>
        <li class="li"><a class="navText" href="/loginsingup">Sign Up</a></li>
       
      </ul>
    </nav>
  );
}


export default Header