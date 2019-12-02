import axios from "axios";
import { GET_TASKS } from "../constants/action.types";

export const getTasks = () => {
  return (dispatch, getState) => {
    console.log(getState().users);

    axios
      .get("http://159.69.85.4:7777/api/alexey/tasks")
      .then(response => {
        dispatch({
          type: GET_TASKS,
          payload: response.data
        });
      })
      .catch(e => console.log(e));
  };
};
