import React from 'react';
import styled from 'styled-components';
import { respondTo } from '../../utils/responsive';
import { Twitter, Discord } from '../Icons';
import { colors } from '../../constants/colors';

const SocialList = ({ data, ...props }) => {
  return (
    <List {...props}>
      { data.map((social, i) =>
        <SocialItem key={i} icon={social.icon} href={social.link} target="_blank" />
      ) }
    </List>
  )
}

const SocialItem = ({icon, ...props}) => {
  return (
    <Item {...props}>
      { icon === 'Discord' && <Discord /> }
      { icon === 'Twitter' && <Twitter /> }
      { icon === 'Investment' && <img src="/images/footer-ship-icon.png" /> }
    </Item>
  )
}

const List = styled.div`
  display: flex;
  align-items: center;
  margin: 0 18px;
  ${respondTo.md} {
    border-top: 1px solid ${colors.white};
    padding-top: 28px;
    width: 100%;
    justify-content: center;
  }
`
const Item = styled.a`
  display: flex;
  align-items: center;
  width: 24px;
  & + a {
    margin-left: 24px;
    ${respondTo.md} {
      margin-left: 40px;
    }
  }
  img, svg {
    display: block;
    width: 100%;
    height: auto;
  }
`

export default SocialList;