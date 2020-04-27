import React from 'react';

const ConnectionItem = (props) => {
  const { first_name, last_name, user_photo } = props;

  return (
    <div className='connection-item-container'>
      {user_photo ? (
        <img src={user_photo} alt='User' />
      ) : (
        <i className='fas fa-user-circle' />
      )}
      <p>{`${first_name ? `${first_name[0]}.` : ''} ${last_name}`}</p>
    </div>
  );
};

export default ConnectionItem;
