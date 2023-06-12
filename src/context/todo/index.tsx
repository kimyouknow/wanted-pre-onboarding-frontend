import { createContext, ReactNode } from 'react';

import useTodo, {
  initState,
  TodoActionType,
  TodoStateType,
} from '~/context/todo/useTodo';

export const TodoStateContext = createContext<TodoStateType>(initState);
export const TodoActionContext = createContext<TodoActionType>(
  {} as TodoActionType,
);

interface TodoProviderProps {
  children: ReactNode;
}

const TodoProvider = ({ children }: TodoProviderProps) => {
  const { states, actions } = useTodo();

  return (
    <TodoActionContext.Provider value={actions}>
      <TodoStateContext.Provider value={states}>
        {children}
      </TodoStateContext.Provider>
    </TodoActionContext.Provider>
  );
};

export default TodoProvider;
