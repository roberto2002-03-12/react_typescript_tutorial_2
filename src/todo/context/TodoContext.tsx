import { createContext } from 'react';
import { TypeTodoContextProps } from '../models'

export const TodoContext = createContext<TypeTodoContextProps>({} as TypeTodoContextProps);