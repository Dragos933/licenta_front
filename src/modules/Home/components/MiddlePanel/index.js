import React, { useState, useEffect } from 'react';
import CardItem from '../../../../components/cardItem';
import { getUserInvitations } from '../../../../api/home';

const formatData = (data, title) => {
  return data.map(item => {
    return ({
      title,
      date: item.date,
      location: item.location,
      status: item.status,
      event_id: item.event.id,
    });
  });
}

const MiddlePanel = (props) => {
  const [user] = useState(JSON.parse(localStorage.getItem('user')));
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const getAllData = async () => {
      try {
        const invitations = await getUserInvitations(user.id);
        if (typeof(invitations) === 'array') {
          setData([...data, ...formatData(invitations.data, 'Invitation')]);
        } else {
          setData([...data, ...formatData([invitations.data], 'Invitation')]);
        }
      } catch (error) {
        setErrors(error);
      }
    };
    getAllData();
  }, []);

  const onClickCancel = (event_id) => {
    const toReturn = data.filter(item => item.event_id !== event_id);
    setData(toReturn);
  }

  return (
    <div className='middle-panel panel'>
      <div className='divider' />
      <div className='home-events'>
        {
          data.map((item, index) => {
            return (
              <CardItem
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
