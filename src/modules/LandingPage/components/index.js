import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className='landing-container'>
      <h1 className='landing-title'>Let's Clean Romania!</h1>
      <img
        className='landing-img'
        alt='LandingPage'
        src='/images/LandingPage.jpg' />
      <Link id='nav-reg' className='landing-nav' to='/register'>
        Register
      </Link>
      <Link id='nav-log' className='landing-nav' to='/login'>
        Login
      </Link>
      <div>
        <p>Footer</p>
      </div>
    </div>
  );
};

export default LandingPage;
