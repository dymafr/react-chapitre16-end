import * as actions from './actions';

export const todos = (state = [], action) => {
  switch (action.type) {
    case actions.ADD_TODO: {
      return [...state, action.todo];
    }
    case actions.DELETE_TODO: {
      return state.filter((t) => t.id !== action.id);
    }
    case actions.TOGGLE_TODO: {
      return state.map((t) => {
        if (t.id === action.id) {
          t.done = !t.done;
        }
        return t;
      });
    }
    default: {
      return state;
    }
  }
};

export const filter = (state = actions.visibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case actions.SET_FILTER: {
      return action.filter;
    }
    default: {
      return state;
    }
  }
};
