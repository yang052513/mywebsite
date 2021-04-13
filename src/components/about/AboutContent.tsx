import React from 'react'
import { AboutTag, AboutResume } from './index'
import styled from 'styled-components'
import * as S from '../../styles/shared'

const StyledContainer = styled.div`
  /* border: 1px solid red; */
  flex: 0 1 700px;
`

export const AboutContent: React.FC = () => {
  return (
    <StyledContainer data-aos="fade-up">
      <S.StyledText>
        A BCIT Computer System Technology graduate. I have
        extensive knowledge and project experience of front-end development.
        I am confident with React, Typescript, Material UI, Sass, UI/UX, and RESTful API designs.
      </S.StyledText>
      <S.StyledText>
        Beside my academic and career, I am a competitive powerlifter competed
        at Provincial Champion. My dream is one day step into the
        Canadian Powerlifting Union Stage and competed in national level.
      </S.StyledText>

      <AboutTag />
      <AboutResume />
    </StyledContainer>
  )
}
