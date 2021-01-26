import React from 'react';
import { Link } from 'react-router-dom';

const ProcessSection = () => {
  /**
   * * THIS IS JUST A TEST
   * ! THIS IS JUST A TEST
   * TODO: THIS IS JUST A TEST
   * ? THIS IS JUST A TEST
   * @param THIS IS JUST A TEST
   */

  return (
    <div className='process-section' name='process'>
      <div className='content'>
        <img
          className='gears first-gear'
          alt='Gears'
          src='/images/2-gears.png'
        />
        <img className='gears second-gear' alt='Gears' src='/images/gear.png' />
        <p className='title'>What about the process of integration, you ask?</p>
        <Link className='find-out-btn btn' to='/process-of-integration'>
          Find out more
        </Link>
      </div>
    </div>
  );
};

export default ProcessSection;
