import React from "react";
import "./App.css";
import { Button1, Button2 } from "../common/Buttons";
import ToDoList from "../to-do/ToDoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button1 url="https://www.google.com" color="red" name="Google" />
        <Button2 url="https://www.facebook.com" color="green" name="Facebook" />
        <ToDoList />
      </header>
    </div>
  );
}

export default App;
