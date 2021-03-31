import { ActionCreator, Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { ActionTypes } from '../../types/todo';
import { TodoState } from './Todo.reducers';

export const TodoActionTypes = ActionTypes;

export type AppThunk = ThunkAction<Promise<any>, TodoState, null, Action<string>>;

export const addTodo: ActionCreator<AppThunk> = data => {
  return async (dispatch: Dispatch) => {
    try {
      return dispatch({
        type: TodoActionTypes.ADD,
        payload: data
      });
    } catch (err) {
      return dispatch({
        type: TodoActionTypes.ADD_ERROR,
        payload: null
      });
    }
  };
}