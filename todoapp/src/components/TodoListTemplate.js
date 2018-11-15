// 틀 컴포넌트
import React from 'react';
import './TodoListTemplate.css';

// 함수형 컴포넌트
// 파라미터로 받게되는 것이 props
const TodoListTemplate = ({form, children}) => {
  return (
    <main className="todo-list-template">
      <div className="title">
        오늘 할 일
      </div>
      <section className="form-wrapper">
        {/* Form 컴포넌트가 들어갈 자리 */}
        {form}
      </section>
      <section className="todos-wrapper">
        {/* TodoItemList 컴포넌트가 들어갈 자리*/}
        {children}
      </section>
    </main>
  );
};

export default TodoListTemplate;