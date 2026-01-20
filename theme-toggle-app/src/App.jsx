import { useState } from "react";
import "./App.css";

function App() {
  const [dark, setDark] = useState(false);

  const themeStyles = {
    backgroundColor: dark ? "#1a1a1a" : "#ffffff",
    color: dark ? "#ffffff" : "#1a1a1a",
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.3s ease" // Smooth transition between themes
  };

  return (
    <div style={themeStyles}>
      <h2>Theme Toggle SPA</h2>
      <p>The current theme is {dark ? "Dark" : "Light"}</p>
      <button 
        onClick={() => setDark(!dark)}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
          backgroundColor: dark ? "#ffffff" : "#1a1a1a",
          color: dark ? "#1a1a1a" : "#ffffff",
          border: "none",
          borderRadius: "5px",
          fontWeight: "bold"
        }}
      >
        Switch to {dark ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default App;