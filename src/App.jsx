import React from "react";
import Todo from "./components/Todo";

const App = () => {
  return (
    <div
      className="grid py-4 min-h-screen"
      style={{
        background: "linear-gradient(135deg, #ffb3c6, #CAB8FF)",
        color: "#333333",
      }}
    >
      <Todo />
    </div>
  );
};

export default App;
