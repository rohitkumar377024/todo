import React from 'react';
import { Checkbox } from '@material-ui/core';

function App() {
  return (
    <div className="todo-container">
      <input className="todo-checkbox" type="checkbox" />
      <div className="todo-info">
        <p className="todo-text">Buy Milk</p>
        <p className="todo-time">Mon, Apr 30</p>
      </div>
    </div>
  );
}

export default App;
