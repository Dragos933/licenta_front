import React, { useState } from 'react';
import { Link as SmoothLink } from 'react-scroll';

const InstantScroll = () => {
  const [isActiveNavigation, setIsActiveNavigation] = useState(false);

  const activateNavigation = () => {
    setIsActiveNavigation(!isActiveNavigation);
  };

  return (
    <div className={`instant-scroll-container`}>
      <SmoothLink to='' spy={true} smooth={true} offset={-70} duration={3000}>
        <div
          className={`navigation-item ${
            isActiveNavigation ? 'activate-nav' : 'deactivate-nav'
          }-1`}>
          <p>S1</p>
          {isActiveNavigation ? (
            <p className='informer informer-1'>Travel to the Top of the page</p>
          ) : null}
        </div>
      </SmoothLink>
      <SmoothLink
        to='AboutUs'
        spy={true}
        smooth={true}
        offset={-70}
        duration={3000}>
        <div
          className={`navigation-item ${
            isActiveNavigation ? 'activate-nav' : 'deactivate-nav'
          }-2`}>
          <p>S2</p>
          {isActiveNavigation ? (
            <p className='informer informer-2'>Travel to Section: About Us</p>
          ) : null}
        </div>
      </SmoothLink>
      <SmoothLink
        to='Section2'
        spy={true}
        smooth={true}
        offset={-70}
        duration={3000}>
        <div
          className={`navigation-item ${
            isActiveNavigation ? 'activate-nav' : 'deactivate-nav'
          }-3`}>
          <p>S3</p>
          {isActiveNavigation ? (
            <p className='informer informer-3'>
              Travel to Section: Our Products
            </p>
          ) : null}
        </div>
      </SmoothLink>
      <SmoothLink
        to='Layers'
        spy={true}
        smooth={true}
        offset={-70}
        duration={3000}>
        <div
          className={`navigation-item ${
            isActiveNavigation ? 'activate-nav' : 'deactivate-nav'
          }-4`}>
          <p>S4</p>
          {isActiveNavigation ? (
            <p className='informer informer-4'>Travel to Section: Layers</p>
          ) : null}
        </div>
      </SmoothLink>
      <SmoothLink
        to='Projects'
        spy={true}
        smooth={true}
        offset={-70}
        duration={3000}>
        <div
          className={`navigation-item ${
            isActiveNavigation ? 'activate-nav' : 'deactivate-nav'
          }-5`}>
          <p>S5</p>
          {isActiveNavigation ? (
            <p className='informer informer-5'>Travel to Section: Projects</p>
          ) : null}
        </div>
      </SmoothLink>
      <i onClick={activateNavigation} className='fas fa-compass'></i>
    </div>
  );
};

export default InstantScroll;
