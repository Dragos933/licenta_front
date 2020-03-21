import React from 'react';
import Footer from '../../../components/footer/index';
import LeftPanel from './LeftPanel/index';
import MiddlePanel from './MiddlePanel/index';
import RightPanel from './RightPanel/index';
import { days, weekDays } from '../../../utils/constants';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='home-container'>
        <div className='panel-container'>
          <LeftPanel name='Cornean Dragos' level={1} />
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
  }
}
