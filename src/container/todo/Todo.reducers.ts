import { 
  ActionTypes,
  ITodoMain,
  TodoActionType
} from '../../types/todo';
import { generatedId } from '../../utils/common';

export interface TodoState {
  todos: ITodoMain[],
  isLoading: boolean
}

const initialState: TodoState = {
  todos: [],
  isLoading: true
}

export const todoReducer = (state: TodoState = initialState, action: TodoActionType): TodoState => {
  switch (action.type) {
    case ActionTypes.ADD:
      const dataTodo = {
        ...action.payload,
        id: generatedId(),
        delFlg: 0
      };
      return { ...state, isLoading: false, todos: [...state.todos, dataTodo] };
    case ActionTypes.DELETE:
      const todo: ITodoMain[] = state.todos.filter(
        item => item.id !== action.payload.id
      );
      return { ...state, todos: todo };
    default:
      return state;
  }
}