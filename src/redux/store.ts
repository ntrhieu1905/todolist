import { applyMiddleware, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { IAppState, rootReducer } from './reducers';

export default function configureStore(): Store<IAppState> {
  const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
  return store;
}