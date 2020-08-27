import React from 'react'
import styled from 'styled-components'
import npmData from '../../data/npm.json'
import { PortfolioNPMCard } from './PortfolioNPMCard'

const StyledCardContainer = styled.div`
  display: grid;
  justify-items: center;
`

const npmList = npmData.map(npm => (
  <PortfolioNPMCard
    title={npm.title}
    desc={npm.desc}
    image={npm.preview}
    link={npm.link}
  />
))
export const PortfolioNPM: React.FC = () => {
  return <StyledCardContainer>{npmList}</StyledCardContainer>
}
