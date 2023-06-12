import todoApi from '~/api/domain/todoApi';
import Button from '~/components/Button/Button';
import TextInput from '~/components/TextInput/TextInput';
import { TEST_ID } from '~/constants/testId.constant';
import { useTodoProviderAction } from '~/context/todo/useTodoContext';
import useForm from '~/hooks/useForm';
import { TodoModel } from '~/types/todo.type';

interface EditTodoFormProps extends TodoModel {
  onClickEditButton: () => void;
}

const EditTodoForm = ({
  id,
  todo,
  isCompleted,
  userId,
  onClickEditButton,
}: EditTodoFormProps) => {
  const { updateTodo } = useTodoProviderAction();
  const submitCallback = async ({ editTodo }: { editTodo: string }) => {
    try {
      const response = await todoApi.updateTodo({
        id,
        todo: editTodo,
        isCompleted,
        userId,
      });
      const newTodoModel = response.data;

      updateTodo(newTodoModel);
      onClickEditButton();
    } catch (error) {
      alert(error);
    }
  };

  const { register, submitHandler } = useForm({
    initialValues: {
      editTodo: todo,
    },
    submitCallback,
  });
  return (
    <form id="editTodoForm" onSubmit={submitHandler} className="flex w-[300px]">
      <TextInput
        data-testid={TEST_ID.editTodoInput}
        {...register('editTodo')}
        className="w-[200px]"
      />
      <Button
        form="editTodoForm"
        data-testid={TEST_ID.submitEditTodoButton}
        text="제출"
      />
      <Button
        data-testid={TEST_ID.cancelTodoButton}
        text="취소"
        onClick={onClickEditButton}
      />
    </form>
  );
};

export default EditTodoForm;
