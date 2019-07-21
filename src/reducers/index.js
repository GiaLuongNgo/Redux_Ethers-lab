import { combineReducers } from 'redux';
import transactions from './receive';

const rootReducer = combineReducers({
  transactions
});

export default rootReducer;
