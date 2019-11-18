import React from "react";
import "./App.css";
import { Button1, Button2 } from "../common/Buttons";
import ToDoList from "../to-do/ToDoList";
import ScrollStatus from "../scroll-status/ScrollStatus.jsx";

function App() {
  return (
    <div className="App">
      <ScrollStatus></ScrollStatus>
      <header className="App-header">
        <Button1 url="https://www.google.com" color="red" name="Google" />
        <Button2 url="https://www.facebook.com" color="green" name="Facebook" />
        <ToDoList />
      </header>
    </div>
  );
}

export default App;
