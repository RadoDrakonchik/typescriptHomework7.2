import { useState, type ChangeEvent, type FormEvent } from 'react';
import type { Todo } from './types';
import { Button } from './Button';
import './App.css';

function App() {
  // Типизируем useState: массив объектов Todo
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const addTodo = (e: FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newTodo: Todo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="container">
      <h1>TS Todo App</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={inputValue}
          // Типизируем событие ввода
          onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
        />
        <Button onClick={() => {}} variant="primary">Добавить</Button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;