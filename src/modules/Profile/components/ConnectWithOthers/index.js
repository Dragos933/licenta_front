import React, { useState, useEffect } from 'react';
import ConnectionItem from './ConnectionItem/index';

const ConnectWithOthers = (props) => {
  return (
    <div className='connect-container'>
      <div className='panel-info'>
        <p>Connect With Others</p>
        <i className='fas fa-link' />
      </div>
      <div className='content'>
        <p className='connect-text'>
          If you connect with other people on the website, you will get an
          invite each time your friend signs up to an event.
        </p>
        <div className='invite-friend'>
          <input type='text' placeholder='Username' />
          <p>Send request.</p>
        </div>
        <p className='connection-text'>Your connections</p>
        <div className='connections'>
          <ConnectionItem name='Cornean Vlad' />
          <ConnectionItem name='Valeriu Vlad' />
          <ConnectionItem name='Abusan Sebi' />
          <ConnectionItem name='Malina Vlad' />
        </div>
      </div>
    </div>
  );
};

export default ConnectWithOthers;
