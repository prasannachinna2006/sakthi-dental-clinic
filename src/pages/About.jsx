import { useEffect } from 'react'
import {
  AboutIntroduction,
  FounderSection,
  TeamSection,
  VisionMissionSection,
} from '../components/about/AboutSections'
import '../styles/about.css'

function About() {
  useEffect(() => {
    document.title = 'About Sakthi Dental Clinic | Our Story & Team'
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        'content',
        'Meet the team and learn about the vision, mission and patient-focused care of Sakthi Dental Clinic in Hosur.',
      )
  }, [])

  return (
    <>
      <AboutIntroduction />
      <FounderSection />
      <VisionMissionSection />
      <TeamSection />
    </>
  )
}

export default About
