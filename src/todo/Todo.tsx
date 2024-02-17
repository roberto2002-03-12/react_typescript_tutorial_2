import { TodoProvider } from './context/TodoProvider';
import { TodoList } from './components/TodoList'

export const Todo = () => {
  return (
    <TodoProvider>
      <div>Todo: </div>
      <TodoList />
    </TodoProvider>
  )
}
