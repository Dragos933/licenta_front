import React, { useState, useEffect } from 'react';
import Footer from '../../../components/footer/index';
import LeftPanel from './LeftPanel/index';
import MiddlePanel from './MiddlePanel/index';
import RightPanel from './RightPanel/index';
import { days, weekDays } from '../../../utils/constants';
import { getWheaterData } from '../../../api/profile';
import { formatWheaterData } from '../../../utils/wheater';

const Home = (props) => {
  const [weatherData, setWheaterData] = useState({});
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const wData = await getWheaterData();
        setWheaterData(formatWheaterData(wData));
      } catch (error) {
        setErrors([...errors, error]);
      }
    };
    getData();
  }, [errors]);

  return (
    <div className='home-container'>
      <div className='panel-container'>
        <LeftPanel name='Cornean Dragos' level={1} weatherData={weatherData} />
        <MiddlePanel />
        <RightPanel
          days={days}
          weekDays={weekDays}
          selectedDaysProps={[
            '2;pending',
            '3;open',
            '17;open',
            '18;open',
            '19;closed',
            '6;pending'
          ]}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
