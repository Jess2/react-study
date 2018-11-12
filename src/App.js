// 리액트와 그 내부의 컴포넌트를 불러온다.
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// 클래스를 통해 컴포넌트를 만들 수 있다.
// 클래스 형태로 만들어진 컴포넌트에는 render함수가 있어야 한다.
// JSX를 return 해주어야 한다.
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

// 이 컴포넌트를 다른 곳에서 불러와서 사용할 수 있도록 내보내기 해준다.
export default App;
