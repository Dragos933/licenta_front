import React, { useState, useEffect } from 'react';
import { getWheaterData } from '../../../api/profile';
import { formatWheaterData } from '../../../utils/wheater';
import Footer from '../../../components/footer/index';
import SyncAccount from './SyncAccount';
import ConnectWithOthers from './ConnectWithOthers';
import AboutUser from './AboutUser';
import Buttons from './Buttons';

const Profile = (props) => {
  return (
    <div className='profile'>
      <div className='profile-container'>
        <AboutUser />
        <div className='middle-panel'>
          <SyncAccount />
          <Buttons />
        </div>
        <ConnectWithOthers />
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
