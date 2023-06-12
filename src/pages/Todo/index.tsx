import TodoProvider from '~/context/todo';
import CreateTodoForm from '~/modules/TodoForm/CreateTodoForm';
import TodoList from '~/modules/TodoList/TodoList';

const Todo = () => {
  return (
    <TodoProvider>
      <CreateTodoForm />
      <TodoList />
    </TodoProvider>
  );
};

export default Todo;
