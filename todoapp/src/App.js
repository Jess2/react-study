import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import Palette from './components/Palette';

const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];

export default class App extends Component {
  id = 3; // 이미 0, 1, 2가 존재하므로 3으로 설정
  state = {
    input: '',
    todos: [
      { id: 0, text: '리액트 공부하기', checked: false },
      { id: 1, text: '출근하기', checked: true },
      { id: 2, text: '운동하기', checked: false },
    ],
    color: '#343a40'
  }
  // 할 일 input창에 사용자 입력값 변경
  handleChange = (e) => {
    this.setState({
      input: e.target.value // input의 다음 바뀔 값
    });
  }
  // 새로운 할 일 추가
  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '', // 인풋 비우고
      // concat을 사용하여 배열에 추가
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    })
  }
  // 눌려진 키가 Enter이면 handleCreate 호출
  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }
  // 할 일 체크 활성화/비활성화
  handleToggle = (id) => {
    const { todos } = this.state;

    // 파라미터로 받은 id를 가지고 몇번째 아이템인지 찾는다.
    const index = todos.findIndex(todo => todo.id === id);
    const selectedTodo = todos[index]; // 선택한 객체
    const nextTodos = [...todos]; // 배열을 복사

    // 기존의 값들을 복사하고, checked 값을 덮어쓰기
    nextTodos[index] = {
      ...selectedTodo,
      checked: !selectedTodo.checked
    };

    this.setState({
      todos: nextTodos
    });
  }
  // 할 일 제거
  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }
  handleSelectColor = (color) => {
    this.setState({
      color
    })
  }
  render() {
    const { input, todos, color } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleSelectColor
    } = this;
    return (
      <TodoListTemplate 
        form={(
          <Form
            value={input}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handleCreate}
            color={color}
          />
        )}
        palette={(
          <Palette colors={colors} selected={color} onSelect={handleSelectColor}/>
        )}>
        <TodoItemList
          todos={todos}
          onToggle={handleToggle}
          onRemove={handleRemove}
        />
      </TodoListTemplate>
    );
  }
}
