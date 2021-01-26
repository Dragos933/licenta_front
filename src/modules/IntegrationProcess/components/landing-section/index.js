import React from 'react';
import Particles from '../../../LandingPage/components/particles/index';

const LandingSection = (props) => {

  const { yPosition } = props;
 
  const moveTitle = () => {
    if (yPosition >= 400) {
      return 4;
    }
    return 0 + yPosition / 100;
  }

  return (
    <div className='landing-section'>
      {
        yPosition <= 800
        ? <Particles type='other' className="particles" />
        : null
      }
      <div className="filter"></div>
      <div className='content'>
        <h1 style={{ transform: `translate(${moveTitle()}%, -${moveTitle() * 10}%)`}} className='title'>HOW WE DO IT</h1>
        <div className='scroll-informer'>
          <i className='fas fa-hand-pointer'></i>
          <p>Scroll Down</p>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
