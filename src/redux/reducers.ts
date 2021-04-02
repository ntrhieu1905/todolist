import { combineReducers } from 'redux';

import { todoReducer } from '../container/todo/Todo.reducers';

export const rootReducer = combineReducers({
  todo: todoReducer
});

export type RootState = ReturnType<typeof rootReducer>;