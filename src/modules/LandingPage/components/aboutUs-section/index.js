import React from 'react';

const AboutUsSection = (props) => {
  const { yPosition } = props;

  return (
    <div className='section aboutUs-section'>
      <div className='question-card'>
        <div className='filter'></div>
        <p className='question'>WHAT we do</p>
        <div className='answer-container'>
          <p className='answer'>
            APIO Digital combines architecture and gaming, offering Real Estate
            Developers and Advisors a complete solution that will help them:
          </p>
          <div className='items-container'>
            <p
              className={`item first-item ${
                yPosition > 800 ? 'swing-in-top-fwd' : 'swing-out-top-bck'
              }`}>
              <img src='/images/visualize.png' alt='VR Visualization' /> Aid
              clients in the decision-making process
            </p>
            <p
              className={`item middle-item ${
                yPosition > 800 ? 'swing-in-top-fwd-2' : 'swing-out-top-bck'
              }`}>
              <img src='/images/deal.png' alt='VR Visualization' /> Strengthen
              the communication between developers & advisors and their clients
            </p>
            <p
              className={`item last-item ${
                yPosition > 800 ? 'swing-in-top-fwd-3' : 'swing-out-top-bck'
              }`}>
              <img src='/images/smallCloud.png' alt='VR Visualization' /> Make
              it easier for Architecture Engineering & Construction entities to
              visualize, conceptualize and interact with products
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
