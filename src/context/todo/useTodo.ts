import { useMemo, useState } from 'react';

import { TodoModel } from '~/types/todo.type';

export interface TodoStateType {
  todoList: TodoModel[];
}

export interface TodoActionType {
  addTodoList: (newTodoList: TodoModel[]) => void;
  updateTodo: (targetTodo: TodoModel) => void;
  deleteTodo: (id: number) => void;
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

  const deleteTodo = (id: number) => {
    setTodoList(prev => prev.filter(todo => todo.id !== id));
  };

  const states = useMemo(() => ({ todoList }), [todoList]);

  const actions = useMemo(
    () => ({ addTodoList, updateTodo, deleteTodo }),
    [addTodoList, updateTodo, deleteTodo],
  );

  return {
    states,
    actions,
  };
};

export default useTodo;
