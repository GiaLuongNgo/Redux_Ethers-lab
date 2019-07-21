import React, { Component } from 'react';
import { connect } from 'react-redux';
import handleTransactions from './actions/sharedActions';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class App extends Component {
  clickHanlder = () => {
    this.props.fetch();
  };

  render() {
    const txHistory = this.props.transactions.transactions;

    if (txHistory !== undefined) {
      return (
        <div style={{ textAlign: 'center' }}>
          {txHistory.map(tx => (
            <Card  key={tx.hash}>
              <CardContent>Value: {tx.value}ETH</CardContent>
              <CardContent>To: {tx.to}</CardContent>
              <CardContent>From: {tx.from}</CardContent>
              <CardContent>Age: {tx.time}</CardContent>
            </Card>
          ))}
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.clickHanlder}>
            Transaction History
          </button>
          {txHistory}
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    transactions: state.transactions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetch: () => {
      dispatch(handleTransactions());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
