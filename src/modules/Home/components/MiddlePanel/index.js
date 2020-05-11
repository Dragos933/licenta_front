import React, { useState, useEffect } from 'react';
import CardItem from '../../../../components/cardItem';

const MiddlePanel = (props) => {
  const { data } = props;

  const onClickCancel = (event_id) => {
    const toReturn = data.filter(item => item.event_id !== event_id);
    data = toReturn;
  }

  return (
    <div className='home-middle-panel middle-panel panel'>
      <div className='divider' />
      <div className='home-events'>
        {
          data.map((item, index) => {
            return (
              <CardItem
                key={index}
                title={item.title}
                date={item.date}
                status={item.status}
                location={item.location}
                onClickCancel={onClickCancel}
                event_id={item.event_id}
              />
            )
          })
        }
      </div>
      <div className='divider' />
    </div>
  );
};

export default MiddlePanel;
