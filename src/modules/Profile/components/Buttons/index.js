import React, { useState, useEffect } from 'react';

const Buttons = (props) => {
  return (
    <div className='buttons-container'>
      <ul>
        <li>Home</li>
        <li>Events</li>
        <li>Logout</li>
      </ul>
    </div>
  );
};

export default Buttons;
