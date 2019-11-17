import React from "react";

export const Button1 = function(props) {
  return (
    <a href={props.url} style={{ color: props.color }}>
      {props.name}
    </a>
  );
};

export class Button2 extends React.Component {
  render() {
    return (
      <a href={this.props.url} style={{ color: this.props.color }}>
        {this.props.name}
      </a>
    );
  }
}
