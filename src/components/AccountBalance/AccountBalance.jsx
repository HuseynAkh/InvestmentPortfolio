import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import './AccountBalance.css';
import styled from 'styled-components';

const Section = styled.section`
  font-size: 2rem;
  text-align: left;
  padding: 1.5rem 1.5rem 2rem;
  font-family: Arial, Helvetica, sans-serif;
`;

export default class AccountBalance extends Component {
  render() {
    return (
      <Section>
        Balance: ${this.props.amount};
      </Section>
    );
  }
}


AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}

