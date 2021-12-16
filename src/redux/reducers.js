import { ADD_TASK, COMPLETE_TASK, DELETE_TASK } from "./actions";

const INITIAL_STATE = {
  taskItems: [],
};

const taskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        taskItems: [
          ...state.taskItems,
          // action.payload,
          { text: action.payload, completed: false },
        ],
      };
    case DELETE_TASK:
      return {
        ...state,
        taskItems: [
          ...state.taskItems.filter((task) => task.text !== action.payload),
        ],
        // taskItems: state.taskItems.filter((task) => task !== action.payload),
      };
    case COMPLETE_TASK:
      let updatedTaskItems = [];
      state.taskItems.map((task) => {
        if (task.text === action.payload) {
          task.completed ? (task.completed = false) : (task.completed = true);
        }
        updatedTaskItems.push(task);
      });
      return {
        ...state,
        taskItems: updatedTaskItems,
      };
    default:
      return state;
  }
};

export default taskReducer;
