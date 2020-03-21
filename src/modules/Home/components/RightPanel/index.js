import React, { useState } from 'react';
import moment from 'moment';

const RightPanel = (props) => {
  const { selectedDaysProps } = props;
  const { days, weekDays } = props;
  const [today] = useState(moment(new Date()));
  const [displayDate, setDisplayDate] = useState(today);
  const [selectedDays, setSelectedDays] = useState([...selectedDaysProps]);

  const checkDayName = (day) => {
    if (day === 'Sun' || day === 'Sat') {
      return 'day-name-week';
    }
    return '';
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
      const date = moment(startOfMonth).add(start - 1, 'days');
      if (date.weekday() === 0 || date.weekday() === 6) {
        return (
          <span className='day week-day' key={index}>
            <span>{start}</span>
          </span>
        );
      }
      for (let i = 0; i < selectedDays.length; i++) {
        if (selectedDays[i].includes(start)) {
          const values = selectedDays[i].split(';');
          if (values[1] === 'pending') {
            return (
              <span className='day pending' key={index}>
                <span>{start}</span>
              </span>
            );
          }
          if (values[1] === 'open') {
            return (
              <span className='day open' key={index}>
                <span>{start}</span>
              </span>
            );
          }
          return (
            <span className='day closed' key={index}>
              <span>{start}</span>
            </span>
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
    setDisplayDate(moment(displayDate).add(monthValue, 'month'));
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
    </div>
  );
};

export default RightPanel;
