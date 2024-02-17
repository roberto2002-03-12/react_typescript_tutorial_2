// import { useContext } from 'react';
import { ITodo } from '../models';
// import { TodoContext } from '../context/TodoContext';
import { useTodos } from '../hooks/useTodos'

interface props {
  todo: ITodo
}

export const TodoItem = ({ todo }: props) => {
  const { toggleTodo } = useTodos();

  // const handleDobleClick = () => {
  //   toggleTodo(todo.id);
  // };
  
  return (
    <li
      style={{
        cursor: 'pointer',
        textDecoration: todo.completed ? 'line-through' : ''
      }}
      onDoubleClick={ () => toggleTodo(todo.id) }
    >
      { todo.description }
    </li>
  )
}
