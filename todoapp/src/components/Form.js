import React from 'react';
// input과 button이 담겨있는 컴포넌트
import './Form.css';

// 함수형 컴포넌트
// 파라미터로 받게되는 것이 props
const Form = ({value, onChange, onCreate, onKeyPress}) => {
  return (
    <div className="form">
      <input
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <div className="create-button" onClick={onCreate}>
        추가
      </div>
    </div>
  );
};

export default Form;