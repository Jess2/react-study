import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoItemList extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;
    const todoList = todos.map(
      // ({id, text, checked}) => (
      (todo) => (
        <TodoItem
          // id={id}
          // text={text}
          // checked={checked}
          {...todo}
          onToggle={onToggle}
          onRemove={onRemove}
          // key={id}
          key={todo.id}
        />
      )
    );
    return (
      <div>
        {todoList}
      </div>
    );
  }
}