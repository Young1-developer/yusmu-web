import React from 'react'
import './About.css'
import AboutHero from './AboutHero'
import Mission from './Mission'
import TeamMembers from './TeamMembers'
import StartSection from './StartSection'

const About = () => {
  return (
    <div>
      <AboutHero />
      <Mission />
      <TeamMembers />
      <StartSection />
    </div>
  )
}

export default About