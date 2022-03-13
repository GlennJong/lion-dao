import React, { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import LinksList from './LinksList';
import ConnectButton from './ConnectButton';
import LanguageButton from './LanguageButton';
import { _w } from '../../utils/wordingSystem';
import { respondTo } from '../../utils/responsive';
import { lockWindow } from '../../utils/methods';
import { colors } from '../../constants/colors';

const Header = () => {
  const wording = _w('header');

  const headerRef = useRef(null);
  const fixederRef = useRef();

  const prevPageYOffset = useRef(0);
  const navbarTop = useRef(0);

  const [ open, setOpen ] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll);    
    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, [])

  function handleWindowScroll(e) {
    const pageYOffset = Math.max(window.pageYOffset, 0);
    const delta = pageYOffset - prevPageYOffset.current;
    navbarTop.current = navbarTop.current - delta;
    navbarTop.current = Math.max(navbarTop.current, -160);

    if (delta < 0) navbarTop.current = 0;
    if (delta > 0) setOpen(false);
    fixederRef.current.style.setProperty('transition-duration', (delta < 0) ? '0.3s': '0s');
    fixederRef.current.style.setProperty('transform', `translateY(${navbarTop.current}px)`);

    prevPageYOffset.current = pageYOffset;
  }

  const handleCloseLinksMenu = () => {
    setOpen(false);
  }

  const handleToggleLinksMenu = () => {
    setOpen(!open);
  }

  useEffect(() => {
    lockWindow(open);
  }, [open])


  return (
    <Root ref={headerRef}>
      <Fixeder ref={fixederRef}>
        <Wrapper>
          <Link className="logo" to="/">
            <img src="/images/header-logo.svg" alt="" />
          </Link>
          <Side>
            <MenuWrapper className="menu" open={open}>
              <LinksList data={wording.links} onLinkClick={handleCloseLinksMenu} />
              {/* <SocialList data={wording.socials} /> */}
            </MenuWrapper>
            <MenuButton open={open} onClick={handleToggleLinksMenu}>
              <div></div>
              <div></div>
              <div></div>
            </MenuButton>
            <Buttonbar>
              <ConnectButton />
              <LanguageButton className="lang" />
            </Buttonbar>
          </Side>
        </Wrapper>
      </Fixeder>
    </Root>
  )
}

const Root = styled.header`
  height: 88px;
  ${respondTo.md} {
    height: 72px;
  }
`

const Fixeder = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 0px 24px;
  width: 100%;
  height: 88px;
  z-index: 5;
  box-sizing: border-box;
  color: ${colors.white};
  background-color: ${colors.mainColor};
  transition: transform .3s ease;
  ${respondTo.md} {
    height: 72px;
  }
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.green};
  margin: 0 auto;
  width: 1200px;
  max-width: 100%;
  height: 100%;
  transition: all .3s ease ${({time}) => time}ms;
  box-sizing: border-box;
  ${respondTo.md} {
    padding: 0;
  }
  .logo {
    position: relative;
    display: flex;
    align-items: center;
    width: 200px;
    z-index: 3;
    ${respondTo.md} {
      width: 75px;
    }
    img {
      width: 100%;
      height: auto;
    }
  }
  .menu {
    /* width: 100%; */
    height: 100%;
    box-sizing: border-box;
    ${respondTo.md} {
      height: auto;
    }
  }
`

const Side = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: calc(100% - 240px);
`

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 24px;
  ${ respondTo.md } {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0;
    position: absolute;
    border-radius: 8px;
    top: 100%;
    right: 40px;
    padding: 12px 30px;
    background: hsla(0, 0%, 30%, .66);
    z-index: 2;
    opacity: 0;
    visibility: hidden;
    transform: translateY(12px);
    transition: all .3s ease;
    box-sizing: border-box;
    ${({open}) => open && css`
      visibility: visible;
      opacity: 1;
      transform: translateY(0%);
    `}
  }
`

const MenuButton = styled.button`
  display: none;
  border: 0;
  height: 48px;
  margin-right: 12px;
  background: transparent;
  z-index: 4;
  > div {
    margin: auto;
    width: 18px;
    height: 2px;
    background: #FFF;
    transition: all .3s ease;
    & + div {
      margin-top: 4px;
    }
    ${({open}) => open && css`
      &:first-child { transform: translateY(6px) rotate(45deg);}
      &:nth-child(2) { opacity: 0; }
      &:last-child { transform: translateY(-6px) rotate(-45deg);}
    `}
  }
  ${ respondTo.md } {
    display: block;
  }
`

const Buttonbar = styled.div`
  display: flex;
  align-items: center;
  .lang {
    margin-left: 12px;
  }
`

export default Header;
