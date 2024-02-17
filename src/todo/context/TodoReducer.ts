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
    
    case 'toggleTodo':
      return {
        ...state,
        // al hacer ({...todo}) basicamente estas creando un
        // nuevo objeto y de este copiar todos los valores del
        // todo, esto haciendolo en una parte de linea de código
        // en vez de crear. NO ESTAS HACIENDO un spread en sí aunque
        // parezca, por eso no sale error al utilizar "todo.id" o
        // "todo.completed"
        todos: state.todos.map(({...todo}) => {
          if (todo.id === action.payload.id) {
            todo.completed = !todo.completed;
          }
          return todo
        })
      }
  
    default:
      return state;
  }
} 