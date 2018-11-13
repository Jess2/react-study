import React, { Component, Fragment } from 'react';

class PhoneForm extends Component {
  state = {
    name: '',
    phone: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();
    // props로 받은 onCreate 함수를 호출
    this.props.onCreate(this.state);
    // 상태 초기화
    this.setState({
      name: '',
      phone: ''
    })
  }
  render() {
    return (
      <Fragment>
        <br/><hr/><br/>
        <h1>전화번호부</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="이름"
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
          />
          <input
            placeholder="전화번호"
            value={this.state.phone}
            onChange={this.handleChange}
            name="phone"
          />
          <div>name is {this.state.name}</div>
          <div>phone number is {this.state.phone}</div>
          <button type="submit">등록</button>
        </form>
      </Fragment>
    );
  }
}

export default PhoneForm;