import React from 'react'
import { ExperienceTimeLine } from './ExperienceTimeLine'
import styled from 'styled-components'
import * as S from '../../styles/shared'

const StyledContainer = styled.div`
  margin: 100px 50px;
`
export const Experience: React.FC = () => {
  return (
    <StyledContainer>
      <S.StyledSectionTitle>Experiences</S.StyledSectionTitle>
      <ExperienceTimeLine />
    </StyledContainer>
  )
}
