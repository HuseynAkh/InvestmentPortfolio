import React, { Component } from 'react'
import logo from './logo.svg';
import styled from 'styled-components'

const Header = styled.header`
  background-color: #282c34;
  min-height: 20vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  color: white;
`;

const H1 = styled.h1`
  font-size: 4rem;
`;

const Logo = styled.img`
  height: 6rem;
  pointer-events: none;
`;

export default class AppHeader extends Component {
  render() {
    return (
    <Header>
        <Logo src={logo} alt="React logo" className="App-logo" />
        <H1>
          Coin Exchange
        </H1>
    </Header>
    )
  }
}
