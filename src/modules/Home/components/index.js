import React from 'react';
import Footer from '../../../components/footer/index';
import LeftPanel from './LeftPanel/index';
import MiddlePanel from './MiddlePanel/index';
import RightPanel from './RightPanel/index';

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
          <RightPanel />
        </div>
        <Footer />
      </div>
    );
  }
}
