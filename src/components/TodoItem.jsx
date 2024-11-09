// src/components/TodoItem.jsx
const TodoItem = ({ todo, deleteTodo, startEditing }) => {
    return (
      <li className="todo-item">
        <span>{todo.text}</span>
        <div className="buttons">
          <button onClick={() => startEditing(todo)} className="edit-btn">Edit</button>
          <button onClick={() => deleteTodo(todo.id)} className="delete-btn">Delete</button>
        </div>
      </li>
    );
  };
  
  export default TodoItem;
  