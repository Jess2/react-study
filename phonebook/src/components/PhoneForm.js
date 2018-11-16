import React, { Component, Fragment } from 'react';

export default class PhoneForm extends Component {
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
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      name: '',
      phone: ''
    })
  }
  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="이름"
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
            autoComplete="off"
          />
          <input
            placeholder="전화번호"
            value={this.state.phone}
            onChange={this.handleChange}
            name="phone"
            autoComplete="off"
          />
          <button type="submit">등록</button>
        </form>
      </Fragment>
    );
  }
}