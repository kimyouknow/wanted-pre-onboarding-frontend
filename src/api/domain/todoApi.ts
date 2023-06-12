import { BaseResponseType } from '~/api/config/api.type';
import privateApi from '~/api/config/privateApi';
import { API } from '~/constants/api.constant';
import { TodoModel } from '~/types/todo.type';

const todoApi = {
  getTodoList() {
    return privateApi.get<BaseResponseType<TodoModel[]>>(API.TODO.INDEX);
  },
  createTodo(todo: string) {
    return privateApi.post<BaseResponseType<TodoModel>>(API.TODO.INDEX, {
      todo,
    });
  },
  updateTodo(targetTodo: TodoModel) {
    const { id, todo, isCompleted } = targetTodo;
    return privateApi.put<BaseResponseType<TodoModel>>(
      `${API.TODO.INDEX}/${id}`,
      {
        todo,
        isCompleted,
      },
    );
  },
  deleteTodo(id: number) {
    return privateApi.delete(`${API.TODO.INDEX}/${id}`);
  },
};

export default todoApi;
