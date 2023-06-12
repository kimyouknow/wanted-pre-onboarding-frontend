import todoApi from '~/api/domain/todoApi';
import Button from '~/components/Button/Button';
import TextInput from '~/components/TextInput/TextInput';
import useForm from '~/hooks/useForm';

const TodoForm = () => {
  const submitCallback = async ({ newTodo }: { newTodo: string }) => {
    try {
      const response = await todoApi.createTodo(newTodo);

      console.log('response', response);
    } catch (error) {
      alert(error);
    }
  };

  const { register, submitHandler } = useForm({
    initialValues: {
      newTodo: '',
    },
    submitCallback,
    mode: 'onChange',
  });
  return (
    <form onSubmit={submitHandler}>
      <TextInput data-testid="new-todo-input" {...register('newTodo')} />
      <Button data-testid="new-todo-add-button" text="추가" />
    </form>
  );
};

export default TodoForm;