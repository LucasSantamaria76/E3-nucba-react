import { Types } from '../actionTypes';

export const addTodo = (text) => {
  return {
    type: Types.ADD_TODO,
    payload: text,
  };
};

export const toggleTodo = (id) => {
  return {
    type: Types.TOGGLE_TODO,
    payload: id,
  };
};

export const setVisibilityFilter = () => {
  return {
    type: Types.SET_VISIBILITY_FILTER,
  };
};

export const getTodos = () => {
  return {
    type: Types.GET_TODOS_REQUEST,
  };
};
