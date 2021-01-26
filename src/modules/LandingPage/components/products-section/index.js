import React from 'react';

const ProductsSection = () => {
  return (
    <div className='section projects-section' name='products'>
      <div className='filter'></div>
      <div className='cloud-section section'>
        <p className='title'>Cloud</p>
        <div className='features-container'>
          <div
            data-aos='fade-right'
            data-aos-duration='1000'
            data-aos-offset='200'
            className='cloud-feature'>
            <p className='text'>Can be run on any device in browser.</p>
            <div className='devices'>
              <img alt='Desktop Device' src='/images/pc.png' />
              <img alt='Laptop Device' src='/images/laptop.png' />
              <img alt='Tablet Device' src='/images/tablet.png' />
              <img alt='Smartphone Device' src='/images/smartphone.png' />
            </div>
          </div>
          <div
            data-aos='fade-left'
            data-aos-duration='1000'
            data-aos-offset='200'
            className='cloud-feature'
            id='feature-earth'>
            <p className='text'>Can be run from anywhere in the world.</p>
            <img
              id='navigation-image'
              alt='Planet Earth'
              src='/images/navigation.png'
            />
          </div>
          <div
            data-aos='fade-right'
            data-aos-duration='1000'
            data-aos-offset='200'
            className='cloud-feature'
            id='feature-wifi'>
            <p className='text'>All you need is a good internet connection.</p>
            <img alt='Wi-fi Router' src='/images/wifi-router.png' />
          </div>
          <div
            data-aos='fade-left'
            data-aos-duration='1000'
            data-aos-offset='200'
            className='cloud-feature'
            id='feature-pay'>
            <p className='text'>
              Pay how you like through:{' '}
              <span className='options-container'>
                <span className='first-option option'>a. Pay-per-view</span>
                <span className='option'>b. Subscription</span>
              </span>
            </p>
            <img alt='Credit Card' src='/images/credit-card.png' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
