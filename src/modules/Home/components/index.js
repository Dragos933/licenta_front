import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Footer from '../../../components/footer/index';
import LeftPanel from './LeftPanel/index';
import MiddlePanel from './MiddlePanel/index';
import RightPanel from './RightPanel/index';
import { days, weekDays } from '../../../utils/constants';
import {
  getUserInvitations,
  getUserApplications,
  getUserEvents,
  getCalendarData
, getUserConnections } from '../../../api/home';
import EventsModal from '../../../components/eventsModal';


const formatData = (data, title) => {
  return data.map((item) => {
    return {
      title: title === 'Event' ? `${item.event_type} Event` : title,
      date: item.date || item.date_open,
      location: item.location,
      status: item.status,
      event_id: item.event ? item.event.id : item.id
    };
  });
};

const formatDays = (data) => {
  const dates = [];

  data.filter((item) => {
    if (!dates.includes(item.date_open)) {
      return dates.push(item.date_open);
    }
  });
  const toReturn = [];
  for (let i = 0; i < dates.length; i++) {
    let str = '';
    data.map((item) => {
      const { location } = item.planting_event || item.recycling_event;
      if (item.date_open === dates[i]) {
        str += `${item.id}|${item.event_type}|${location}|${item.status}|${item.date_open};`;
      }
      return null;
    });
    toReturn.push(str.slice(0, str.length - 1));
  }
  return toReturn;
};

const formatConnections = (connections) => {
  return connections.map((item) => {
    return {
      title: 'Connection',
      user_id: item.user.id,
      date: item.date,
      email: item.user.email,
      username: item.user.username
    };
  });
};

const Home = (props) => {
  const [user] = useState(JSON.parse(localStorage.getItem('user')));
  const [data, setData] = useState([]);
  const [calendarData, setCalendarData] = useState([]);
  const [errors, setErrors] = useState([]);
  const [displayDate, setDisplayDate] = useState(moment(new Date()));
  const [isOpen, setOpen] = useState(false);
  const [selectedEvents, setSelectedEvents] = useState([]);

  useEffect(() => {
    const getAllData = async () => {
      try {
        const invitations = await getUserInvitations(user.id);
        const formatedInvitations = formatData(invitations.data, 'Invitation');
        const applications = await getUserApplications(user.id);
        const formatedApplications = formatData(
          applications.data,
          'Application'
        );
        const events = await getUserEvents(user.id);
        const formatedEvents = formatData(events.data, 'Event');
        const connections = await getUserConnections(user.username);
        const formatedConnections = formatConnections(connections.data);
        setData([
          ...formatedApplications,
          ...formatedInvitations,
          ...formatedEvents,
          ...formatedConnections
        ]);
      } catch (error) {
        setErrors(error);
      }
    };
    getAllData();
  }, [user.id, user.username]);

  useEffect(() => {
    const fillCalendar = async () => {
      try {
        const res = await getCalendarData(
          user.id,
          `${
            displayDate.get('month') < 10
              ? `0${  displayDate.get('month') + 1}`
              : displayDate.get('month') + 1
          }`
        );
        const formatedData = formatDays(res.data);
        setCalendarData(formatedData);
      } catch (error) {
        setErrors(error);
      }
    };
    fillCalendar();
  }, [displayDate, user.id]);

  const onClickEvent = (events) => {
    setSelectedEvents(events);
    setOpen(true);
  };

  const onClickNav = (monthValue) => {
    setDisplayDate(moment(displayDate).add(monthValue, 'month'));
  };

  const onClickClose = () => {
    setOpen(false);
  };

  return (
    <div className='home-container'>
      <div className='panel-container'>
        <LeftPanel />
        <MiddlePanel data={data} />
        <RightPanel
          days={days}
          weekDays={weekDays}
          onClickEvent={onClickEvent}
          onClickNav={onClickNav}
          calendarDays={calendarData}
          displayDate={displayDate}
        />
      </div>
      {isOpen ? (
        <>
          <EventsModal
            onClickClose={onClickClose}
            selectedEvents={selectedEvents}
          />
          <div className='events-filter' />
        </>
      ) : null}

      <Footer />
    </div>
  );
};

export default Home;
