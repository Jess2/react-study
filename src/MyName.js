import React, { Component, Fragment } from 'react';

class MyName extends Component {
  render() {
    return (
      <Fragment>
        <div>
            <br/><hr/><br/>
            안녕하세요 새로운 자식 컴포넌트를 만들었어요.
            <br/>
            <b>{this.props.name}</b> : name을 props로 받아왔어요.
            <br/>
            <b>{this.props.job}</b> : job을 props로 받아왔어요. default로 설정된 값이죠.
        </div>
      </Fragment>
    );
  }
}

// defaultProps
MyName.defaultProps = {
    job: 'developer'
};

// 함수형 컴포넌트, 단순히 props만 받아와서 보여주기만 할 경우에는 더 간편하게 할 수 있다.
// const MyName = ({ name }) => {
//   return (
//     <div>
//     안녕하세요! 제 이름은 {name} 입니다.
//     </div>
//   );
// };

export default MyName;