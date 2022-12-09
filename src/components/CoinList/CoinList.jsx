import React from 'react';
import Coin from '../Coin/Coin';
import styled from 'styled-components';

const Table = styled.table`
  margin: 15px auto 50px auto;
  display: inline-block;
  font-size: 1.4rem;
  td{
    padding: 10px;
    background-color: #ebf7ff;
  }
`;


export default function CoinList(props) {
  
  return (
    <>
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Ticker</th>
          <th>Price</th>
          <th>Balance</th>
          <th>Actions</th> 
        </tr>
      </thead>
      <tbody>
        {
          props.coinData.map( ({key, name, ticker, price, balance}) => 
          <Coin key={key}
            id={key} // as key can't be retrieved
            handleRefresh={props.handleRefresh} 
            name={name} 
            ticker={ticker}
            showBalance={props.showBalance}
            balance = {balance} 
            price={price} />
          )
        }
      </tbody>
    </Table>
    </>
  )
}
