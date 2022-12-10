import React, {useEffect, useState} from 'react';
import axios from 'axios';

import CoinList from './CoinList';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const COIN_COUNT = 20;
const formatPrice = price => parseFloat(Number(price).toFixed(3));

const Input1 = styled.input`
  width: 48px;
  padding: 8px;
  focus: ring-2 rounded-tl rounded-bl;
`;

const Input2 = styled.input`
  width: 200px;
  padding: 8px;
  focus: ring-2 rounded-tl rounded-bl;
`;

const Button = styled.button`
  padding: 8px;
  background-color: white;
  border-radius: 3px;
`;

export default function CoinHeader(props) {
    // if ( props.showBalance ){
    //   content = <>Balance ${props.amount}</>
    // }

    const [coinData, setCoinData] = useState([]);
    const [coinSearch, setCoinSearch] = useState([]);
    const [balance, setBalance] = useState([]);
    const [totalVal, setTotalVal] = useState('0');
    

    let content = '*******';
    if (props.showBalance ){
      content = <>$ {totalVal}</>
    }

    const queryPrice = async(ticker) =>{
      //TEMP
      const response = await axios.get(`https://api.coingecko.com/api/v3/search?query=${ticker}`);
      const apiSymbol = response.data.coins[0].api_symbol;
      const priceAccess = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${apiSymbol}&vs_currencies=usd`);
      const price = priceAccess.data[apiSymbol].usd;
      console.log(response.data);
      const coinPriceData = [
        { 
          key: response.data.coins[0].id,
          name: response.data.coins[0].name,
          ticker: response.data.coins[0].symbol,
          balance: formatPrice(balance),
          price: formatPrice(price),
          value: formatPrice(balance * price) 
        },
      ]
      let change = formatPrice(balance * price);
      //Data to Float & String (add/remove commas)
      setTotalVal((formatPrice((parseFloat((totalVal).replace(/,/g, ''))) + change)).toLocaleString());
      props.totalBalance((formatPrice((parseFloat(((props.balance) + "").replace(/,/g, ''))) + change)).toLocaleString());
      
      //Retrieving prices
      let newValue = coinData.concat(coinPriceData);
      setCoinData(newValue);
    }

    const handleSearchChange = (e) => {
      setCoinSearch(e.target.value);
      if(e.key === 'Enter'){
        handleCoinSearch();
      };
    }

    const handleBalanceChange = (e) => {
      setBalance(e.target.value);
    }

    const handleCoinSearch = () => {
      queryPrice(coinSearch);
      setBalance("");
      setCoinSearch("");
    }

    const handleEnterSearch = (e) => {
      if(e.key === 'Enter'){
        queryPrice(coinSearch);
        setBalance("");
        setCoinSearch("");
      }
    }



    return (
        <>
        <h1>Crypto</h1>
        <h3>{content}</h3>

        <div>
          <Input1 type="balance" placeholder="Balance" value={balance} onChange={handleBalanceChange} />
          <Input2 type="search" placeholder="Search Crypto..." value={coinSearch} onChange={handleSearchChange} onKeyDown={handleEnterSearch} />
          <Button onClick={handleCoinSearch}>Add to portfolio</Button>
        </div>


        <CoinList 
          coinData = {coinData}
          showBalance = {props.showBalance} 
          handleRefresh={props.handleRefresh} />
        {/* // {content} */}
        </>
    );
}