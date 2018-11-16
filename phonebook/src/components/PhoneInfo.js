import React, { Component, Fragment } from 'react';

export default class PhoneInfo extends Component {
  state = {
    editing: false,
    name: '',
    phone: ''
  }
  phoneEdit = () => {
    const { editing } = this.state;
    this.setState({
      editing: !editing
    });
  }
  phoneDelete = () => {
    const { info, onRemove } = this.props;
    onRemove(info.id);
  }
  phoneChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }
  componentDidUpdate(prevProps, prevState) {
    const { info, onUpdate } = this.props;
    // editing: false -> true
    if (!prevState.editing && this.state.editing) {
      this.setState({
        name: info.name,
        phone: info.phone
      })
    }
    // editing: true -> false
    if (prevState.editing && !this.state.editing) {
      onUpdate(info.id, {
        name: this.state.name,
        phone: this.state.phone
      })
    }
  }
  render() {
    const { editing } = this.state;
    const { name, phone, id } = this.props.info;

    if (editing) {
      return (
        <Fragment>
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
        </Fragment>
      )
    }

    return (
      <Fragment>
        <div>id: {id}</div>
        <div>이름: {name}</div>
        <div>전화번호: {phone}</div>
        <button onClick={this.phoneEdit}>수정</button>
        <button onClick={this.phoneDelete}>삭제</button>
      </Fragment>
    );
  }
}