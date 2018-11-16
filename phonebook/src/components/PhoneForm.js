import React, { Component } from 'react';
import './PhoneForm.scss'
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
      <div className="PhoneForm">
        <form onSubmit={this.handleSubmit}>
          <table>
            <tr>
              <td>
                <input
                  placeholder="이름"
                  value={this.state.name}
                  onChange={this.handleChange}
                  name="name"
                  autoComplete="off"
                  tabindex="1"
                />
              </td>
              <td rowSpan="2">
                <button type="submit">등록</button>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  placeholder="전화번호"
                  value={this.state.phone}
                  onChange={this.handleChange}
                  name="phone"
                  autoComplete="off"
                  tabindex="2"
                />
              </td>
            </tr>
          </table>
        </form>
      </div>
    );
  }
}