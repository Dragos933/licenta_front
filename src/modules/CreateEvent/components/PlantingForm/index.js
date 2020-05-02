import React from 'react';

const PlantingForm = (props) => {
  const { onClickCancel } = props;

  return (
    <div className='option planting-form'>
      <h1>Planting Form</h1>
      <div className="content">
        <input placeholder="Location"></input>
        <textarea placeholder="Description"></textarea>
        <textarea placeholder="Requirements"></textarea>
        <div className="photo-container">
          <p></p>
          <div className="photo before">
            <i className="fas fa-plus"></i>
          </div>
        </div>
        <div className="photo before"><i className="fas fa-plus"></i></div>
      </div>
      <button onClick={onClickCancel} className="planting-btn submit-btn">Submit</button>
      <button onClick={onClickCancel} className="planting-btn">Cancel</button>
    </div>
  );
}

export default PlantingForm;