import { useContext } from 'react';

import { TodoActionContext, TodoStateContext } from '~/context/todo';

export const useTodoProviderState = () => {
  const states = useContext(TodoStateContext);
  if (states === undefined) {
    throw new Error('useTodoProviderState should be used within TodoProvider');
  }
  return states;
};

export const useTodoProviderAction = () => {
  const dispatch = useContext(TodoActionContext);

  if (dispatch === undefined) {
    throw new Error('useTodoProviderAction must be used within TodoProvider');
  }

  return dispatch;
};
