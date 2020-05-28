import React, { useState } from 'react';

const ContributeModal = (props) => {
  const { onClickClose, onClickSubmit } = props;
  const [amount, setAmount] = useState(0);

  const onChange = (e) => {
    setAmount(e.target.value)
  }

  const onSubmit = () => {
    if (amount > 0 && amount) {
      onClickSubmit(amount);
    }
  }

  return (
    <div className="contribution-container">
      <h1>Contribute</h1>
      <i onClick={onClickClose} className='fas fa-times' />
      <p>Amount:</p>
      <input onChange={onChange} type="text"/>
      <button onClick={onSubmit}>Submit</button>
    </div>
  )
}

export default ContributeModal;