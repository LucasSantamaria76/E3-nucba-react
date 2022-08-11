import { Types } from './actionsTypes';
import { v4 as uuid } from 'uuid';

export const addTask = (title) => {
  return {
    type: Types.ADD_TASK,
    payload: {
      id: uuid(),
      title,
      completed: false,
    },
  };
};

export const toggleTaskConpleted = (id) => {
  return {
    type: Types.TOGGLE_TASK_COMPLETED,
    payload: id,
  };
};

export const saveEditTask = (id, title) => {
  return {
    type: Types.EDIT_TASK,
    payload: {
      id,
      title,
    },
  };
};

export const setEditTask = (id) => {
  return {
    type: Types.SET_EDIT_TASK,
    payload: id,
  };
};

export const deleteTask = (id) => {
  return {
    type: Types.DELETE_TASK,
    payload: id,
  };
};

export const deleteAllTasks = () => ({
  type: Types.DELETE_ALL_TASKS,
});
