import React, { useState } from "react";
import styled, { css } from 'styled-components';
import { _w } from '../../utils/wordingSystem';
import { colors } from '../../constants/colors';
import MintBlock from './MintBlock';
import Container from '../../components/Container';
import { respondTo } from "../../utils/responsive";
// import useConnectWallet from "../../utils/useConnectWallet";
// import Button from "../../components/Button";

const MintSection = () => {
  const wording = _w('homepage.mint');
  const status = 'connect';
  // const status = 'connect';
  // const { status, onConnect } = useConnectWallet();
  
  async function handleClickConnectButton() {
    // if (status !== 'connect') onConnect();
  }
  
  return (
    <Root id="mint">
      <PurchaseBlock>
        <Card>
          <img src="/images/mint.png" alt="" />
        </Card>
        <Mint>
          {  
            status === 'disconnect' &&
            <ConnectButton onClick={handleClickConnectButton}>
              <img src="/images/icon-metamask.svg" alt="" />
              <span>Connect MetaMask</span>
            </ConnectButton>
          }
          {
            status === 'connect' &&
            <MintInfo>
              <div className="title">{ wording.title }</div>
              <span className="slice"></span>
              <div className="description">{ wording.description }</div>
              <MintBlock price={wording.price} className="mint" />
            </MintInfo>
          }
        </Mint>
      </PurchaseBlock>
    </Root>
  )
}

const Root = styled.div`
  padding: 200px 0;
  box-sizing: border-box;
`

const PurchaseBlock = styled(Container)`
  display: flex;
  position: relative;
  ${respondTo.md} {
    display: block;
  }
`

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 50%;
  ${respondTo.md} {
    width: 260px;
  }
  img {
    display: block;
    width: 375px;
    max-width: 100%;
    height: auto;
    box-shadow: 16px 16px 0px ${colors.brown};
  }
`

const Mint = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 24px;
  width: 50%;
  max-width: 100%;
  text-align: center;
  ${({ disable }) => disable && css`
    opacity: 0.5;
    pointer-events: none;
  `}
  ${respondTo.md} {
    margin-top: 68px;
    width: 100%;
  }
`

const MintInfo = styled.div`
  > .title {
    font-size: 32px;
    text-transform: uppercase;
    color: ${colors.green};
  }
  > .slice {
    display: block;
    margin: 12px auto;
    width: 90%;
    height: 1px;
    background-color: ${colors.brown};
  }
  > .description {
    margin-bottom: 48px;
    color: ${colors.brown};
    font-size: 16px;
    text-align: center;
  }
`


const ConnectButton = styled.button`
  background: #FFF;
  color: #000;
  img {
    width: 18px;
    height: 18px;
  }
`


export default MintSection;