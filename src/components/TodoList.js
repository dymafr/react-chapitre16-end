import React from 'react';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';
import { visibilityFilters, toggleTodo, deleteTodo } from '../store/actions';

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <ul className="list-group">
      {todos &&
        todos.map((t) => (
          <TodoItem
            key={t.name}
            todo={t}
            deleteTodo={() => deleteTodo(t.id)}
            toggleTodo={() => toggleTodo(t.id)}
          />
        ))}
    </ul>
  );
};

export default connect(
  (state) => {
    const filter = state.filter;
    let todos;
    switch (filter) {
      case visibilityFilters.SHOW_DONE: {
        todos = state.todos.filter((t) => t.done);
        break;
      }
      case visibilityFilters.SHOW_ACTIVE: {
        todos = state.todos.filter((t) => !t.done);
        break;
      }
      default: {
        todos = state.todos;
        break;
      }
    }

    return {
      todos,
    };
  },
  {
    toggleTodo,
    deleteTodo,
  }
)(TodoList);
