import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftPanel = (props) => {
  const { name = 'No Namer', level = 1 } = props;

  const [filters, setFilters] = useState([]);

  const onClickFilter = (filter) => {
    if (filters.includes(filter)) {
      const index = filters.indexOf(filter);
      setFilters([...filters.slice(0, index), ...filters.slice(index + 1)]);
    } else {
      setFilters([...filters, filter]);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  const renderChecks = () => {
    return (
      <>
        <label
          onClick={() => onClickFilter('approved')}
          htmlFor='approved-filter'>
          Open
          {filters.includes('approved') ? (
            <i name='approved-filter' className='fas fa-check' />
          ) : (
            <div className='unchecked-filter' />
          )}
        </label>
        <label
          onClick={() => onClickFilter('pending')}
          htmlFor='pending-filter'>
          Signing
          {filters.includes('pending') ? (
            <i name='pending-filter' className='fas fa-check pending' />
          ) : (
            <div className='unchecked-filter' />
          )}
        </label>
        <label onClick={() => onClickFilter('closed')} htmlFor='closed-filter'>
          Closed
          {filters.includes('closed') ? (
            <i name='closed-filter' className='fas fa-check closed' />
          ) : (
            <div className='unchecked-filter' />
          )}
        </label>
      </>
    );
  };

  const renderOthers = () => {
    return (
      <>
        <label onClick={() => onClickFilter('nearMe')} htmlFor='nearMe-filter'>
          Near me
          {filters.includes('nearMe') ? (
            <i name='nearMe-filter' className='fas fa-check' />
          ) : (
            <div className='unchecked-filter' />
          )}
        </label>
        <label
          onClick={() => onClickFilter('moreThan')}
          htmlFor='moreThan-filter'>
          > 10 people
          {filters.includes('moreThan') ? (
            <i name='moreThan-filter' className='fas fa-check pending' />
          ) : (
            <div className='unchecked-filter' />
          )}
        </label>
        <label
          onClick={() => onClickFilter('lessThan')}
          htmlFor='lessThan-filter'>
          > 10 people
          {filters.includes('lessThan') ? (
            <i name='lessThan-filter' className='fas fa-check closed' />
          ) : (
            <div className='unchecked-filter' />
          )}
        </label>
      </>
    );
  };

  const renderDates = () => {
    return (
      <>
        <div className='date-container'>
          <label htmlFor='fromDate' className='date'>
            From
            <input
              className='filter-date-input'
              name='fromDate'
              placeholder='DD/MM/YYYY'
            />
          </label>
          <label htmlFor='toDate' className='date'>
            To
            <input
              className='filter-date-input'
              name='toDate'
              placeholder='DD/MM/YYYY'
            />
          </label>
        </div>
      </>
    );
  };

  return (
    <div className='left-panel panel'>
      <div className='home-info'>
        <div className='user-photo'>
          <img src='/images/ForgotPassword.jpg' alt='User' />
          <div className='user-info'>
            <p className='info-label'>Name</p>
            <p className='info'>{name}</p>
            <div className='user-level'>
              <p className='info-label'>Level</p>
              <p className='info'>{level}</p>
            </div>
          </div>
        </div>
        <div className='left-panel-content'>
          <p>Filters</p>

          <div className='filters'>
            <div className='filters-check'>
              <div className='check-filters'>
                <p>Event type</p>
                {renderChecks()}
              </div>
              <div className='others-filters'>
                <p>Others</p>
                {renderOthers()}
              </div>
            </div>
            <div className='date-filters'>
              <p>Date</p>
              {renderDates()}
            </div>
          </div>
        </div>
        <div className='buttons'>
          <Link onClick={logout} to='/' className='btn'>
            Logout
          </Link>
          <Link to='/create-event' className='btn btn-event'>
            Create event
          </Link>
          <Link to='/profile/verify-number' className='btn btn-profile'>
            Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
