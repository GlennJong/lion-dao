import React from 'react';
import styled from 'styled-components';
import Link from '../../components/CustomLink';
import { colors } from '../../constants/colors';
import { respondTo } from '../../utils/responsive';
import useWording from '../../utils/useWording';

const HeadingSection = () => {
  const wording = useWording('homepage.heading');
  return (
    <Root>
      <Heading>
        <img className="desktop" src="/images/homepage-heading.png" alt="" />
        <img className="mobile" src="/images/homepage-heading-m.png" alt="" />
      </Heading>
      <Left>{ wording.side }</Left>
      <Mint>
        <Link to="/?to=mint">Mint</Link>
      </Mint>
    </Root>
  )
}


const Root = styled.div`
  position: relative;
`
const Heading = styled.div`
  position: relative;
  padding: 0 120px;
  box-sizing: border-box;
  ${respondTo.md} {
    padding: 0;
  }
  .desktop {
    display: block;
    ${respondTo.md} {
      display: none;
    }
  }
  .mobile {
    display: none;
    ${respondTo.md} {
      display: block;
    }
  }
  img {
    display: block;
    width: 100%;
    height: auto;
  }
`

const Left = styled.div`
  position: absolute;
  top: 50%;
  left: 12px;
  transform-origin: left bottom;
  transform: rotate(90deg) translateX(-70%) translateY(-50%);
  color: ${colors.green};
  font-size: 16px;
  ${respondTo.md} {
    display: none;
  }
`

const Mint = styled.div`
  padding-top: 75px;
  padding-bottom: 65px;
  background-color: ${colors.green};
  > a {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    border: 0;
    border-radius: 12px;
    padding: 9px 0;
    width: 170px;
    font-size: 16px;
    background-color: ${colors.mainColor};
    color: ${colors.green};
  }
  ${respondTo.md} {
    display: none;
  }
`

export default HeadingSection;