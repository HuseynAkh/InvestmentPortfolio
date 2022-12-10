import React, { Component } from 'react'
import logo from './logo.svg';
import logo2 from './logo2.svg'
import logo3 from './logo3.png'
import logo4 from './logo4.svg'
import styled from 'styled-components';

const Header = styled.header`
  background-color: #282c34;
  min-height: 20vh;
  color: white;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-self: flex-start;
`;

const H1 = styled.h1`
  margin: -12px 10px 10px 10px;
  display: flex;
  flex-direction: row;
  font-size: 60px;
  justify-content: center;
  align-items: flex-start;
`;

const P = styled.p`
  align-self: center;
  font-size: 28px;
  text-align: end;
`;

const Logo = styled.img`
  padding: 0px 0px 17px 0px;
  height: 3.4rem;
  pointer-events: none;
  align-self: flex-end;
`;

const Logo2 = styled.img`
  padding: 0px 13px 17px 0px;
  height: 3.2rem;
  pointer-events: none;
  align-self: flex-end;
`;

export default class AppHeader extends Component {
  render() {
    return (
    <Header>
        <Div>
          <P>Powered by: </P>
          <Logo src={logo} alt="React logo" className="App-logo" />
          <Logo2 src={logo2} alt="JavaScript logo" className="App-logo"/>
          <Logo2 src={logo3} alt="CoinGecko API" className="App-logo"/>
          <Logo2 src={logo4} alt="TwelveData API" className="App-logo"/>
        </Div>
        <H1>
          Investment Portfolio
        </H1>
    </Header>
    )
  }
}
