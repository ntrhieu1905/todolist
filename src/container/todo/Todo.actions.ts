import { ActionCreator, Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { ActionTypes, DeletedTodoType, CompletedTodoType } from '../../types/todo';
import { TodoState } from './Todo.reducers';

export type AppThunk = ThunkAction<void, TodoState, null, Action<string>>;

export const assignTodo: ActionCreator<AppThunk> = data => {
  return (dispatch: Dispatch) => {
    try {
      dispatch({
        type: ActionTypes.ASSIGN,
        payload: data
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export const completeTodo = (data: CompletedTodoType) => {
  return (dispatch: Dispatch) => {
    try {
      dispatch({
        type: ActionTypes.COMPLETE,
        payload: data
      });
    } catch(err) {
      console.log(err);
    }
  }
}

export const deleteTodo = (data: DeletedTodoType) => {
  return (dispatch: Dispatch) => {
    try {
      dispatch({
        type: ActionTypes.DELETE,
        payload: data
      });
    } catch(err) {
      console.log(err);
    }
  }
}

// export const addTodo = (data: AddTodoType) => {
//   return {
//     type: ActionTypes.ADD,
//     payload: data
//   }
// }