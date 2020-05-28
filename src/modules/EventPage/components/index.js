import React, { useState, useEffect } from 'react';
import Footer from '../../../components/footer/index';
import { getEvent, closeEvent, contributeToEvent, applyToEvent, acceptInvitation } from '../../../api/eventPage';
import UserItem from '../../../components/userItem/index';
import { Link } from 'react-router-dom';
import ContributeModal from '../../../components/contributeModal';
import moment from 'moment';
import ResponseToast from '../../../components/responseToast';

const formatApplicants = (contributions, applicants) => {
  const res = [];
  if (contributions.length === 0 && applicants.length > 0) {
    return applicants;
  }
  for (let i = 0; i < applicants.length; i++) {
    for (let j = 0; j < contributions.length; j++) {
      if (applicants[i].user === contributions[j].user) {
        res.push({
          ...applicants[i],
          contribution: contributions[j].noTrees ? contributions[j].noTrees : contributions[j].noBags ? contributions[j].noBags : 0
        });
      }
    }
  }
  return res;
}

const getTotalContributions = (contributions) => {
  let total = 0;
  for (let i = 0; i < contributions.length; i++) {
    if (contributions[i].noBags) {
      total += contributions[i].noBags
    } else {
      total += contributions[i].noTrees
    }
  }
  return total;
}

