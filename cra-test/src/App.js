import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Rooms from './Rooms';
import logo from './logo.svg';
import './App.css';

export default function App() {
  function onClick() {
    import('./data.json').then(({default: data}) => {
      console.log({ data });
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={onClick}>데이터 보여주기</button>
        <h1>Hello, Jess2!</h1>
        <BrowserRouter>
          <div>
            <Link to="/">홈</Link>
            <br />
            <Link to="/photo">사진</Link>
            <br />
            <Link to="/rooms">방 소개</Link>
            <br />
            <Route exact path="/" component={Home} />
            <Route path="/photo" component={Photo} />
            <Route path="/rooms" component={Rooms} />
          </div>
        </BrowserRouter>
      </header>
    </div>
  );
}

function Home() {
  return <h2>이곳은 홈페이지입니다.</h2>;
}

function Photo() {
  return <h2>여기서 사진을 감상하세요.</h2>;
}