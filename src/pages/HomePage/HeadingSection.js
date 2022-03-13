import React from 'react';
import styled from 'styled-components';
import Link from '../../components/CustomLink';
import SocialItem from '../../components/SocialItem';
import { colors } from '../../constants/colors';
import useWording from '../../utils/useWording';

const HeadingSection = () => {
  const wording = useWording('homepage.heading');
  return (
    <Root>
      <Heading>
        <img src="/images/homepage-heading.png" alt="" />
      </Heading>
      <Left>{ wording.side }</Left>
      <Right>
        { wording.social.map((item, i) =>
          <SocialItem key={i} icon={item.icon} href={item.link} target="_blank" />
        ) }
      </Right>
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
  img {
    display: block;
    width: 100%;
    height: auto;
  }
`

const Right = styled.div`
  position: absolute;
  top: 50%;
  right: 12px;
  display: flex;
  flex-direction: column;
  padding: 50px 0;
  color: ${colors.green};
  font-size: 16px;
  transform: translateY(-70%);
  a + a {
    margin-top: 26px;
  }
  &:before, &:after {
    content: "";
    position: absolute;
    left: 50%;
    width: 1px;
    height: 30px;
    background-color: ${colors.green};
  }
  &:before {
    bottom: 100%;
  }
  &:after {
    top: 100%;
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
`

export default HeadingSection;