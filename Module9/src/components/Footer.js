import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Championes Camp newsletter to receive latest updates
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>

          <h5 style={{paddingTop:"20px"}}>Contact us at (666)-200-4567</h5>
          <h5>or by email at championescamp@outlook.com</h5>
        </div>
      </section>
      
      
    </div>
  );
}

export default Footer;
