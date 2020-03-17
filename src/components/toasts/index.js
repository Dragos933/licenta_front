import React from 'react';
import classnames from 'classnames';

const Toast = (props) => {
  const { toastMsg, className, errors } = props;
  console.log(errors);
  return (
    <div
      className={classnames('toast-msg-container', className, {
        shrink: errors
      })}>
      <p className='toast-msg'>{toastMsg}</p>
    </div>
  );
};

export default Toast;
