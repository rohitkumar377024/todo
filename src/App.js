import React, { useState } from 'react';
import Header from './components/Header';
import Adder from './components/Adder';
import Todo from './components/Todo';

function App() {
  const [todos, setTodos] = useState([
    { text: 'Buy Kit Kat.', time: '13 May, 2020' },
    { text: 'Feed Kitty.', time: '14 May, 2020' },
    { text: 'Go to South Ex.', time: '16 May, 2020' }
  ]);

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
