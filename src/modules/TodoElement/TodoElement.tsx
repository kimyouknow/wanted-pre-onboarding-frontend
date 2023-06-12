import { ChangeEvent, useState } from 'react';

import todoApi from '~/api/domain/todoApi';
import { useTodoProviderAction } from '~/context/todo/useTodoContext';
import { TodoModel } from '~/types/todo.type';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TodoElementProps extends TodoModel {}

const TodoElement = ({
  id,
  todo,
  isCompleted: initIsCompleted,
  userId,
}: TodoElementProps) => {
  const [isCompleted, setIsCompleted] = useState(initIsCompleted);
  const { updateTodo } = useTodoProviderAction();

  const onClickCheckbox = async (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value === 'on';
    try {
      const response = await todoApi.updateTodo({
        id,
        todo,
        isCompleted: newValue,
        userId,
      });
      updateTodo(response.data);
      setIsCompleted(newValue);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={onClickCheckbox}
        />
        <span>{todo}</span>
      </label>
    </li>
  );
};

export default TodoElement;
