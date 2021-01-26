import React from 'react';
import ChartInCard from '../chart-in-card';

const PanelSection = () => {
  return (
    <div className='section admin-panel-section'>
      <div
        className='panel-section subsection'
        data-aos='flip-right'
        data-aos-duration='500'
        data-aos-offset='100'>
        <div className='filter'></div>
        <div className='content'>
          <p className='card-title'>Be in CONTROL</p>
          <div className='container'>
            <p className='description'>
              Apio Digital provides you with a control panel to easily manage
              your projects, ranging from budgets to distribution
            </p>
            <video webkit-playsinline autoPlay muted loop playsInline>
              <source src='/images/panelVideo.mp4' type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <div
        className='analytics-section subsection second-subsection'
        data-aos='flip-left'
        data-aos-duration='500'
        data-aos-offset='100'>
        <div className='filter'></div>
        <div className='content'>
          <p className='card-title'>From Analytics to Results</p>
          <div className='container'>
            <p className='description'>
              Apio Digital provides analytics for each project, so you can have
              a data driven understanding of what your clients want
            </p>
            <ChartInCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelSection;
