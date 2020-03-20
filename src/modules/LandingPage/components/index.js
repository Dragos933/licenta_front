import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../../components/footer/index';

const LandingPage = () => {
  return (
    <div className='landing-container'>
      <h1 className='landing-title'>Let's Clean Romania!</h1>
      <img
        className='landing-img'
        alt='LandingPage'
        src='/images/LandingPage.jpg'
      />
      <Link id='nav-hom' className='landing-nav' to='/home'>
        Hoome
      </Link>
      <Link id='nav-reg' className='landing-nav' to='/register'>
        Register
      </Link>
      <Link id='nav-log' className='landing-nav' to='/login'>
        Login
      </Link>
      <Footer />
    </div>
  );
};

export default LandingPage;
