// TodoItem 객체 컴포넌트
import React, { Component } from 'react';
import './TodoItem.css';

export default class TodoItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.checked !== nextProps.checked;
  }

  render() {
    const { text, checked, id, onToggle, onRemove } = this.props;
    console.log(id);
    return (
      // 리스트 하나를 클릭하면 onToggle 메소드 실행
      <div className="todo-item" onClick={() => onToggle(id)}>
        {/* 마우스가 위에 있을 때는 x 표시 */}
        <div className="remove" onClick={(e) => {
          e.stopPropagation(); // onToggle이 실행되지 않도록 함
          onRemove(id)}
        }>&times;</div>

        <div className={`todo-text ${checked && 'checked'}`}>
          <div>{text}</div>
        </div>

        {/* 체크값이 활성화되어 있으면 체크표시 */}
        {
          checked && (<div className="check-mark">&#x2713;</div>)
        }
      </div>
    );
  }
}