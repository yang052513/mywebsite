import React from 'react'
import styled from 'styled-components'

interface Props {
  icon: string
  text: string
}

const StyledContainer = styled.div`
  display: flex;
  padding: 8px 0px;
`

const StyledIcon = styled.i`
  margin-right: 10px;
  transition: all 0.5s;
  &:hover {
    color: #03a9f4;
  }
`

const StyledText = styled.p`
  padding: 0 20px;
  font-family: 'Quicksand', sans-serif;
`

export const BannerProfileContactItem: React.FC<Props> = ({ icon, text }) => {
  return (
    <StyledContainer>
      <StyledIcon className={icon}></StyledIcon>
      <StyledText>{text}</StyledText>
    </StyledContainer>
  )
}
