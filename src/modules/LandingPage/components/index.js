import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../../components/footer/index';

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='landing-container'>
        <h1 className='landing-title'>Make Romania Green!</h1>
        <img
          className='landing-img'
          alt='LandingPage'
          src='/images/LandingPage.jpg'
        />
        <Link id='nav-reg' className='landing-nav' to='/register'>
          Register
        </Link>
        <Link id='nav-log' className='landing-nav' to='/login'>
          Login
        </Link>
        <Footer />
      </div>
    );
  }
}
