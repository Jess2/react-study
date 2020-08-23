import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Rooms from './Rooms';
import List from './List';
import Profile from './Profile';
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
        <h1>Jess2's React!</h1>
        <button onClick={onClick}>데이터 보여주기</button>
        <BrowserRouter>
          <div>
            <Link to="/">홈</Link>
            <br />
            <Link to="/todo">할 일</Link>
            <br />
            <Link to="/rooms">방 소개</Link>
            <br />
            <Link to="/profile">유저 정보</Link>
            <br />
            <Route exact path="/" component={Home} />
            <Route path="/todo" component={List} />
            <Route path="/rooms" component={Rooms} />
            <Route path="/profile" component={Profile} />
          </div>
        </BrowserRouter>
      </header>
    </div>
  );
}

function Home() {
  return <h2>이곳은 홈페이지입니다.</h2>;
}