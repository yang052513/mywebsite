import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div``
const StyledTitle = styled.h3``
const StyledDesc = styled.p``
const StyledImage = styled.img``
const StyledLink = styled.button``

interface Props {
  title: string
  desc: string
  image: string
  link: string
}

export const PortfolioNPMCard: React.FC<Props> = ({
  title,
  desc,
  image,
  link,
}) => {
  return (
    <div>
      <StyledCard>
        <StyledTitle>{title}</StyledTitle>
        <StyledDesc>{desc}</StyledDesc>
        <StyledImage
          src={require(`../../assets/images/npm/${image}`)}
          alt=""
        ></StyledImage>
        <StyledLink>Link</StyledLink>
      </StyledCard>
    </div>
  )
}
