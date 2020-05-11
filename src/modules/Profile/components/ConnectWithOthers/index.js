import React, { useState, useEffect } from 'react';
import ConnectionItem from './ConnectionItem/index';
import { getUserConnections } from '../../../../api/profile';

const ConnectWithOthers = (props) => {
  const [user] = useState(JSON.parse(localStorage.getItem('user')));
  const [connections, setConnections] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const getConnections = async () => {
      try {
        const res = await getUserConnections(user.id);
        setConnections(res.data);
      } catch (error) {
        setErrors(error);
      }
    }
    getConnections();
  }, []);

  return (
    <div className='connect-container'>
      <div className='panel-info'>
        <p>Connect With Others</p>
        <i className='fas fa-link' />
      </div>
      <div className='content'>
        <p className='connect-text'>
          If you connect with other people on the website, you will get an
          invite each time your friend signs up to an event.
        </p>
        <div className='invite-friend'>
          <input type='text' placeholder='Username' />
          <p>Send request.</p>
        </div>
        <p className='connection-text'>Your connections</p>
        <div className='connections'>
          {
            connections.map((item, index) => {
              return (
                <ConnectionItem
                  first_name={item.user.first_name}
                  last_name={item.user.last_name}
                  user_photo={'/images/CatPhotoSample.jpg'}
                />
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

export default ConnectWithOthers;
