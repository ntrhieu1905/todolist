import { 
  ActionTypes,
  ITodoMain,
  AddTodoActionType
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

export const todoReducer = (state: TodoState = initialState, action: AddTodoActionType): TodoState => {
  switch (action.type) {
    case ActionTypes.ADD:
      const dataTodo = {
        ...action.payload,
        id: generatedId()
      };
      return { ...state, isLoading: false, todos: [...state.todos, dataTodo] };
    default:
      return state;
  }
}