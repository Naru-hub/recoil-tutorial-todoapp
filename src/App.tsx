import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import InputTask from "./components/InputTask";

function App() {
  return (
    <div className="task">
      <InputTask />
      <AddTask />
    </div>
  );
}

export default App;
