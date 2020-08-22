import React, {useState} from 'react';

export default function List({match}) {
  const [todoList, setTodoList] = useState([]);
  const [currentId, setCurrentId] = useState(1);
  const [description, setDescription] = useState('');
  const [showOdd, setShowOdd] = useState(false);

  function onAdd() {
    const todo = {id: currentId, description};
    setCurrentId(currentId + 1);
    setTodoList([...todoList, todo]);
    setDescription('');
  }

  function onDelete(e) {
    const id = Number(e.target.dataset.id);
    const newTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(newTodoList);
  }

  function onSaveToServer() {

  }

  return (
    <div>
      <h2>Todos</h2>
      <ul>
        {todoList
          .filter((_, index) => (showOdd ? index % 2 === 0 : true))
          .map(todo => (
            <li key={todo.id}>
              <span>{todo.description}</span>
              <button data-id={todo.id} onClick={onDelete}>
                삭제
              </button>
            </li>
          ))
        }
      </ul>
      <input type="text" value={description} onChange={e => setDescription(e.target.value)}/>
      <button onClick={onAdd}>추가</button>
      <button onClick={() => setShowOdd(!showOdd)}>홀수 아이템만 보기 on/off</button>
      <button onClick={onSaveToServer}>서버에 저장</button>
    </div>
  )
}