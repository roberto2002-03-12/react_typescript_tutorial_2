export interface ITodo {
  id: string;
  description: string;
  completed: boolean;
}

export interface ITodoState {
  todoCount: number;
  todos: ITodo[];
  completed: number;
  pending: number;
}

export interface ITodoProviderProps {
  children: JSX.Element | JSX.Element[]
}

export type TodoAction = | {
  type: 'addTodo',
  payload: ITodo
} | {
  type: 'toggleTodo',
  payload: { id: string }
} 

export type TypeTodoContextProps = {
  todoState: ITodoState;
  toggleTodo: ( id: string ) => void;
};