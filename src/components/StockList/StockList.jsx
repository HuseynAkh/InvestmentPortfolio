import React from 'react';
import Stock from '../Stock/Stock';
import styled from 'styled-components';



const Table = styled.table`
  margin: 15px auto 50px auto;
  padding: 0px 20px 0px 15px;
  display: inline-block;
  font-size: 1.4rem;
  td{
    padding: 10px;
    background-color: #ebf7ff;
  }
`;

const Td = styled.td`
    border: 2px solid #201129;
    width: 40vh;
`;


export default function StockList(props) {
  
  return (
    <>
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Ticker</th>
          <th>Price</th>
          <th>Balance</th>
          {/* <th>Actions</th>  */}
        </tr>
      </thead>
      <tbody>
      <tr>
          <Td></Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
        </tr>
        {
          props.stockData.map( ({key, name, ticker, price, balance}) => 
          <Stock key={key}
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
