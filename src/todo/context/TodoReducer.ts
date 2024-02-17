import { ITodoState, TodoAction } from '../models';

export const todoReducer = ( state: ITodoState, action: TodoAction ): ITodoState => {
  switch (action.type) {
    case 'addTodo':
      return {
        ...state,
        todos: [
          ...state.todos,
          action.payload
        ]
      }
    
    // case 'toggleTodo':
    //   return {
    //     ...state,
    //     todos
    //   }
  
    default:
      return state;
  }
} 