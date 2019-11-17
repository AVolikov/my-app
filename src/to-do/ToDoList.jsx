import React from "react";
import axois from "axios";
import Axios from "axios";
import ListItem from "./ListItem";

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: []
    };
  }

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  changeStatus = (id, isDone) => {
    const { list } = this.state;
    axois
      .put(`http://159.69.85.4:7777/api/alexey/tasks/${id}`, {
        isDone: !isDone
      })
      .then(response => {
        console.log(response.data);
        this.setState({
          list: list.map(item => {
            return {
              ...item,
              isDone: id === item.id ? !item.isDone : item.isDone
            };
          })
        });
      });
  };

  addItem = () => {
    const { inputValue, list } = this.state;
    Axios.post("http://159.69.85.4:7777/api/alexey/tasks", {
      text: inputValue,
      isDone: false
    }).then(response => {
      console.log(response);
      this.setState({ list: [...list, response.data] });
    });
  };

  onItemChange = (id, value) => {
    const { list } = this.state;
    this.setState({
      list: list.map(item => {
        return { ...item, text: item.id === id ? value : item.text };
      })
    });
  };

  removeItem = id => {
    const { list } = this.state;
    axois
      .delete(`http://159.69.85.4:7777/api/alexey/tasks/${id}`)
      .then(response => {
        console.log(response);
        this.setState({
          list: list.filter(item => item.id !== id)
        });
      });
  };

  render() {
    const { inputValue, list } = this.state;

    return (
      <div>
        <p>{inputValue}</p>
        <input
          type="text"
          placeholder="Please enter value"
          value={inputValue}
          onChange={this.handleInputChange}
        />
        <button onClick={this.addItem}>Add</button>
        <ul>
          {list.map(item => {
            return (
              <ListItem
                key={item.id}
                item={item}
                changeStatus={this.changeStatus}
                removeItem={this.removeItem}
                onItemChange={this.onItemChange}
              />
            );
          })}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    axois
      .get("http://159.69.85.4:7777/api/alexey/tasks")
      .then(response => {
        this.setState({ list: response.data });
      })
      .catch(e => console.log(e));
  }
}
