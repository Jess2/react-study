import React, { Component, Fragment } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
  static defaultPRops = {
    data: []
  }
  render() {
    const { data } = this.props;
    // 배열을 렌더링할 때 꼭 고유의 key를 사용해야 한다
    const list = data.map(
      info => (<PhoneInfo key={info.id} info={info}/>)
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