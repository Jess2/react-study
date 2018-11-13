import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
export default class App extends Component {
  render() {
    return (
      <TodoListTemplate form={<Form/>}>
        <TodoItemList/>
      </TodoListTemplate>
    );
  }
}
