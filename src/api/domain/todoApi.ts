import { BaseResponseType } from '~/api/config/api.type';
import privateApi from '~/api/config/privateApi';
import { API } from '~/constants/api.constant';
import { TodoModel } from '~/types/todo.type';

const todoApi = {
  getTodoList() {
    return privateApi.get<BaseResponseType<TodoModel[]>>(API.TODO.INDEX);
  },
};

export default todoApi;
