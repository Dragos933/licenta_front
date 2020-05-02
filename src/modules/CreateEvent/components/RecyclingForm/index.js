import React from 'react';

const PlantingForm = (props) => {
  const { onClickCancel } = props;

  return (
    <div className='option planting-form recycling-form'>
      <h1>Recycling Form</h1>
      <button onClick={onClickCancel} className="planting-btn submit-btn recycling-btn">Submit</button>
      <button onClick={onClickCancel} className="planting-btn recycling-btn">Cancel</button>
    </div>
  );
}

export default PlantingForm;