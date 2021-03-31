import { combineReducers } from 'redux';

import { TodoState, todoReducer } from '../container/todo/Todo.reducers';

export interface IAppState {
  todos: TodoState
}

export const rootReducer = combineReducers<IAppState>({
  todos: todoReducer
});