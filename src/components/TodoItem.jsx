function TodoItem({ task, deleteTask, completeTask }) {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => completeTask(task.id)}
      />
      <span className={task.completed ? "completed" : null}>{task.text}</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
