import React, { Component, Fragment } from 'react';
import PhoneInfo from './PhoneInfo';

export default class PhoneInfoList extends Component {
  render() {
    const { data, onRemove, onUpdate } = this.props;
    const list = data.map(
      info => (
        <PhoneInfo
          key={info.id}
          info={info}
          onRemove={onRemove}
          onUpdate={onUpdate}
        />
      )
    );
    return (
      <Fragment>
        {list}
      </Fragment>
    );
  }
}