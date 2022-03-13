import React from 'react';
import styled from 'styled-components';
import HeadingSection from './HeadingSection';
import IntroSection from './IntroSection';
import StorySection from './StorySection';
import TeamSection from './TeamSection';
import MintSection from './MintSection';
import SocialSection from './SocialSection';
import { _w } from '../../utils/wordingSystem';
import { colors } from '../../constants/colors';

const HomePage = () => {
  const wording = _w('homepage');
  return (
    <Root>
      <HeadingSection />
      <IntroSection />
      <StorySection />
      <TeamSection />
      <Banner>{ wording.banner }</Banner>
      <MintSection />
      <SocialSection />
    </Root>
  )
}

const Root = styled.div`
`

const Banner = styled.div`
  padding: 140px 0;
  background: #AEB09E;
  font-size: 16px;
  color: ${colors.white};
  text-align: center;
`


export default HomePage;