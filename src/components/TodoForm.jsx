import { useState } from "react";
import "../App.css";

function TodoForm({ addTask }) {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(inputText);
    setInputText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Add a task"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
