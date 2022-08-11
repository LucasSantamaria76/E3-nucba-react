import { Types } from './actionsTypes';

export const initialState = {
  tasks: [],
  editTask: {
    id: '',
    title: '',
    completed: false,
  },
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case Types.TOGGLE_TASK_COMPLETED:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          task.id === action.payload && (task.completed = !task.completed);
          return task;
        }),
      };
    case Types.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case Types.SET_EDIT_TASK:
      return {
        ...state,
        editTask: state.tasks.find((task) => task.id === action.payload),
      };
    case Types.EDIT_TASK:
      return {
        ...state,
        editTask: { id: '', title: '', completed: false },
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            task.title = action.payload.title;
          }
          return task;
        }),
      };
    case Types.DELETE_ALL_TASKS:
      return initialState;

    default:
      return state;
  }
};
