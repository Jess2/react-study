import React, { Component, Fragment } from 'react';

class PhoneInfo extends Component {
  static defaultProps = {
    info: {
      name: '이름',
      phone: '010-0000-0000',
      id: 0
    }
  }
  render() {
    const myStyle = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px'
    };
    const {
      name, phone, id
    } = this.props.info;
    return (
      <Fragment>
        <div style={myStyle}>
          <div><b>{name}</b></div>
          <div>{phone}</div>
        </div>
      </Fragment>
    );
  }
}

export default PhoneInfo;