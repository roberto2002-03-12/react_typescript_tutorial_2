import { useReducer } from 'react';
import { TodoContext } from './TodoContext';
import { ITodoProviderProps, ITodoState } from '../models'
import { todoReducer } from './TodoReducer'

const initialState: ITodoState = {
  todoCount: 2,
  todos: [
    {
      id: '1',
      description: 'Recolectar piedras raras',
      completed: false
    },
    {
      id: '2',
      description: 'Hacer curso de typescript con react',
      completed: false
    }
  ],
  completed: 0,
  pending: 2
};

export const TodoProvider = ({ children }: ITodoProviderProps) => {
  const [todoState, dispatch] = useReducer(todoReducer, initialState);
  
  return (
    <TodoContext.Provider value={{ todoState }}>
      { children }
    </TodoContext.Provider>
  )
}
