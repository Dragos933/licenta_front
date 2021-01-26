import React from 'react';

const ReviewSection = () => {
  return (
    <div className='section review-section'>
      <div className='filter'></div>
      <div className='content'>
        <h2 className='section-title'>3. We Value Your Opinion</h2>
        <p
          data-aos='zoom-in'
          data-aos-duration='750'
          className='info first-info'>
          There is always room for improvements.
        </p>
        <p data-aos='zoom-in' data-aos-duration='750' className='info'>
          That's where you come in!
        </p>
        <p data-aos='zoom-in' data-aos-duration='750' className='info'>
          If your time permits it, we would like to have review sessions to
          ensure that our product comes as close as possible to your
          expectations.
        </p>
        <p data-aos='zoom-in' data-aos-duration='750' className='info'>
          Or we can exceed them together.
        </p>
      </div>
    </div>
  );
};

export default ReviewSection;
