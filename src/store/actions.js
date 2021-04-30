export const ADD_TODO = 'add todo';
export const DELETE_TODO = 'delete todo';
export const SET_FILTER = 'set filter';
export const TOGGLE_TODO = 'toggle todo';

export const visibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_DONE: 'SHOW_DONE',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    todo,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    filter,
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id,
  };
};
