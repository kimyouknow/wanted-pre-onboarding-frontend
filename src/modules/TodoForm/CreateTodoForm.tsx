import todoApi from '~/api/domain/todoApi';
import Button from '~/components/Button/Button';
import TextInput from '~/components/TextInput/TextInput';
import { TEST_ID } from '~/constants/testId.constant';
import { useTodoProviderAction } from '~/context/todo/useTodoContext';
import useForm from '~/hooks/useForm';

const CreateTodoForm = () => {
  const { addTodoList } = useTodoProviderAction();
  const submitCallback = async ({ newTodo }: { newTodo: string }) => {
    try {
      const response = await todoApi.createTodo(newTodo);
      const newTodoModel = response.data;

      addTodoList([newTodoModel]);
    } catch (error) {
      alert('생성 실패~');
    }
  };

  const { register, submitHandler } = useForm({
    initialValues: {
      newTodo: '',
    },
    submitCallback,
  });
  return (
    <form onSubmit={submitHandler} className="p-10">
      <TextInput
        data-testid={TEST_ID.createTodoInput}
        {...register('newTodo')}
      />
      <Button data-testid={TEST_ID.createTodoButton} text="추가" />
    </form>
  );
};

export default CreateTodoForm;
