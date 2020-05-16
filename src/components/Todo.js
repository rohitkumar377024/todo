import React, { useState } from 'react';

function Todo(props) {
  const [isChecked, setChecked] = useState(false);

  const checkedStyle = {
    textDecoration: 'line-through',
    color: 'red'
  };

  function handleClick() {
    setChecked(prev => !prev);
  }

  return (
    <div className="todo-container">
      <input
        className="todo-checkbox"
        type="checkbox"
        checked={isChecked}
        onClick={handleClick}
      />
      <div className="todo-info">
        <p style={isChecked ? checkedStyle : null} className="todo-text">
          {props.text}
        </p>
        <p className="todo-time">{props.time}</p>
      </div>
    </div>
  );
}

export default Todo;
