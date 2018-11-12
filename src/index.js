import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// 우리가 만든 컴포넌트를 import한다.
import App from './App';
import * as serviceWorker from './serviceWorker';

// 브라우저 상에 우리가 만든 리액트 컴포넌트를 보여주기 위해 ReactDOM.render 사용.
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
