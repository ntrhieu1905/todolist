import { ActionCreator, Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { ActionTypes, DeleteTodoType } from '../../types/todo';
import { TodoState } from './Todo.reducers';

export type AppThunk = ThunkAction<void, TodoState, null, Action<string>>;

export const addTodo: ActionCreator<AppThunk> = data => {
  return (dispatch: Dispatch) => {
    try {
      dispatch({
        type: ActionTypes.ADD,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: ActionTypes.ADD_ERROR,
        payload: null
      });
    }
  };
}

export const deleteTodo = (data: DeleteTodoType) => {
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