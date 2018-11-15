// TodoItem 컴포넌트 여러개를 렌더링해주는 컴포넌트
import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoItemList extends Component {
  // todos 값이 바뀔 때만 리렌더링 하면 되니까
  // this.props.todos와 nextProps.todos를 비교해서 이 값이 다를 때만 리렌더링하게 함.
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos;
  }

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