import { useEffect, useState } from 'react';

import todoApi from '~/api/domain/todoApi';
import Button from '~/components/Button/Button';
import { useTodoProviderAction } from '~/context/todo/useTodoContext';
import TodoElementList from '~/modules/TodoList/TodoElementList';

const TodoList = () => {
  const { addTodoList } = useTodoProviderAction();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const onClickRefetch = () => {
    setError('');
  };

  const fetchTodoList = async () => {
    try {
      const response = await todoApi.getTodoList();
      const newTodoList = response.data;
      addTodoList(newTodoList);
    } catch (error) {
      console.error(error);
      setError('에러 발생~');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void fetchTodoList();
  }, [error]);

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (error) {
    return (
      <div>
        <h1>{error}</h1>
        <Button text="다시 요청하세요" onClick={onClickRefetch} />
      </div>
    );
  }

  return <TodoElementList />;
};

export default TodoList;