const EventPage = () => {
  const [user] = useState(JSON.parse(localStorage.getItem('user')));
  const [event, setEvent] = useState({});
  const [errors, setErrors] = useState([]);
  const [isUsers, setIsUsers] = useState(false);
  const [applicants, setApplicants] = useState([]);
  const [noContributions, setNoContributions] = useState(0);
  const [hasClosed, setHasClosed] = useState(false);
  const [isContributing, setIsContributing] = useState(false);
  const [hasContributed, setHasContributed] = useState(false);
  const [hasApplied, setHasApplied] = useState(false);
  const [hasAppliedNow, setHasAppliedNow] = useState(false);
  const [isInvited, setIsInvited] = useState(false);
  const [acceptedInvite, setAcceptedInvite] = useState(false);
  const [inviteId, setInviteId] = useState('');

  useEffect(() => {
    const getEventData = async () => {
      try {
        const res = await getEvent(window.location.href.split('/')[4]);
        setEvent(res.data);
        if (res.data.user.id === user.id) {
          setIsUsers(true);
        } else {
          setIsUsers(false);
        }
        if (res.data.applications) {
          const applicants = formatApplicants(res.data.contributions, res.data.applications)
          const totalNoContributions = getTotalContributions(res.data.contributions);
          res.data.applications.map(item => {
            if (item.user === user.id && item.status === 'Pending') {
              setHasApplied(true);
            }
          })
          res.data.invitations.map(item => {
            if (item.user === user.id) {
              if (item.status === 'Pending') {
                setIsInvited(true);
              } else {
                setIsInvited(false);
              }
              
              setInviteId(item.id);
            }
          })
          setNoContributions(totalNoContributions);
          setApplicants(applicants);
        } else {
          setApplicants([]);
        }
      } catch (error) {
        setErrors([error]);
      }
    }
    getEventData();
  }, []);
  
  const closeEventClick = async () => {
    try {
      await closeEvent(event.id, {
        status: 'Closed',
      })
      setAcceptedInvite(false);
      setHasAppliedNow(false);
      setHasContributed(false);
      setHasClosed(true);
    } catch (error) {
      setErrors([error]);
    }
  }

  const closeModal = () => {
    setIsContributing(false);
  }

  const submitModal = async (amount) => {
    setIsContributing(false);
    try {
      await contributeToEvent({
        amount,
        event_id: event.id,
        user_id: user.id,
        type: event.planting_event ? 'noTrees' : 'noBags',
        date: moment().format(),
      })
      setNoContributions(noContributions + parseInt(amount, 10));
      setAcceptedInvite(false);
      setHasClosed(false);
      setHasAppliedNow(false);
      setHasContributed(true);
    } catch (error) {
      setErrors([error]);
    }
  }

  const onApply = async () => {
    try {
      await applyToEvent({
        status: 'Accepted',
        date: moment().format(),
        username: user.username,
        user: user.id,
        event: event.id,
      });
      setAcceptedInvite(false);
      setHasClosed(false);
      setHasContributed(false);
      setHasAppliedNow(true);
    } catch (error) {
      setErrors([error]);
    }
  }

  const acceptInvite = async () => {
    try {
      await acceptInvitation(inviteId, {
        status: 'Accepted',
      });
      await applyToEvent({
        status: 'Accepted',
        date: moment().format(),
        username: user.username,
        user: user.id,
        event: event.id,
      })
      setHasClosed(false);
      setHasContributed(false);
      setHasAppliedNow(false);
      setAcceptedInvite(true);
    } catch (error) {
      setErrors([error]);
    }
  }

  return (
    <div className="event-page-container">
      <div className="content">
        {
          errors.length > 0 || hasAppliedNow || hasContributed || hasClosed || acceptedInvite ? (
            <ResponseToast
              type={hasAppliedNow || hasContributed || hasClosed || acceptedInvite ? 'success' : 'error'}
              message={
                errors.length > 0
                ? errors[0] 
                : hasAppliedNow
                  ? 'Successfully applied to the event!'
                  : hasContributed
                    ? 'Successfully contributed to the event!'
                    : hasClosed
                      ? 'Successfully closed the event'
                      : acceptedInvite
                        ? 'Successfully accepted the invite!'
                        : ''
              }
              className='create-event-toast'
            />
          ) : null
          }
        {
          isContributing
          ? <>
            <div className="filter"></div>
            <ContributeModal
              onClickClose={closeModal}
              onClickSubmit={submitModal}
            />
          </>
          : null
        }
        <div className="event-details">
          <h1>Event type: {event.event_type} event</h1>
          <div className="buttons">
            {
              isUsers && event.status === 'Open'
              ? <p onClick={closeEventClick} className="close">Close event</p>
              : null
            }
            {
              isInvited && !acceptedInvite
              ? <p onClick={acceptInvite} className="invitation">Accept invite</p>
              : null
            }
            {
              event.status === 'Open'
              ? <p onClick={() => setIsContributing(true)}>Contribute</p>
              : null
            }
          </div>
          <div className="event-labels">
            <p className="label">Status: </p>
            <p className="label">Date: </p>
            <p className="label">Location: </p>
            <p className="label">Number of people needed: </p>
            {
              event.planting_event
              ? <p className="label">Number of trees needed</p>
              : <p className="label">Number of bags needed</p>
            }
            <p className="label">Description: </p>
            <p className="label">Requirements: </p>
            {
              event.planting_event
              ? <p className="label">Type of tree: </p>
              : <p className="label">Location to deposit: </p>
            }
          </div>
          <div className="event-info">
            <p className="info">{event.status}</p>
            <p className="info">{event.date_open}</p>
            <p className="info">{event.planting_event ? event.planting_event.location : event.recycling_event ? event.recycling_event.location : ''}</p>
            <p className="info"> {event.planting_event ? event.planting_event.noPeople : event.recycling_event ? event.recycling_event.noPeople : ''}</p>
            {
              event.planting_event
              ? <p className="info">{event.planting_event.noTrees}</p>
              : <p className="info">{event.recycling_event ? event.recycling_event.noBags : ''}</p>
            }
            <p className="info">{event.planting_event ? event.planting_event.description : event.recycling_event ? event.recycling_event.description : ''}</p>
            <p className="info">{event.planting_event ? event.planting_event.requirements : event.recycling_event ? event.recycling_event.requirements : ''}</p>
            {
              event.planting_event
              ? <p className="info">{event.planting_event.typeTree}</p>
              : <p className="info">{event.recycling_event ? event.recycling_event.locationDeposit : ''}</p>
            }
          </div>
        </div>
        <div className="event-participants">
            <div className="participants-info">
            <p className="info"> {applicants.length}/{event.planting_event ? event.planting_event.noPeople : event.recycling_event ? event.recycling_event.noPeople : ''} People signed up</p>
              {
                event.planting_event
                ? <p className="info">{noContributions}/{event.planting_event.noTrees} Trees</p>
                : <p className="info">{noContributions}/{event.recycling_event ? event.recycling_event.noBags : ''} Bags</p>
              }
            </div>
            <div className="participants">
              {
                applicants.map((item, index) => {
                  return (
                    <UserItem
                      key={index}
                      contribution={item.contribution}
                      user_id={item.user}
                      name={item.username}
                      type={event.planting_event ? 'planting' : 'cleaning'}
                    />
                  )
                })
              }
              {
                event.status === 'Open' && !hasApplied
                ? <UserItem
                    onClickApply={onApply}
                  />
                : null
              }
            </div>
        </div>
        <div className="navigation">
          <Link to='/home'>Home</Link>
          <Link to='/profile' className='profile'>
            Profile
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EventPage