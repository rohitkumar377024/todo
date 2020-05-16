import React, { useState } from 'react';

function Adder(props) {
  const [inputs, setInputs] = useState({
    text: '',
    time: ''
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInputs(prev => {
      return {
        ...prev,
        [name]: value
      };
    });
  }

  return (
    <div className="adder-container">
      <input
        className="adder-text"
        onChange={handleChange}
        type="text"
        name="text"
      />
      <input
        className="adder-time"
        onChange={handleChange}
        type="text"
        name="time"
      />
      <button
        className="adder-btn"
        onClick={() => {
          props.onAdd(inputs);
        }}
      >
        Add
      </button>
    </div>
  );
}

export default Adder;
