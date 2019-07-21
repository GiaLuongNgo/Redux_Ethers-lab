export const RECEIVE_TRANSACTION = 'RECEIVE_TRANSACTION';

const receiveTransaction = transaction => {
  return {
    type: RECEIVE_TRANSACTION,
    transaction
  };
};

export default receiveTransaction;
