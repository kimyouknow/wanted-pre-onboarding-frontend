import { useTodoProviderState } from '~/context/todo/useTodoContext';
import TodoElement from '~/modules/TodoElement/TodoElement';

const TodoElementList = () => {
  const { todoList } = useTodoProviderState();
  return (
    <ul className="flex flex-col gap-5 ">
      {todoList.map(({ ...todo }) => (
        <TodoElement key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default TodoElementList;
