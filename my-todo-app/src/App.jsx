import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]); // State initialized as an empty array
  const [inputValue, setInputValue] = useState(""); // State for the text input

  const addTask = () => {
    if (inputValue.trim() === "") return;
    const newTask = { id: Date.now(), text: inputValue };
    setTasks([...tasks, newTask]); 
    setInputValue(""); // Reset input field
  };

  const deleteTask = (id) => {
    // Filter creates a new array excluding the item with the matching ID
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

return (
  <div className="container">
    <h2>To-Do List SPA</h2>
    
    <div className="input-group">
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Enter a task..."
      />
      <button className="add-btn" onClick={addTask}>Add</button>
    </div>

    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span>{task.text}</span>
          <button className="delete-btn" onClick={() => deleteTask(task.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);
}

export default App;