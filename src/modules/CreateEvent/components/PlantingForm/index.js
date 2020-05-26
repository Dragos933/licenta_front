import React, { useState } from 'react';

const PlantingForm = (props) => {
  const { onClickCancel, onSubmit } = props;
  const [formData, setFormData] = useState({
    location: '',
    noPeople: '',
    noTrees: '',
    typeTree: '',
    description: '',
    eventDate: ''
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
      onSubmit(formData, 'Planting');
    }
  };

  return (
    <div className='option planting-form'>
      <h1>Planting Form</h1>
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
          name='noTrees'
          onChange={onChange}
          className={`${errors.includes('noTrees') ? 'error-input' : ''}`}
          placeholder='Minimum number of trees needed (mandatory)'
        />
        <input
          name='eventDate'
          onChange={onChange}
          className={`${errors.includes('eventDate') ? 'error-input' : ''}`}
          placeholder='Date of event: YYYY-MM-DD (mandatory)'
        />
        <input
          name='typeTree'
          onChange={onChange}
          className={`${errors.includes('typeTree') ? 'error-input' : ''}`}
          placeholder='Type of tree (mandatory)'
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
      <button onClick={onClickSubmit} className='planting-btn submit-btn'>
        Submit
      </button>
      <button onClick={onClickCancel} className='planting-btn'>
        Cancel
      </button>
    </div>
  );
};

export default PlantingForm;
