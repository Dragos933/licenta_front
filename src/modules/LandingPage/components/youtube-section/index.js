import React from 'react';

const YoutubeSection = (props) => {
  return (
    <div className='youtube-section section'>
      <div className='content'>
        <p className='cta'>
          Watch this video to have a better understanding about us.
        </p>
        <div className='youtube-cta'>
          <a
            className='youtube-link'
            target='blank'
            href='https://www.youtube.com/watch?v=hphzcZfq3Xs&t=1s&ab_channel=APIODIGITAL'>
            
          </a>
          <div className="play-icon"></div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeSection;
