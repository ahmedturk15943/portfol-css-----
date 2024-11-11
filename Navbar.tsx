'use client'; 

import React, { useState } from 'react';
import "@/app/CSS/nav.css";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div id='nav'>
      <div>Ahmed Turk</div>
      <ul className={menuOpen ? 'navbar-open' : ''}>
        <li className='menuLink'><a href='#home'>Home</a></li>
        <li className='menuLink'><a href='#about'>About</a></li>
        <li className='menuLink'><a href='#contact'>Contact</a></li>
      </ul>
      <AiOutlineMenu 
        size={30} 
        className="menu-icon" 
        onClick={toggleMenu} 
      />
    </div>
  );
};

export default Navbar;
