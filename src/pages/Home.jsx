import { useEffect } from 'react'
import {
  AssuranceBanner,
  AppointmentPanel,
  ClinicFacilities,
  HomeCallToAction,
  HomeHero,
  PatientTestimonials,
  WhyChooseUs,
  CoreTreatments,
} from '../components/home/HomeSections'
import '../styles/home.css'

function Home() {
  useEffect(() => {
    document.title = 'Sakthi Dental Clinic | Expert Dental Care in Hosur'
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        'content',
        'Specialized dental care for women, children, and families at Sakthi Dental Clinic in Hosur, Tamil Nadu.',
      )
  }, [])

  return (
    <>
      <HomeHero />
      <AppointmentPanel />
      <AssuranceBanner />
      <WhyChooseUs />
      <CoreTreatments />
      <PatientTestimonials />
      <ClinicFacilities />
      <HomeCallToAction />
    </>
  )
}

export default Home
