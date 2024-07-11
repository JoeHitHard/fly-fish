import React from 'react';
import './Topbar.css';
import { MdOutlineShoppingCartCheckout } from "react-icons/md";

const Topbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-brand">fLY fISH</div>
      <ul className="navbar-links">
        <li><a href='#home'><MdOutlineShoppingCartCheckout /> Check out</a></li>
      </ul>
    </div>
  );
};

export default Topbar;
