// src/App.jsx
import { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './styles.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editingTodo, setEditingTodo] = useState(null);

  // Fetch todos from localStorage when the component mounts
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  const addTodo = (task) => {
    const newTodo = { id: Date.now(), text: task };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const startEditing = (todo) => {
    setEditing(true);
    setEditingTodo(todo);
  };

  const handleEditSubmit = (newText) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === editingTodo.id ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
    setEditing(false);
    setEditingTodo(null);
  };

  return (
    <div className="app-container">
      <h1>To-Do List</h1>
      <TodoForm
        addTodo={addTodo}
        editing={editing}
        editingText={editingTodo ? editingTodo.text : ''}
        handleEditSubmit={handleEditSubmit}
      />
      <TodoList todos={todos} deleteTodo={deleteTodo} startEditing={startEditing} />
    </div>
  );
}

export default App;
