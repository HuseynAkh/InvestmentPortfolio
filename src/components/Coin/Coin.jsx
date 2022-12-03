import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Td = styled.td`
    border: 2px solid #201129;
    width: 40vh;

`;

export default class Coin extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    

    handleClick(event) {
        // Prevent default action of submitting the form
        event.preventDefault();

        this.props.handleRefresh(this.props.ticker); 
        
        // const randomPercentage = 0.995 + Math.random() * 0.01;

        // // DON'T DO THIS (State shouldn't be initialized //left value):
        // // this.state.price = this.state.price * randomPercentage;

        // this.setState( function(oldState){
        //     return{
        //         price: oldState.price * randomPercentage
        //     };
        // });
    }

    render() {
        return (
            <tr className = "coin-row">
                <Td>{this.props.name}</Td>
                <Td>{this.props.ticker}</Td>
                <Td>${this.props.price}</Td>
                {this.props.showBalance ? <Td>{this.props.balance}</Td> : <Td>*****</Td>}
                <Td>
                    <form action="#" method="POST">
                    <button onClick={this.handleClick}>Refresh</button>
                    </form>
                </Td>
            </tr>
        );
  }
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}
