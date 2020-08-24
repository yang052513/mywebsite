import React from 'react'
import { BannerProfileContactItem } from './BannerProfileContactItem'
import styled from 'styled-components'

const StyledContainer = styled.div`
  margin-top: 30px;

  @media (max-width: 450px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`

export const BannerProfileContact: React.FC = () => {
  return (
    <StyledContainer>
      <BannerProfileContactItem
        icon="fas fa-envelope-open"
        text="liyang0525.ly@gmail.com"
      />
      <BannerProfileContactItem
        icon="fas fa-mobile-alt"
        text="+1 604-781-0561"
      />
      <BannerProfileContactItem
        icon="fas fa-map-marker-alt"
        text="yangblog.org"
      />
    </StyledContainer>
  )
}
