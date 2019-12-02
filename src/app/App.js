import React from "react";
import "./App.css";
import { Button1, Button2 } from "../common/Buttons";
import ToDoList from "../to-do/ToDoList";
import ScrollStatus from "../scroll-status/ScrollStatus.jsx";
import StickyNav from "../sticky-nav/StickyNav";
import ToDoReducerComponent from "../to-do/ToDoReducerComponent";

function App() {
  return (
    <div className="App">
      <ScrollStatus></ScrollStatus>
      <header className="App-header">
        <Button1 url="https://www.google.com" color="red" name="Google" />
        <Button2 url="https://www.facebook.com" color="green" name="Facebook" />
        <ToDoList />
        <br />
        <ToDoReducerComponent />
        <br />
        <StickyNav>
          <div className="navigation">
            <p>sticky nav1</p>
            <p>sticky nav2</p>
            <p>sticky nav3</p>
          </div>
        </StickyNav>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </header>
    </div>
  );
}

export default App;
