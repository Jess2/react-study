// 리액트와 그 내부의 컴포넌트를 불러온다.
import React, { Component, Fragment } from 'react';
import './App.css';

// 클래스를 통해 컴포넌트를 만들 수 있다.
// 클래스 형태로 만들어진 컴포넌트에는 render함수가 있어야 한다.
// JSX를 return 해주어야 한다.
class App extends Component {
  render() {
    // 변수
    const name = 'Jess2';
    let age = 27;
    age = 28;

    // 스타일 변수
    const myStyle = {
      background: 'yellow',
      color: 'red'
    };

    const yourStyle = {
      background: 'blue',
      fontSize: '30px',
      color: 'white'
    }

    return (
      <Fragment>
        {/* 태그는 꼭 닫혀야한다 */}
        <input type="text" />

        {/* 두 개 이상의 엘리먼트는 하나의 엘리먼트로 감싸져 있어야 한다. */}
        <div>Hello</div>
        <div>Bye</div>

        {/* JSX 내부에서 자바스크립트 값을 사용할 떄는 {}를 사용한다 */}
        <div>hello {name}! My age is {age}</div>

        {/* 조건부 렌더링 - 삼항연산자 */}
        {
          1 + 1 === 2
            ? (<div>맞아요!</div>)
            : (<div>틀려요!</div>)
        }

        {/* 조건부 렌더링 - && */}
        {
          1 + 1 === 2 && (<div>맞아요!</div>)
        }

        {/* 조건부 렌더링 - IIFE, if */}
        {
          (() => {
            if (age === 27) return (<div>2018년</div>);
            if (age === 28) return (<div>2019년</div>);
            else return (<div>다른 경우</div>);
          })()
        }

        <div style={myStyle}>
          스타일이 적용되었죠?
        </div>

        <div style={yourStyle}>
          다른 스타일이 적용되었어요
        </div>

        <div className="myClass">
          클래스로 스타일을 적용해봐요
        </div>
      </Fragment>
    );
  }
}

// 이 컴포넌트를 다른 곳에서 불러와서 사용할 수 있도록 내보내기 해준다.
export default App;
