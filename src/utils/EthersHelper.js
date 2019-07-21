const ethers = require('ethers');
const utils = require('ethers/utils');
const { distanceInWordsToNow } = require('date-fns');

const etherscanProvider = new ethers.providers.EtherscanProvider();

const getTransactionHistory = async () => {
  const address = '0xa4b9663aa59642a9c3a8bca87542abbf9462b213';
  let history = await etherscanProvider.getHistory(address);
  let historyList = await history.reverse().map(tx => {
    let value = utils.formatEther(tx.value);
    let to = tx.to;
    let from = tx.from;
    let hash = tx.hash;
    let time =  distanceInWordsToNow(new Date(tx.timestamp * 1000));

    return { value, to, from, hash, time };
  });
  return historyList;
};

export default getTransactionHistory;
