import React, { useEffect } from 'react';
import LandingSection from './landing-section/index';
import Modelling from './3DModelling-section/index';
import SoftwareSection from './software-section/index';
import ReviewSection from './review-section/index';
import DeliverySection from './delivery-section/index';
import { useScrollPosition } from 'react-use-scroll-position';
import { Link } from 'react-router-dom';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

const IntegrationProcess = () => {
  const { y: yPosition } = useScrollPosition();
  const { innerWidth: screenWidth } = window;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='page-container int-process-container'>
      <Link className='back-link' to='/'>
        <i className='fas fa-angle-left back-icon'></i>
      </Link>
      <LandingSection yPosition={yPosition} />
      <LazyLoadComponent>
        <Modelling yPosition={yPosition} />
      </LazyLoadComponent>
      <LazyLoadComponent>
        <SoftwareSection yPosition={yPosition} screenWidth={screenWidth} />
      </LazyLoadComponent>
      <div className='scrollable-container'>
        <LazyLoadComponent>
          <ReviewSection />
        </LazyLoadComponent>
        <LazyLoadComponent>
          <DeliverySection yPosition={yPosition} screenWidth={screenWidth} />
        </LazyLoadComponent>
      </div>
    </div>
  );
};

export default IntegrationProcess;
