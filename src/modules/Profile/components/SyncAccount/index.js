import React, { useState, useEffect } from 'react';
import { connectToGoogle } from '../../../../api/profile';
import { Redirect, Link } from 'react-router-dom';

const SyncAccount = (props) => {
  const [errors, setErrors] = useState([]);
  
 

  return (
    <div className='wheater-container'>
      <div className='panel-info'>
        <p>Sync Account</p>
        <i className='fas fa-sync' />
      </div>
      <div className='content'>
        <p className='title'>Sync your account with Google!</p>
        <p className='descr'>
          In this way, your google calendar will be synced with ours.
        </p>
        <div className='google-btn'>
          <i className='fab fa-google' />
          <a href={`https://accounts.google.com/o/oauth2/v2/auth?client_id=232221935946-0bo434m3mmb2gra3upag7v9a4o5lpsvj.apps.googleusercontent.com&redirect_uri=http://localhost:3000/profile&response_type=token&scope=https://www.googleapis.com/auth/drive.metadata.readonly&include_granted_scopes=true&state=pass-through value`}>
          <p >Connect with google</p></a>
        </div>
        <p className='select-title'>Select your google calendar:</p>
        <select>
          <option>Sample001</option>
          <option>Sample002</option>
          <option>Sample003</option>
        </select>
        <p className='create-title'>Create your google calendar:</p>
        <input type='text' />
        <p className='create-title'>Sync current calendar:</p>
        <i className='fas fa-sync sync' />
      </div>
    </div>
  );
};

export default SyncAccount;
