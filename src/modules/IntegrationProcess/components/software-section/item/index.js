import React from 'react';

const Item = (props) => {
  const {
    text,
    className,
    isActive,
    description = 'Description',
    furtherDescription = '',
    onClickItem,
    animation,
    screenWidth
  } = props;

  return (
    <div
      onClick={
        screenWidth <= 768
          ? () => onClickItem({ text, description, type: 'open' })
          : () => {}
      }
      className={`item-container ${className} ${animation} ${
        isActive ? 'expand' : 'shrink'
      }`}>
      {!isActive && screenWidth > 768 ? (
        <i
          onClick={() => onClickItem({ text, description, type: 'open' })}
          className='fas fa-expand expand-icon'></i>
      ) : null}
      <div className='info-container'>
        <p className={`item-text ${isActive ? 'change-title' : ''}`}>{text}</p>
        {isActive ? (
          <>
            <p className='item-description show-description'>{description}</p>
            <p className='item-description show-description item-further-description'>
              {furtherDescription}
            </p>
          </>
        ) : null}
      </div>
      {isActive ? (
        <>
          <div className='in-progress-container'>
            <img
              alt='In Progress'
              src='/images/progress.png'
              className='item-video'
            />
            <p>Video to be released soon.</p>
          </div>
          <i
            onClick={() => onClickItem({ text, description, type: 'close' })}
            className='fas fa-times close-icon'></i>
        </>
      ) : null}
    </div>
  );
};

export default Item;
