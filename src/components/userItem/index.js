import React from 'react';

const UserItem = (props) => {
  const { user_id, contribution, type, name, onClickApply } = props;
  return (
    <div className="user-item-container">
      {
        user_id
        ? <div className="signed-user">
            <img src="/images/CatPhotoSample.jpg"/>
            <p className="user-name">{name}</p>
            <p> Contributes with: {contribution ? contribution : '0'} {type === 'planting' ? 'trees' : 'bags'}</p>
          </div>
        : <div className="empty-place">
            <i onClick={onClickApply} className="fas fa-plus"></i>
            <p>Apply</p>
          </div>
      }
    </div>
  );
}

export default UserItem;