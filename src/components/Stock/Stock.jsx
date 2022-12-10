import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Td = styled.td`
    border: 2px solid #201129;
    width: 40vh;

`;

export default function Stock(props) {

    const handleClick = (event) => {
        // Prevent default action of submitting the form
        event.preventDefault();

        props.handleRefresh(props.id); 
    }

    return (
        <tr className = "stock-row">
            <Td>{props.name}</Td>
            <Td>{props.ticker}</Td>
            <Td>${props.price}</Td>
            {props.showBalance ? <Td>{props.balance}</Td> : <Td>*****</Td>}
            <Td>${props.value}</Td>
            {/* <Td>
                <form action="#" method="POST">
                <button onClick={handleClick}>Refresh</button>
                </form>
            </Td> */}
        </tr>
    );
}

Stock.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}
