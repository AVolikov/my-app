import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button1, Button2 } from "./Buttons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button1 url="https://www.google.com" color="red" name="Google" />
        <Button2 url="https://www.facebook.com" color="green" name="Facebook" />

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload!!!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
