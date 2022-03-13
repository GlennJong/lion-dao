import React from 'react';
import styled from 'styled-components';
import HeadingSection from './HeadingSection';
import IntroSection from './IntroSection';
import StorySection from './StorySection';
import TeamSection from './TeamSection';
import MintSection from './MintSection';
import SocialSection from './SocialSection';
import { colors } from '../../constants/colors';
import useWording from '../../utils/useWording';
import { respondTo } from '../../utils/responsive';
import Link from '../../components/CustomLink';

const HomePage = () => {
  const wording = useWording('homepage');
  return (
    <Root>
      <HeadingSection />
      <IntroSection />
      <StorySection />
      <TeamSection />
      <Banner>{ wording.banner }</Banner>
      <MintSection />
      <SocialSection />
      <MintButton>{ wording.mint_button }</MintButton>
    </Root>
  )
}

const Root = styled.div`
  ${respondTo.md} {
    padding-top: 36px;
  }
`

const Banner = styled.div`
  padding: 140px 0;
  background: #AEB09E;
  font-size: 16px;
  color: ${colors.white};
  text-align: center;
  ${respondTo.md} {
    padding: 50px 72px;
    font-size: 12px;
  }
`

const MintButton = styled(Link)`
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid ${colors.mainColor};
  padding: 16px 0px 12px 0;
  width: 100%;
  background-color: ${colors.green};
  color: ${colors.mainColor};
  text-align: center;
  font-size: 12px;

  display: none;
  ${respondTo.md} {
    display: block;
  }
`


export default HomePage;