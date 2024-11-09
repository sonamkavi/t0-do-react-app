// src/components/TodoForm.jsx
import { useState, useEffect } from 'react';

const TodoForm = ({ addTodo, editing, editingText, handleEditSubmit }) => {
  const [task, setTask] = useState('');

  useEffect(() => {
    if (editing) {
      setTask(editingText);
    } else {
      setTask('');
    }
  }, [editing, editingText]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    if (editing) {
      handleEditSubmit(task);
    } else {
      addTodo(task);
    }

    setTask('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Add or edit a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="input-field"
      />
      <button type="submit" className="submit-btn">
        {editing ? 'Update' : 'Add'}
      </button>
    </form>
  );
};

export default TodoForm;
