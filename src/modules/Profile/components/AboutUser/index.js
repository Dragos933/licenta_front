import React, { useState, useEffect } from 'react';

const AboutUser = (props) => {
  return (
    <div className='about-container'>
      <div className='panel-info'>
        <p>My Details</p>
      </div>
      <div className='content'>
        <div className='user-info'>
          <div className='user-photo'>
            <img src='/images/forgotPassword.jpg' alt='UserImage' />
          </div>
        </div>
        <div className='tree-container'>
          <img src='/images/tree.jpg' alt='Tree' />
        </div>
      </div>
    </div>
  );
};

export default AboutUser;
