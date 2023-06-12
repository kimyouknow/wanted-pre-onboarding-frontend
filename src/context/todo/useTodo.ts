import { useMemo, useState } from 'react';

import { TodoModel } from '~/types/todo.type';

export interface TodoStateType {
  todoList: TodoModel[];
}

export interface TodoActionType {
  addTodoList: (newTodoList: TodoModel[]) => void;
}

export const initState = {
  todoList: [] as TodoModel[],
};

const useTodo = () => {
  const [todoList, setTodoList] = useState<TodoModel[]>([]);

  const addTodoList = (newTodoList: TodoModel[]) => {
    setTodoList(prev => [...prev, ...newTodoList]);
  };

  const states = useMemo(() => ({ todoList }), [todoList]);

  const actions = useMemo(() => ({ addTodoList }), [addTodoList]);

  return {
    states,
    actions,
  };
};

export default useTodo;
