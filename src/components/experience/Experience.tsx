import React from 'react'
import { ExperienceTimeLine } from './ExperienceTimeLine'
import styled from 'styled-components'
import * as S from '../../styles/shared'

export const Experience: React.FC = () => {
  return (
    <S.StyledContainer>
      <S.StyledSectionTitle data-aos="fade-up">
        Experiences
      </S.StyledSectionTitle>
      <ExperienceTimeLine />
    </S.StyledContainer>
  )
}
