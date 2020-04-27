import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Buttons = (props) => {
  return (
    <div className='buttons-container'>
      <Link to='/home'>Home</Link>
      <Link to='/create-event'>Create events</Link>
      <Link to='/'>Logout</Link>
    </div>
  );
};

export default Buttons;
