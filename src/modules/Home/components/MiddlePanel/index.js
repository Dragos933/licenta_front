import React, { useState, useEffect } from 'react';
import CardItem from '../../../../components/cardItem';

const MiddlePanel = ({ data }) => {
  const [dataM, setData] = useState(data || []);

  const onClickCancel = (event_id) => {
    const toReturn = dataM.filter((item) => item.event_id !== event_id);
    setData(toReturn);
  };

  useEffect(() => {
    function onChangeData() {
      setData(data);
    }
    onChangeData();
  }, [data]);

  return (
    <div className='home-middle-panel middle-panel panel'>
      <div className='divider' />
      <div className='home-events'>
        {dataM.length > 0 ? (
          dataM.map((item, index) => {
            return (
              <CardItem
                key={index}
                title={item.title}
                date={item.date}
                status={item.status}
                location={item.location}
                onClickCancel={onClickCancel}
                event_id={item.event_id}
                username={item.username}
                email={item.email}
                user_id={item.user_id}
              />
            );
          })
        ) : (
          <p className='home-no-items'>You have to items in the list :(</p>
        )}
      </div>
      <div className='divider' />
    </div>
  );
};

export default MiddlePanel;
