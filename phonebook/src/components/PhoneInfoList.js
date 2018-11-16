import React, { Component, Fragment } from 'react';
import PhoneInfo from './PhoneInfo';

export default class PhoneInfoList extends Component {
  render() {
    return (
      <Fragment>
        리스트
        <PhoneInfo/>
      </Fragment>
    );
  }
}