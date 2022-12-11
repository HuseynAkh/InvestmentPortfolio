import React, { useState } from 'react';
import styled from 'styled-components';

import './App.css';

// import CoinList from './components/CoinList/CoinList';
// import StockList from './components/StockList/StockList';

import AccountBalance from './components/AccountBalance/AccountBalance';
import AppHeader from './components/Header/AppHeader';
import CoinHeader from './components/CoinList/CoinHeader';
import StockHeader from './components/StockList/StockHeader';


const Div = styled.div`
  text-align: center;
  background: rgb(0,212,255);
  background: linear-gradient(180deg, rgba(0,212,255,1) 0%, rgba(40,171,231,1) 46%, rgba(100,230,133,1) 82%);    
  min-height:95rem;
`;

const Div2 = styled.div`
  display: flex;
  flex: column;
  padding: 2px;
  align-self: space-around;
`;

const Div3 = styled.div`
  
`;


function App(props) {

  const [showBalance, setShowBalance] = useState(true);
  const [coinData, setCoinData] = useState([]);
  const [stockData, setStockData] = useState([]);
  
  const [balance, setBalance] = useState('0');

  
  const handleBalanceVis = () => {
    setShowBalance(oldValue => !oldValue)
  }


  const handleRefresh = async (valueChangeID) => {
    // const newData = await axios.get(`https://api.coinpaprika.com/v1/tickers/${valueChangeID}`);
    // console.log(valueChangeID);
    
    // const newCoinData = coinData.map( function(values) {
    //   let newValues = { ...values };
    //   if( valueChangeID === newValues.id) {
    //     newValues.price = formatPrice(newData.data.quotes['USD'].price);
    //   };
    //   return newValues;
    // });
    // setCoinData(newCoinData);
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
          balance = {balance}
          totalBalance = {setBalance}
          coinData = {coinData}
          showBalance={showBalance} 
          handleRefresh={handleRefresh} /> 
        </Div3>

        <Div3>
          <StockHeader
            balance = {balance}
            totalBalance = {setBalance}
            stockData = {stockData}
            showBalance = {showBalance}
            handleRefresh = {handleRefresh} />
        </Div3>

      </Div2>

    </Div>
  );
  
}

export default App;
