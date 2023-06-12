import TodoElement from '~/modules/TodoElement/TodoElement';
import { TodoModel } from '~/types/todo.type';

interface TodoElementListProps {
  todoList: TodoModel[];
}

const TodoElementList = ({ todoList }: TodoElementListProps) => {
  return (
    <ul>
      {todoList.map(({ ...todo }) => (
        <TodoElement key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default TodoElementList;
