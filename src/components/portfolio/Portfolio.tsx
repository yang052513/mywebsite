import React from 'react'
import styled from 'styled-components'
import * as S from '../../styles/shared'
import { PortfolioCard } from './PortfolioCard'

const StyledCardContainer = styled.div`
  display: grid;
  justify-items: center;
`
export const Portfolio: React.FC = () => {
  return (
    <S.StyledContainer>
      <S.StyledSectionTitle>Portfolio</S.StyledSectionTitle>
      <StyledCardContainer>
        <PortfolioCard />
      </StyledCardContainer>
    </S.StyledContainer>
  )
}
