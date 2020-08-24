import React from 'react'
import { AboutSection } from './AboutSection'
import '../../styles/About.css'

export const About: React.FC = () => {
  return (
    <div id="about-section" className="module-layout">
      <h3 className="section-title" data-aos="fade-up">
        ABOUT ME
      </h3>
      <AboutSection />
    </div>
  )
}
