import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/background.mp4' autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p> Register Now </p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Register
        </Button>
        
      </div>
    </div>
  );
}

export default HeroSection;
