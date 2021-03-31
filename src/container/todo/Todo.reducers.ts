import { 
  ITodoMain,
  AddTodoActionType
} from '../../types/todo';
import { TodoActionTypes } from './Todo.actions';
import { generatedId } from '../../utils/common';

export type TodoState = Readonly<{
  todos: ITodoMain[]
}>;

const initialState: TodoState = {
  todos: [],
}

export const todoReducer = (state: TodoState = initialState, action: AddTodoActionType) => {
  switch (action.type) {
    case TodoActionTypes.ADD:
      const dataTodo = {
        ...action.payload,
        id: generatedId()
      }
      return { ...state, todos: [dataTodo] };
    default:
      return state;
  }
}