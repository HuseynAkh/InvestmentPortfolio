import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-top: 28px;
  font-size: 1.5rem;
  text-align: left;
  padding: 1.5rem 1.5rem 0.3rem;
  font-family: Trebuchet;
  font-weight: 400;
`;

const Button = styled.button`
  margin-top: 7px;
  justify-content: center;
  width: 10%;
  display: flex; 
  padding: 7px 0px 7px 0px;
`;

const P = styled.p`
  font-weight: 600;
  color: rgb(15,71,101);
  margin-top: 5px;
  margin-bottom: 0px;
  font-size: 2rem;
  font-family: Helvetica;

`


export default function AccountBalance(props) {
  const buttonText = props.showBalance ? 'Hide Balance' : 'Show Balance';
  let content = '*******';
  if ( props.showBalance ){
    content = <>${props.amount}</>
  }
  return (
    <Section>
        <>Balance </>  
        <P> {content} </P>
        <Button onClick={props.handleBalanceVis}>{buttonText}</Button>
    </Section>
  );
}


AccountBalance.propTypes = {
    amount: PropTypes.string.isRequired
}

