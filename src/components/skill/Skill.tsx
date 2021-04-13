import React from 'react'
import { SkillBlock } from './SkillBlock'
import styled from 'styled-components'
import * as S from '../../styles/shared'

const StyledGridWrapper = styled.div`
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  justify-items: center; */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

export const Skill: React.FC = () => {
  return (
    <S.StyledContainer id="skill">
      <S.StyledSectionTitle data-aos="fade-up">Skills</S.StyledSectionTitle>
      <S.StyledSectionSubtitle data-aos="fade-up">
        Always Learning.
      </S.StyledSectionSubtitle>
      <StyledGridWrapper>
        <SkillBlock
          imgUrl="resource/uidesign.png"
          title="UI/UX Design"
          content="I am proficient with Adobe Illustrator, Photoshop, Xd to design
                        elegent responsive layout. I also have a lot of music video project experience with Adobe Affects."
        />
        <SkillBlock
          imgUrl="resource/webdesign.png"
          title="Web Development"
          content="I am a full stack web developer with expereince of basic html, css,
                        javascript, MySQL, MongoDB, React, and others tools to create dynamic websites."
        />
        <SkillBlock
          imgUrl="resource/develop.png"
          title="Mobile App Development"
          content="I am familiar with React Natvie for cross-platform development, and also have some project experience with Android and Swift ios development"
        />
      </StyledGridWrapper>
    </S.StyledContainer>
  )
}
