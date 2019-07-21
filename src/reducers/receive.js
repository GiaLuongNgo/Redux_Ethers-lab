import { RECEIVE_TRANSACTION } from '../actions/receiveTransactions';

const transactions = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_TRANSACTION:
      return { transactions: [...action.transaction] };
    default:
      return state;
  }
};

export default transactions;
