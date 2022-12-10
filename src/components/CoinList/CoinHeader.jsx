import React, {useEffect, useState} from 'react';
import axios from 'axios';

import CoinList from './CoinList';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const COIN_COUNT = 20;
const formatPrice = price => parseFloat(Number(price).toFixed(3));

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

export default function CoinHeader(props) {
    // if ( props.showBalance ){
    //   content = <>Balance ${props.amount}</>
    // }

    const [coinData, setCoinData] = useState([]);
    const [coinSearch, setCoinSearch] = useState([]);
    const [balance, setBalance] = useState([]);

    let content = '*******';
    if (props.showBalance ){
      content = <>$ BalanceSum</>
    }

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
        });
        // Retrieving prices
        setCoinData(coinPriceData);
    }

    useEffect(() => {
        if (coinData.length === 0){
          //component did mount
          componentDidMount();
        } else {
          //component did update
    
        }
      });

      const handleSearchChange = (e) => {
        setCoinSearch(e.target.value);
      }

      const handleBalanceChange = (e) => {
        setBalance(e.target.value);
      }

      const handleCoinSearch = () => {
        // queryPrice(coinSearch);
        setBalance("");
        setCoinSearch("");
      }



    return (
        <>
        <h1>Crypto</h1>
        <h3>{content}</h3>

        <div>
          <Input1 type="balance" placeholder="Balance" value={balance} onChange={handleBalanceChange} />
          <Input2 type="search" placeholder="Search Crypto" value={coinSearch} onChange={handleSearchChange} />
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