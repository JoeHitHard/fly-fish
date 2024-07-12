import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import * as Icons from "react-icons/md";
import * as Fa6Icons from "react-icons/fa6";
import * as FaIcons from "react-icons/fa";
import { GiHoodedFigure } from "react-icons/gi";
import { TbHomeEco } from "react-icons/tb";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <img className='sidebar-logo' src={'/logo/logo.png'} alt="Logo" />
        <h1>fLY fISH</h1>
        <li><h4><Icons.MdHome /><Link to="/">  Home</Link></h4></li>
        <li><h4><Fa6Icons.FaFish /><Link to="/terrariums">  Terrariums</Link></h4></li>
        <li><h4><FaIcons.FaTshirt /><Link to="/apparel">  Apparel</Link></h4></li>
        <li><h4><GiHoodedFigure /><Link to="/figures">  figurines</Link></h4></li>
        <li><h4><FaIcons.FaPaintBrush /><Link to="/paintings">  Paintings</Link></h4></li>
        <li><h4><TbHomeEco /><Link to="/interior">  Interior</Link></h4></li>
        <li><h4><TbHomeEco /><Link to="/contact">  Contact Us</Link></h4></li>
      </ul>
    </div>
  );
};

export default Sidebar;
