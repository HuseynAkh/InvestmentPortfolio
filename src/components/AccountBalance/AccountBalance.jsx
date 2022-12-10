import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-top: 20px;
  font-size: 2rem;
  text-align: left;
  padding: 1.5rem 1.5rem 0.3rem;
  font-family: Arial, Helvetica, sans-serif;
`;

const Button = styled.button`
  margin-top: 7px;
  justify-content: center;
  width: 10%;
  display: flex; 
  padding: 7px 0px 7px 0px;
`;


export default function AccountBalance(props) {
  const buttonText = props.showBalance ? 'Hide Balance' : 'Show Balance';
  let content = '*******';
  if ( props.showBalance ){
    content = <>Balance: ${props.amount}</>
  }
  return (
    <Section>
        {content}
        <Button onClick={props.handleBalanceVis}>{buttonText}</Button>
    </Section>
  );
}


AccountBalance.propTypes = {
    amount: PropTypes.string.isRequired
}

