import React, {useEffect, useState} from 'react';
import axios from 'axios';

import StockList from './StockList'

import PropTypes from 'prop-types';
import styled from 'styled-components';

const COIN_COUNT = 20;
const formatPrice = price => parseFloat(Number(price).toFixed(3));

export default function StockHeader(props) {
    // if ( props.showBalance ){
    //   content = <>Balance ${props.amount}</>
    // }

    const [stockData, setStockData] = useState([]);

    const componentDidMount = async () => {
        const response = await axios.get('https://api.coinpaprika.com/v1/coins');
        const coinIDs = response.data.slice(0, COIN_COUNT).map(coin => coin.id);
        const tickerURL = 'https://api.coinpaprika.com/v1/tickers/';
        const promises = coinIDs.map(id => axios.get(tickerURL + id));
        const coinData = await Promise.all(promises);
        const stockPriceData = coinData.map(function(response) {
          const coin = response.data;
          return {
            key: coin.id,
            id: coin.id,
            name: coin.name,
            ticker: coin.symbol,
            balance: 0,
            price: formatPrice(coin.quotes['USD'].price),
          };
        });
        //Retrieving prices
        setStockData(stockPriceData);
    }

    useEffect(() => {
        if (stockData.length === 0){
          //component did mount
          componentDidMount();
        } else {
          //component did update
    
        }
      });


    return (
        <>
        <h1>Stock</h1>
        {/* <input ref={todoNameRef} type="text" /> */}

        <StockList 
          stockData = {stockData}
          showBalance = {props.showBalance} 
          handleRefresh={props.handleRefresh} />
        {/* // {content} */}
        </>
    );
}