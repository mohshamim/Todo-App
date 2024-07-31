import { useState } from "react";
import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TodoForm addTask={addTask} />
      <TodoList
        tasks={tasks}
        deleteTask={deleteTask}
        completeTask={completeTask}
      />
    </div>
  );
}

export default App;
