import React, { Component } from 'react';
import Coin from '../Coin/Coin';
import styled from 'styled-components';

const Table = styled.table`
  margin: 50px auto 50px auto;
  display: inline-block;
  font-size: 1.4rem;
  td{
    padding: 10px;
    background-color: #ebf7ff;
  }
`;



export default class CoinList extends Component {
  render() {
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
            this.props.coinData.map( ({name, ticker, price, balance}) => 
            <Coin key={ticker} 
              handleRefresh={this.props.handleRefresh} 
              name={name} 
              ticker={ticker}
              showBalance={this.props.showBalance}
              balance = {balance} 
              price={price} />
            )
          }
        </tbody>
      </Table>
      </>
    )
  }
}
