import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { css } from 'styled-components';
import { colors } from '../../constants/colors';

const LanguageButton = ({ ...props }) => {
  const { lang } = useSelector(state => state.language);
  
  return (
    <Root {...props}>
      <Link active={lang !== 'en'} href="/">EN</Link>
      <Link active={lang !== 'zh-TW'}href="/zh-TW">中文</Link>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
`

const Link = styled.a`
  display: flex;
  align-items: center;
  border-radius: 12px;
  padding: 0px 20px;
  height: 38px;
  background-color: ${colors.brown};
  color: ${colors.mainColor};
  pointer-events: none;
  white-space: nowrap;
  box-sizing: border-box;
  ${({ active }) => active && css`
    background-color: transparent;
    color: ${colors.green};
    pointer-events: auto;
  `}
`

export default LanguageButton;