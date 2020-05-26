import React from 'react';

const EventsModal = (props) => {
  const { selectedEvents = [], date = '2020-05-05', onClickClose } = props;
  return (
    <div className='events-modal-container'>
      <i onClick={onClickClose} className='fas fa-times' />
      <h1 className='events-title'>Events</h1>
      <p className='events-date'>{date}</p>
      {selectedEvents.map((item, index) => {
        const [event_id, type, location, status, date] = item.split('|');
        return (
          <div className='events-modal-item' key={index}>
            <p>
Status:
              {status}
            </p>
            <p>
Type:
              {type}
            </p>
            <p>
Location:
              {location}
            </p>
            <p className='item-details'>See details</p>
          </div>
        );
      })}
    </div>
  );
};

export default EventsModal;
