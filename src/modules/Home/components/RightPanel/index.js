import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const RightPanel = (props) => {
  const { calendarDays, onClickEvent, displayDate, onClickNav } = props;
  const { days, weekDays } = props;

  const checkDayName = (day) => {
    if (day === 'Sun' || day === 'Sat') {
      return 'day-name-week';
    }
    return '';
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  const renderDays = () => {
    const startOfMonth = moment(displayDate)
      .startOf('month')
      .format();
    const endOfMonth = moment(displayDate)
      .endOf('month')
      .format();
    const startWeekDay = moment(startOfMonth).weekday();
    let start = 0;
    return days().map((item, index) => {
      if (index < startWeekDay || start >= moment(endOfMonth).get('date')) {
        return (
          <span className='day hide-days' key={index}>
            {item}
          </span>
        );
      }
      start++;

      for (let i = 0; i < calendarDays.length; i++) {
        const events = calendarDays[i].split(';');
        const date = events[0].split('|')[4];
        const day = parseInt(date.split('-')[2], 10);
        if (parseInt(day, 10) === start) {
          const evLen = events;
          return (
            <div key={index} className='event-container'>
              <span
                onClick={() => onClickEvent(events)}
                className='day event-day'
                key={index}>
                <span>{start}</span>
              </span>
              <div className='event-details'>
                <span>
                  {`There ${evLen.length === 1 ? 'is' : 'are'} ${
                  evLen.length
                } ${evLen.length === 1 ? 'event' : 'events'} today!`}
                </span>
              </div>
            </div>
          );
        }
      }
      return (
        <span className='day work-day' key={index}>
          <span>{start}</span>
        </span>
      );
    });
  };

  const changeDate = (monthValue) => {
    onClickNav(monthValue);
  };

  return (
    <div className='right-panel panel'>
      <div className='home-calendar'>
        <div className='calendar-control'>
          <i onClick={() => changeDate(-1)} className='fas fa-angle-left' />
          <p className='title'>{moment(displayDate).format('MMM YYYY')}</p>
          <i onClick={() => changeDate(1)} className='fas fa-angle-right' />
        </div>
        <div />
        <div className='calendar'>
          {weekDays.map((item, index) => {
            return (
              <span className={`day-name ${checkDayName(item)}`} key={index}>
                {item}
              </span>
            );
          })}
          {renderDays()}
        </div>
      </div>
      <div className='buttons'>
        <Link to='/profile' className='btn btn-profile'>
          Profile
        </Link>
        <Link to='/create-event' className='btn btn-event'>
          Create event
        </Link>
        <Link onClick={logout} to='/' className='btn'>
          Logout
        </Link>
      </div>
    </div>
  );
};

export default RightPanel;
