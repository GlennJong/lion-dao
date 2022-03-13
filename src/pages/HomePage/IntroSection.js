import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import Carousel from '../../components/Carousel';
import useWording from '../../utils/useWording';

const IntroSection = () => {
  const wording = useWording('homepage.intro');
  return (
    <Root>
      <Carousel>
        { wording?.map((item, i) => 
          <Item key={i}>
            <div className="content">
              <img src={item.icon} alt="" />
              <p inner>{item.content}</p>
            </div>
          </Item>
        )}
      </Carousel>
    </Root>
  )
}

const Root = styled.div`
`

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 900px;
  .content {
    width: 550px;
    max-width: 100%;
    text-align: center;
    color: ${colors.green};
    white-space: break-spaces;
    img {
      display: block;
      margin: auto;
      margin-bottom: 30px;
    }
  }
`

export default IntroSection;