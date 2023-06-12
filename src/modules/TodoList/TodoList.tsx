import { useEffect, useState } from 'react';

import todoApi from '~/api/domain/todoApi';
import TodoElementList from '~/modules/TodoList/TodoElementList';
import { TodoModel } from '~/types/todo.type';

const TodoList = () => {
  const [todoList, setTodoList] = useState<TodoModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchTodoList = async () => {
    try {
      const response = await todoApi.getTodoList();
      setTodoList(response.data);
    } catch (error) {
      console.error(error);
      setError('에러 발생~');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void fetchTodoList();
  }, []);

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return <TodoElementList todoList={todoList} />;
};

export default TodoList;
