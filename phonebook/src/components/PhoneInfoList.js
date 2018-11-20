import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';
import './PhoneInfoList.scss'
export default class PhoneInfoList extends Component {
  render() {
    const list = this.props.data.map(
      info => (
        <PhoneInfo
          key={info.id}
          info={info}
          onRemove={this.props.onRemove}
          onUpdate={this.props.onUpdate}
        />
      )
    );
    return (
      <div className="PhoneInfoList">
        {list}
      </div>
    );
  }
}