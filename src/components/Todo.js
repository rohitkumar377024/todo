import React, { useState } from 'react';

function Todo() {
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
          Do Something.
        </p>
        <p className="todo-time">Wed, May 13.</p>
      </div>
    </div>
  );
}

export default Todo;
