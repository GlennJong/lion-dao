import React from 'react';
import styled from 'styled-components';
import Container from '../../components/Container';
import { colors } from '../../constants/colors';
import { respondTo } from '../../utils/responsive';
import { _w } from '../../utils/wordingSystem';
import SocialItem from '../../components/SocialItem';

const SocialSection = () => {
  const wording = _w('homepage.social');
  return (
    <Root id="community">
      <Container>
        <SocialBlock>
          <Title>JOIN liondao community</Title>
          <SocialList>
            <div className="icon-bar">
              { wording.map((social, i) =>
                <SocialItem key={i} icon={social.icon} href={social.link} target="_blank" />
                ) }
            </div>
          </SocialList>
        </SocialBlock>
      </Container>
    </Root>
  )
}


const Root = styled.div`
`

const SocialBlock = styled.div`
  border-top: 1px solid ${colors.brown};
  padding: 200px 0;

`

const Title = styled.div`
  margin-bottom: 48px;
  text-align: center;
  font-size: 32px;
  text-transform: uppercase;
  color: ${colors.brown};
`

const SocialList = styled.div`
  ${respondTo.md} {
    margin-top: 32px;
  }
  > .icon-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;
    ${respondTo.md} {
      justify-content: center;
    }
  }
  > .copyright {
    color: ${colors.white};
    font-family: "Roboto";
    font-weight: 300;
    letter-spacing: 0.4px;
    font-size: 12px;
  }
  a + a {
    margin-left: 12px;
    ${respondTo.md} {
      margin-left: 30px;
    }
  }
`

export default SocialSection;