import { useState } from "react";
import "./App.css"; // <--- Ensure this line exists!

function App() {
  const [count, setCount] = useState(67);

  return (
    <div className="center-wrapper"> 
      <h2>Counter SPA</h2>
      <p style={{ color: count < 0 ? "#f44336" : "#4caf50" }}>
  Count : {count}
</p>
      <div className="button-group">
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
  );
}

export default App;