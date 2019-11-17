import React from "react";
import PropTypes from "prop-types";

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.item.text
    };
  }

  render() {
    const { item, changeStatus, removeItem, onItemChange } = this.props;
    return (
      <li>
        <input
          type="checkbox"
          onChange={() => changeStatus(item.id, item.isDone)}
          checked={item.isDone}
        />
        <input
          defaultValue={item.text}
          onBlur={e => onItemChange(item.id, e.target.value)}
        />
        <button onClick={() => removeItem(item.id)}>Remove</button>
      </li>
    );
  }
}

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
  onItemChange: PropTypes.func.isRequired,
  changeStatus: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired
};

export default ListItem;
