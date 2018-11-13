import React, { Component, Fragment } from 'react';

class PhoneInfo extends Component {
  static defaultProps = {
    info: {
      name: '이름',
      phone: '010-0000-0000',
      id: 0
    }
  }
  state = {
    // 수정버튼 눌렀을 때 editing 값을 true로 설정한다.
    editing: false,
    // input 값을 담기 위해 각 필드를 위한 값
    name: '',
    phone: '',
  }
  handleRemove = () => {
    // 삭제 버튼이 클릭되면 onRemove에 id 넣어서 호출
    const { info, onRemove } = this.props;
    onRemove(info.id);
  }
  handleToggleEdit = () => {
    const { editing } = this.state;
    this.setState({ editing: !editing });
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }
  // editing 값이 바뀔 때 처리할 로직
  componentDidUpdate(prevProps, prevState) {
    const { info, onUpdate } = this.props;
    // editing 값이 false -> true로 전환될 때 info의 값을 state에 넣어줌
    if(!prevState.editing && this.state.editing) {
      this.setState({
        name: info.name,
        phone: info.phone
      })
    }
    // editing 값이 true -> false로 전환될 때 onUpdate 함수 호출
    if(prevState.editing && !this.state.editing) {
      onUpdate(info.id, {
        name: this.state.name,
        phone: this.state.phone
      });
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    // 수정상태가 아니고, info 값이 같다면 리렌더링 안함
    if (!this.state.editing
        && !nextState.editing
        && nextProps.info === this.props.info) {
      return false;
    }
    // 나머지 경우엔 리렌더링함
    return true;
  }
  render() {
    console.log('render PhoneInfo ' + this.props.info.id);
    const myStyle = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px'
    };
    const { editing } = this.state;
    // 수정모드
    if (editing) {
      return (
        <Fragment>
          <div style={myStyle}>
            <div>
              <input
                value={this.state.name}
                name="name"
                placeholder="이름"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <input
                value={this.state.phone}
                name="phone"
                placeholder="전화번호"
                onChange={this.handleChange}
              />
            </div>
            <button onClick={this.handleToggleEdit}>적용</button>
            <button onClick={this.handleRemove}>삭제</button>
          </div>
        </Fragment>
      );
    }
    // 일반모드
    const {
      name, phone, id
    } = this.props.info;
    return (
      <Fragment>
        <div style={myStyle}>
          <div>id: <b>{id}</b></div>
          <div>이름: <b>{name}</b></div>
          <div>전화번호: <b>{phone}</b></div>
          <button onClick={this.handleToggleEdit}>수정</button>
          <button onClick={this.handleRemove}>삭제</button>
        </div>
      </Fragment>
    );
  }
}

export default PhoneInfo;