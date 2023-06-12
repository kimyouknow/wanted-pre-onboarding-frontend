import { useMemo, useState } from 'react';

import { TodoModel } from '~/types/todo.type';

export interface TodoStateType {
  todoList: TodoModel[];
}

export interface TodoActionType {
  addTodoList: (newTodoList: TodoModel[]) => void;
  updateTodo: (targetTodo: TodoModel) => void;
}

export const initState = {
  todoList: [] as TodoModel[],
};

const useTodo = () => {
  const [todoList, setTodoList] = useState<TodoModel[]>([]);

  const addTodoList = (newTodoList: TodoModel[]) => {
    setTodoList(prev => [...prev, ...newTodoList]);
  };

  const updateTodo = (targetTodo: TodoModel) => {
    setTodoList(prev =>
      prev.map(todo => (todo.id === targetTodo.id ? targetTodo : todo)),
    );
  };

  const states = useMemo(() => ({ todoList }), [todoList]);

  const actions = useMemo(
    () => ({ addTodoList, updateTodo }),
    [addTodoList, updateTodo],
  );

  return {
    states,
    actions,
  };
};

export default useTodo;
