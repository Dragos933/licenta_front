import React from 'react';
import moment from 'moment';

const getRandomInt = () => {
  return Math.floor(Math.random() * (29 - 23) + 23);
}

const CardItem = (props) => {
  const { onClickCancel, title = 'No title', date = 'No date', status = 'No status', event_id, location = 'No location mentioned' } = props;
  return (
    <div className="card-item">
      <i onClick={() => onClickCancel(event_id)} className="fas fa-times close-icon"></i>
      <img src={`/images/Sample0${getRandomInt()}.png`} alt="Card-item"/>
      <div className="card-content">
        <p className="title"><em>{title}</em></p>
        <div className='card-detail'>
          <p className="detail-label"><em>Location:</em></p>
          <p className="detail-info">{location.length > 19 ? `${location.slice(0, 20)}...` : location}</p>
        </div>
        <div className='card-detail'>
          <p className="detail-label"><em>Date:</em></p>
          <p className="detail-info">{moment(date).format('DD MMM YYYY')}</p>
        </div>
        <div className='card-detail'>
          <p className="detail-label"><em>Status:</em></p>
          <p className="detail-info">{status}</p>
        </div>
      </div>
      <p className="see-details">
        <span>See details</span>
        <i className="fas fa-arrow-right"></i>
      </p>
    </div>
  );
}

export default CardItem;
