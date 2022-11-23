import logo from './logo.svg';
import './App.css';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import React from 'react';

let sum = 0;
for(let num of [1,2,3,4,5]){
  sum += num;
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      balance: 10000,
      coinData: [
        {
        name: 'Bitcoin',
        ticker: 'BTC',
        price: 9999.99
        },

        {
          name: 'Ethereum',
          ticker: 'ETH',
          price: 299.99
        },

        {
          name: 'Tether',
          ticker: 'USDT',
          price: 1.00
        },

        {
          name: 'Solana',
          ticker: 'SOL',
          price: 40.0
        },

        {
          name: 'BNB Chain',
          ticker: 'BNB',
          price: 310.0
        }

      ]
    }
  }
  

  render(){

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="React logo" className="App-logo" />
          <h1 className="App-title">
            Coin Exchange
          </h1>
        </header>

        <AccountBalance amount = {this.state.balance} />
        <CoinList coinData = {this.state.coinData} />
        
      </div>
    );
  }
}

export default App;
