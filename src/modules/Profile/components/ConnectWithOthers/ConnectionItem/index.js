import React from 'react';

const ConnectionItem = (props) => {
  const { name, user_photo } = props;

  return (
    <div className='connection-item-container'>
      <i className='fas fa-user-circle' />
      <p>{name}</p>
    </div>
  );
};

export default ConnectionItem;
