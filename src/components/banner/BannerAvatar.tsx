import React from 'react'
import styled, { keyframes } from 'styled-components'
import avatar from '../../assets/images/avatar.jpg'
import avatar_outline from '../../assets/images/avatar-outline.png'

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(0deg);
  }
`

const StyledContainer = styled.div`
  position: relative;
  @media (max-width: 768px) {
    grid-row: 1;
  }
`

const StyledImage = styled.img`
  width: auto;
  height: 310px;
  border-radius: 50%;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 450px) {
    height: 250px;
    top: 146px;
  }
`

const StyledOutline = styled.img`
  width: auto;
  height: 350px;
  border-radius: 50%;
  border: 1px solid #3da3f4;
  transform: rotate(-360deg);
  animation: ${rotateAnimation} 4s infinite;
  @media (max-width: 450px) {
    height: 290px;
  }
`

export const BannerAvatar = () => {
  return (
    <StyledContainer>
      <StyledImage src={avatar} alt=""></StyledImage>
      <StyledOutline src={avatar_outline}></StyledOutline>
    </StyledContainer>
  )
}
