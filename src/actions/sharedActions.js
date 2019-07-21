import receiveTransaction from './receiveTransactions';
import getTransactionHistory from '../utils/EthersHelper'


const handleTransactions = () => {
  return dispatch => {
    return getTransactionHistory().then(transaction => {
      dispatch(receiveTransaction(transaction));
    });
  };
};

export default handleTransactions;
