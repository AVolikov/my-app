import { GET_TASKS } from "../constants/action.types";

const initialStore = {
  list: [],
  inputValue: ""
};

function todoReducer(state = initialStore, action) {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        list: action.payload
      };
    default:
      return state;
  }
}

export default todoReducer;
