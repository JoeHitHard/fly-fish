import React from 'react';
import './Home.css';
// import bg from '../content/body-bg.mp4';
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";


function Home() {
  return (
    <div className='home-container' id='home'>
      <div className='header'>
        <h1 className='home-title'>NATURE IN OUR HOMES</h1>
        <button className='home-button'>Explore Products</button>
      </div>
      <div className='footer'>
        <h1>Contact Us</h1>
        <div className='footer-rows'>
          <h1><FaPhoneAlt /></h1>
          <h1><CiFacebook /></h1>
          <h1><FaInstagram /></h1>
          <h1><MdAlternateEmail /></h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
