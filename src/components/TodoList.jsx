// src/components/TodoList.jsx
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo, startEditing }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} startEditing={startEditing} />
      ))}
    </ul>
  );
};

export default TodoList;
