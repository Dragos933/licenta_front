import React from 'react';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='logo-container section'>
        <img
          id='logo'
          src='/images/apio-logo-transparent-fit-white.png'
          alt='Apio Logo'
        />
        <p className='rights'>&#169; Copyrights apio.digital 2020</p>
      </div>
        <p className='connect section'>
          <span className='section-title'>Let's Connect:{' '}</span>
          <a
            target='blank'
            href='https://www.linkedin.com/company/apiodigital/'>
            <i className='fab fa-linkedin-in linkedin'></i>
          </a>
          <a
            target='blank'
            href='https://www.youtube.com/channel/UCgUpcbRr1NRVELJ7qcxsetA'>
            <i className='fab fa-youtube linkedin youtube'></i>
          </a>
        </p>
      <div className='section'>
        <p className='section-title'>Contact Us: </p>
        <p className='info'>contact@apio.digital</p>
      </div>
    </div>
  );
};

export default Footer;
