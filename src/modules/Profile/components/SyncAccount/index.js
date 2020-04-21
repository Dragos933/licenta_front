import React, { useState, useEffect } from 'react';

const SyncAccount = (props) => {
  return (
    <div className='wheater-container'>
      <div className='panel-info'>
        <p>Sync Account</p>
      </div>
      <div className='content'>
        <p className='title'>Sync your account with Google!</p>
        <p className='descr'>
          In this way, your google calendar will be synced with ours.
        </p>
        <div className='google-btn'>
          <i className='fab fa-google' />
          <p>Connect with google</p>
        </div>
        <p className='select-title'>Select your google calendar:</p>
        <select>
          <option>Sample001</option>
          <option>Sample002</option>
          <option>Sample003</option>
        </select>
        <p className='create-title'>Create your google calendar:</p>
        <input type='text' />
      </div>
    </div>
  );
};

export default SyncAccount;
