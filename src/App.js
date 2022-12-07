import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';

import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import AppHeader from './components/Header/AppHeader';



const Div = styled.div`
  text-align: center;
  background-color: rgb(18, 196, 228);
`

const COIN_COUNT = 20;
const formatPrice = price => parseFloat(Number(price).toFixed(3));

function App(props) {

  const [balance, setBalance] = useState(10000);
  const [showBalance, setShowBalance] = useState(true);
  const [coinData, setCoinData] = useState([]);
  

  const componentDidMount = async () => {
    const response = await axios.get('https://api.coinpaprika.com/v1/coins');
    const coinIDs = response.data.slice(0, COIN_COUNT).map(coin => coin.id);
    const tickerURL = 'https://api.coinpaprika.com/v1/tickers/';
    const promises = coinIDs.map(id => axios.get(tickerURL + id));
    const coinData = await Promise.all(promises);
    const coinPriceData = coinData.map(function(response) {
      const coin = response.data;
      return {
        key: coin.id,
        id: coin.id,
        name: coin.name,
        ticker: coin.symbol,
        balance: 0,
        price: formatPrice(coin.quotes['USD'].price),
      };
    })
    // Retrieving prices
    setCoinData(coinPriceData)

  } 

  useEffect(() => {
    if (coinData.length === 0){
      //component did mount
      componentDidMount();
    } else {
      //component did update

    }
  });


  const handleBalanceVis = () => {
    setShowBalance(oldValue => !oldValue)
  }


  const handleRefresh = async (valueChangeID) => {
    const newData = await axios.get(`https://api.coinpaprika.com/v1/tickers/${valueChangeID}`);
    console.log(valueChangeID);
    
    const newCoinData = coinData.map( function(values) {
      let newValues = { ...values };
      if( valueChangeID === newValues.id) {
        newValues.price = formatPrice(newData.data.quotes['USD'].price);
      };
      return newValues;
    });
    setCoinData(newCoinData);
  }



  return (
    <Div>
      <AppHeader />
      <AccountBalance 
      amount = {balance} 
      showBalance={showBalance} 
      handleBalanceVis={handleBalanceVis}/>

      <CoinList 
      coinData = {coinData}
      showBalance={showBalance} 
      handleRefresh={handleRefresh} />
    </Div>
  );
  
}

export default App;
