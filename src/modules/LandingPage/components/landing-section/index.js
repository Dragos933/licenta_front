import React from 'react';
import Particles from '../particles/index';

const LandingSection = (props) => {
  const { yPosition } = props;

  return (
    <div className='section landing-section' name="aboutUs">
      <div className='particles'>{yPosition < 1100 ? <Particles /> : null}</div>
      <div className='filter'></div>
      <div className='content'>
        <img
          src='/images/apio-logo-transparent-fit-white.png'
          alt='Apiodigital logo'
        />
        <h1 className='section-text'>Simulating Living Experiences</h1>
      </div>
      <div className='question-card first-question'>
        <div className='card-filter'></div>
        <p className='question'>WHO we are</p>
        <p className='answer'>
          APIO Digital is a Romanian tech company, diligent on immersive
          technologies and focused on upgrading the way the world sees and
          interacts with residence development client acquisition.
        </p>
      </div>
    </div>
  );
};

export default LandingSection;
