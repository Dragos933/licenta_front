import React from 'react';

const ResponseToast = (props) => {
  const { type, message, className } = props;

  return (
    <div
      className={`resToast-container
      ${type === 'error' ? 'toast-error' : 'toast-success'}
      ${className}`}>
      <i
        className={`${type === 'error' ? 'fas fa-times' : 'fas fa-check'}`} />
      <p className='toast-message'>{message}</p>
    </div>
  );
};

export default ResponseToast;
