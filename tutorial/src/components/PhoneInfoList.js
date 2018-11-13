import React, { Component, Fragment } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
  static defaultPRops = {
    data: [],
    onRemove: () => console.warn('onRemove not defined'),
    onUpdate: () => console.warn('onUpdate not defined'),
  }
  // App이 리렌더링됨에 따라 PhoneInfoList도 리렌더링 되는 것을 방지
  // 변화가 필요하지 않을 때는 render함수가 호출되지 않음
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.data !== this.props.data;
  }
  render() {
    console.log('render PhoneInfoList')
    const { data, onRemove, onUpdate } = this.props;
    // 배열을 렌더링할 때 꼭 고유의 key를 사용해야 한다
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
        <div>
          {list}
        </div>
      </Fragment>
    );
  }
}

export default PhoneInfoList;