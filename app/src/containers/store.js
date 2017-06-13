import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../components/Main/reducers';
import thunk from 'redux-thunk';

const store = createStore(
  rootReducer,
  {},
  applyMiddleware(thunk)
);

export default store;