import React, { useState } from 'react';

const PlantingForm = (props) => {
  const { onClickCancel, onSubmit } = props;
  const [formData, setFormData] = useState({
    location: '',
    noPeople: '',
    noBags: '',
    locationDeposit: '',
    description: ''
  });
  const [errors, setErrors] = useState([]);

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    const validatedForm = Object.keys(formData).filter(
      (item) => formData[item].length === 0
    );
    setErrors(validatedForm);
    return validatedForm.length === 0;
  };

  const onClickSubmit = () => {
    if (validate(formData)) {
      onSubmit(formData, 'Cleaning');
    }
  };

  return (
    <div className='option planting-form recycling-form'>
      <h1>Cleaning Form</h1>
      <div className='content'>
        <input
          name='location'
          onChange={onChange}
          className={`location ${
            errors.includes('location') ? 'error-input' : ''
          }`}
          placeholder='Location (mandatory)'
        />
        <input
          name='noPeople'
          onChange={onChange}
          className={`${errors.includes('noPeople') ? 'error-input' : ''}`}
          placeholder='Number of people needed (mandatory)'
        />
        <input
          name='noBags'
          onChange={onChange}
          className={`${errors.includes('noBags') ? 'error-input' : ''}`}
          placeholder='Minimum number of bags needed (mandatory)'
        />
        <input
          name='locationDeposit'
          onChange={onChange}
          className={`${
            errors.includes('locationDeposit') ? 'error-input' : ''
          }`}
          placeholder='Location to deposit trash / recycle (mandatory)'
        />
        <textarea
          name='description'
          onChange={onChange}
          className={`${errors.includes('description') ? 'error-area' : ''}`}
          placeholder='Description (mandatory)'
        />
        <textarea
          name='requirements'
          onChange={onChange}
          placeholder='Requirements (optional)'
        />
      </div>
      <button
        onClick={onClickSubmit}
        className='planting-btn submit-btn recycling-btn'>
        Submit
      </button>
      <button onClick={onClickCancel} className='planting-btn recycling-btn'>
        Cancel
      </button>
    </div>
  );
};

export default PlantingForm;
