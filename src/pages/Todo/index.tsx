import TodoProvider from '~/context/todo';
import TodoForm from '~/modules/TodoForm/TodoForm';
import TodoList from '~/modules/TodoList/TodoList';

const Todo = () => {
  return (
    <TodoProvider>
      <TodoForm />
      <TodoList />
    </TodoProvider>
  );
};

export default Todo;
