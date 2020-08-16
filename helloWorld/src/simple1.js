// 좋아요 토글 버튼 구현
// 버튼이 토글될 때 현재 상태를 liked 라는 상태값에 저장을 한다.
// setLiked 로 상태값을 변경한다.
function LikeButton() {
  // 아래의 React 라는 변수는 react.development.js 파일이 실행될 때 전역변수로 노출된다.
  // useState 함수는 컴포넌트의 상태값을 추가할 때 사용한다.
  // likeButton 의 liked 라는 상태값을 추가한 것. (기본값은 false 로 설정함)
  const [liked, setLiked] = React.useState(false);

  // 상태값에 따라서 보여줄 문구를 지정해줌.
  const text = liked ? '좋아요 취소' : '좋아요';

  // 아래의 함수는 리액트 요소를 반환한다.
  // 리액트에서는 UI를 표현하는 가장 작은 단위가 '리액트 요소'이다.
  return React.createElement(
    'button', // 'button'과 같이 문자열을 입력하면 html 에 해당하는 태그가 만들어진다.
    { onClick: () => setLiked(!liked) }, // 속성값. onclick 이라는 이벤트 핸들러가 필요
    text, // children. button 의 children 으로 text 를 출력
  )
}

function Container() {
  const [count, setCount] = React.useState(0);
  return React.createElement(
    'div',
    null,
    React.createElement(LikeButton),
    React.createElement(
      'div',
      { style: { marginTop: 20 } },
      React.createElement('span', null, '현재 카운트: '),
      React.createElement('span', { style: { marginRight: 10 } }, count),
      React.createElement(
        'button',
        { onClick: () => setCount(count + 1) },
        '증가',
      ),
      React.createElement(
        'button',
        { onClick: () => setCount(count - 1) },
        '감소',
      ),
    ),
  );
}

// html에서 만들었던 div 안에 렌더링을 하기 위해서 엘러먼트를 선택자로 가져온다.
const DOM_CONTAINER = document.getElementById('root');

// ReactDOM 변수는 react-dom.development.js 파일이 실행될 때 전역변수로 노출된다.
// 컴포넌트를 렌더링할 때도 '리액트 요소'로 만들어 준다.
ReactDOM.render(React.createElement(Container), DOM_CONTAINER);
