import React, {useEffect, useState} from 'react';
import axios from 'axios';

import StockList from './StockList'

import PropTypes from 'prop-types';
import styled from 'styled-components';


const Input1 = styled.input`
  width: 48px;
  padding: 5px;
`;

const Input2 = styled.input`
  width: 200px;
  padding: 5px;
`;

const Button = styled.button`
  padding: 5px;
`;



const formatPrice = price => parseFloat(Number(price).toFixed(3));

export default function StockHeader(props) {
    // if ( props.showBalance ){
    //   content = <>Balance ${props.amount}</>
    // }

    const [stockData, setStockData] = useState([]);
    const [stockSearch, setStockSearch] = useState([]);
    const [balance, setBalance] = useState([]);

    const TotalVal = 0;

    let content = '*******';
    if (props.showBalance ){
      content = <>$ {TotalVal}</>
    }

    const queryPrice = async(ticker) =>{
      //TEMP
      const response = await axios.get(`https://api.twelvedata.com/stocks?country=united-states&symbol=${ticker}`);
      const price = 10;
      //REAL
      // const response = await axios.get(`https://api.twelvedata.com/stocks?country=united-states&symbol=${ticker}&apikey=3e4903f2a4c94528b6618350d27e4201`);
      // const price = await axios.get(`https://api.twelvedata.com/price?symbol=${ticker}&apikey=3e4903f2a4c94528b6618350d27e4201`);
      console.log(response.data);
      const stockPriceData = [
        { 
          key: response.data.data[0].symbol,
          name: response.data.data[0].name,
          ticker: response.data.data[0].symbol,
          balance: formatPrice(balance),
          price: formatPrice(price),
          value: formatPrice(balance * price) // price changed for API wait
        },
      ]
      TotalVal += (balance * price); // price changed for API wait
      //Retrieving prices
      let newValue = stockData.concat(stockPriceData);
      setStockData(newValue);
    }

      const handleSearchChange = (e) => {
        setStockSearch(e.target.value);
      }

      const handleBalanceChange = (e) => {
        setBalance(e.target.value);
      }

      const handleStockSearch = () => {
        queryPrice(stockSearch);
        setBalance("");
        setStockSearch("");
      }


    return (
        <>
        <h1>Stock</h1>
        <h3>{content}</h3>
        <div>
          <Input1 type="balance" placeholder="Balance" value={balance} onChange={handleBalanceChange} />
          <Input2 type="search" placeholder="Search Stocks" value={stockSearch} onChange={handleSearchChange} />
          <Button onClick={handleStockSearch}>Add to portfolio</Button>
        </div>

        <StockList 
          stockData = {stockData}
          showBalance = {props.showBalance} 
          handleRefresh={props.handleRefresh} />
        {/* // {content} */}
        </>
    );
}