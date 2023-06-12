import { TodoModel } from '~/types/todo.type';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TodoElementProps extends TodoModel {}

const TodoElement = ({ id, todo, isCompleted, userId }: TodoElementProps) => {
  return (
    <li>
      <label>
        <input type="checkbox" checked={isCompleted} />
        <span>{todo}</span>
      </label>
    </li>
  );
};

export default TodoElement;
