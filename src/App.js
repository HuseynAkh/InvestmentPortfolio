import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';

import './App.css';

// import CoinList from './components/CoinList/CoinList';
// import StockList from './components/StockList/StockList';

import AccountBalance from './components/AccountBalance/AccountBalance';
import AppHeader from './components/Header/AppHeader';
import CoinHeader from './components/CoinList/CoinHeader';
import StockHeader from './components/StockList/StockHeader';


const Div = styled.div`
  text-align: center;
  background-color: rgb(18, 196, 228);
  min-height: 150rem;
`;

const Div2 = styled.div`
  display: flex;
  flex: column;
  padding: 2px;
  align-self: space-around;
`;

const Div3 = styled.div`
  
`;

const COIN_COUNT = 20;
const formatPrice = price => parseFloat(Number(price).toFixed(3));

function App(props) {

  const [balance, setBalance] = useState(0);
  const [showBalance, setShowBalance] = useState(true);
  const [coinData, setCoinData] = useState([]);
  const [stockData, setStockData] = useState([]);


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

      <Div2>
        
        <Div3>  
          <CoinHeader 
          coinData = {coinData}
          showBalance={showBalance} 
          handleRefresh={handleRefresh} /> 
        </Div3>

        <Div3>
          <StockHeader 
            stockData = {stockData}
            showBalance = {showBalance}
            handleRefresh = {handleRefresh} />
        </Div3>

      </Div2>

    </Div>
  );
  
}

export default App;
