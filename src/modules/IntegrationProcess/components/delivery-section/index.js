import React from 'react';
import * as Computations from '../../../../utils/integrationComputations';

const DeliverySection = (props) => {
  const { yPosition, screenWidth } = props;

  return (
    <div className='section delivery-section'>
      <h2 className='section-title'>4. Delivery</h2>
      <div className='content'>
        <div className='device-container'>
          <p className='text'>
            After the integration of the 3D model in our software is done, it
            will be made available on the web platform. All the future updates
            and new features will be automatically made available so that you
            can get the best value out of our services.
          </p>
          <img
            style={{
              transform: `translate(${Computations.selectTabletComputation(
                yPosition,
                screenWidth
              )}%, ${Computations.selectTabletComputation(
                yPosition,
                screenWidth
              )}%)`
            }}
            id='tablet'
            alt='Tablet'
            src='/images/Mockups/tablet.png'
          />
        </div>
        <div className='device-container'>
          <img
            style={{
              transform: `translate(-${Computations.selectIphoneComputation(
                yPosition,
                screenWidth
              )}%, ${Computations.selectIphoneComputation(
                yPosition,
                screenWidth
              )}%)`
            }}
            id='iphone'
            alt='Iphone'
            src='/images/Mockups/smartphone.png'
          />
        </div>
        <div className='device-container laptop-container'>
          <p className='text'>
            Through the web platform we give you access to a series of
            management tools:
            <ul>
              <li>
                Budget management tools - give yourself the peace of mind that
                you will never overspend.
              </li>
              <li>
                Distribution management tools - create and share links for
                clients to access the cloud solution or download it for offline
                use.
              </li>
              <li>
                Integration management tools – integrate the cloud solution
                directly with your website.
              </li>
            </ul>
          </p>
          <img
            style={{
              transform: `translate(${Computations.selectLaptopComputation(
                yPosition,
                screenWidth
              )}%, ${Computations.selectLaptopComputation(
                yPosition,
                screenWidth
              )}%)`
            }}
            id='laptop'
            alt='Iphone'
            src='/images/Mockups/laptop.png'
          />
        </div>
      </div>
    </div>
  );
};

export default DeliverySection;
