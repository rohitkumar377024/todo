import React, { useState } from 'react';
import Todo from './components/Todo';

function App() {
  const [todos, setTodos] = useState([
    { text: 'r1', time: 'random 1' },
    { text: 'r2', time: 'random 2' },
    { text: 'r3', time: 'random 3' }
  ]);

  return (
    <div>
      {todos.map(todo => (
        <Todo text={todo.text} time={todo.time} />
      ))}
    </div>
  );
}

export default App;
