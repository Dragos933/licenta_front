import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AboutUser = (props) => {
  return (
    <div className='about-container'>
      <div className='panel-info'>
        <p>My Details</p>
        <i className='far fa-user-circle' />
      </div>
      <div className='content'>
        <div className='user-info'>
          <div className='user-photo'>
            <img src='/images/forgotPassword.jpg' alt='UserImage' />
            <p>Change profile picture</p>
          </div>
          <div className='user-data'>
            <input name='First-name' type='text' placeholder='First-name' />
            <input name='Last-name' type='text' placeholder='Last-name' />
            <input name='E-mail' type='text' placeholder='E-mail' />
            <input disabled name='Phone' type='text' placeholder='Phone' />
            <Link to='/profile/verify-mobile' className='verify-mobile'>
              Verify mobile 
              {' '}
              <i className='fas fa-arrow-right' />
            </Link>
            <input name='Age' type='text' placeholder='Age' />
            <input name='Address' type='text' placeholder='Address' />
            <input name='Description' type='text' placeholder='Description' />
          </div>
        </div>
        <div className='tree-container'>
          <img src='/images/TreeLvl5.png' alt='Tree' />
        </div>
      </div>
    </div>
  );
};

export default AboutUser;
