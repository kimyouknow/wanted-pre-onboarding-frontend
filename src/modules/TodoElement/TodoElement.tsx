import { ChangeEvent, useState } from 'react';

import todoApi from '~/api/domain/todoApi';
import Button from '~/components/Button/Button';
import CheckBoxInput from '~/components/CheckBoxInput/CheckBoxInput';
import { TEST_ID } from '~/constants/testId.constant';
import { useTodoProviderAction } from '~/context/todo/useTodoContext';
import EditTodoForm from '~/modules/TodoForm/EditTodoForm';
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
  const [couldEdit, setCouldEdit] = useState(false);
  const { updateTodo, deleteTodo } = useTodoProviderAction();

  const onClickCheckbox = async (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.checked;
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

  const onClickDeleteButton = async () => {
    try {
      await todoApi.deleteTodo(id);
      deleteTodo(id);
    } catch (error) {
      alert(error);
    }
  };

  const onClickEditButton = () => {
    setCouldEdit(prev => !prev);
  };

  return (
    <li className="flex px-10">
      {couldEdit ? (
        <>
          <EditTodoForm
            id={id}
            todo={todo}
            isCompleted={isCompleted}
            userId={userId}
            onClickEditButton={onClickEditButton}
          />
        </>
      ) : (
        <>
          <label className="w-[300px]">
            <CheckBoxInput
              type="checkbox"
              checked={isCompleted}
              onChange={onClickCheckbox}
            />
            <span>{todo}</span>
          </label>
          <Button
            data-testid={TEST_ID.editTodoButton}
            text="수정"
            onClick={onClickEditButton}
          />
          <Button
            data-testid={TEST_ID.deleteTodoButton}
            text="삭제"
            onClick={onClickDeleteButton}
          />
        </>
      )}
    </li>
  );
};

export default TodoElement;
