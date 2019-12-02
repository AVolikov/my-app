import React, { useEffect } from "react";
import { getTasks } from "../actions/todo.actions";

//redux
import { connect } from "react-redux";

const ToDoReducerComponent = props => {
  useEffect(props.getTasks, []);

  return (
    <div className="Todo">
      <div className="todo-list">
        <div>
          <h2 className="title">ToDoReducer</h2>
          <section className="body">
            <ul className="list">
              {props.list.map(item => {
                return (
                  <div>
                    text:{item.text}, isDone:{item.isDone ? "true" : "false"}
                  </div>
                );
              })}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    list: state.list
  };
};

const mapDispatchToProps = { getTasks };

//export default App;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoReducerComponent);
