import React, { Component, Fragment } from 'react';
import './PhoneInfo.scss';
export default class PhoneInfo extends Component {
  state = {
    editing: false,
    name: '',
    phone: ''
  }
  phoneEdit = () => {
    this.setState({
      editing: !this.state.editing
    });
  }
  phoneDelete = () => {
    this.props.onRemove(this.props.info.id);
  }
  phoneChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  componentDidUpdate(prevProps, prevState) {
    // editing: false -> true
    if (!prevState.editing && this.state.editing) {
      this.setState({
        name: this.props.info.name,
        phone: this.props.info.phone
      })
    }
    // editing: true -> false
    if (prevState.editing && !this.state.editing) {
      this.props.onUpdate(this.props.info.id, {
        name: this.state.name,
        phone: this.state.phone
      })
    }
  }
  render() {
    if (this.state.editing) {
      return (
        <div className="PhoneInfoEdit">
          <div>
            <input
              value={this.state.name}
              name="name"
              placeholder="이름"
              onChange={this.phoneChange}
            />
          </div>
          <div>
            <input
              value={this.state.phone}
              name="phone"
              placeholder="전화번호"
              onChange={this.phoneChange}
            />
          </div>
          <button onClick={this.phoneEdit}>적용</button>
          <button onClick={this.phoneDelete}>삭제</button>
        </div>
      )
    }

    return (
      <div className="PhoneInfo">
        <div>이름: {this.props.info.name}</div>
        <div>전화번호: {this.props.info.phone}</div>
        <button onClick={this.phoneEdit}>수정</button>
        <button onClick={this.phoneDelete}>삭제</button>
      </div>
    );
  }
}