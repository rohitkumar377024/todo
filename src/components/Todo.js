import React, { useState } from 'react';

function Todo(props) {
  const [isChecked, setChecked] = useState(false);
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
        <p
          style={{
            textDecoration: isChecked && 'line-through',
            color: isChecked && 'red'
          }}
          className="todo-text"
        >
          {props.text}
        </p>
        <p className="todo-time">{props.time}</p>
      </div>
    </div>
  );
}

export default Todo;
