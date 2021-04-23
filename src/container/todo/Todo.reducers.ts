import { 
  ActionTypes,
  ITodoMain,
  TodoActionType,
  Status
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
    case ActionTypes.ASSIGN:
      const todoAdd = {
        ...action.payload,
        id: generatedId(),
        status: Status.assinged
      };
      return { ...state, isLoading: false, todos: [...state.todos, todoAdd] };
    case ActionTypes.COMPLETE:
      const todoComplete = setStatus(state, action.payload.id, action.payload.status);
      return { ...state, todos: todoComplete };
    case ActionTypes.DELETE:
      const todoDelete = setStatus(state, action.payload.id, action.payload.status);
      return { ...state, todos: todoDelete };
    default:
      return state;
  }
}

const setStatus = (state: TodoState, id: string, status?: number) => {
  const result = state.todos.map((val, idx, arr) => {
    if (val.id === id) {
      arr[idx]['status'] = status;
    }
    return arr[idx];
  });
  return result;
}