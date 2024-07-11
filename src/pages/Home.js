import React from 'react';
import './Home.css';
import bg from '../content/body-bg.mp4';


function Home() {
  return (
    <div className='home-container' id='home'>
      <div className='header'>
        <video className='myVideo' autoPlay loop muted>
            <source src={bg} type='video/mp4' />
        </video>
        <h1 className='home-title'>NATURE IN OUR HOMES</h1>
        <button className='home-button'>Explore Products</button>
      </div>
      <div className='footer'>
        <h1>Contact Us</h1>
      </div>
    </div>
  );
}

export default Home;
