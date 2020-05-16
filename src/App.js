import React, { useState } from 'react';
import Header from './components/Header';
import Adder from './components/Adder';
import Todo from './components/Todo';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => setTodos([...todos, todo]);

  return (
    <div className="main-container">
      <Header />
      <Adder onAdd={addTodo} />
      {todos.map(todo => (
        <Todo text={todo.text} time={todo.time} />
      ))}
    </div>
  );
}

export default App;
