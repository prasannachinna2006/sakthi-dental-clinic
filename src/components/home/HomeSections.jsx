import { useState } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseMedical,
  CircleCheck,
  HeartHandshake,
  Quote,
  ShieldCheck,
  Smile,
  Sparkles,
  Stethoscope,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import amenitiesImage from '../../assets/clinic-consultation-room.png'
import receptionImage from '../../assets/clinic-reception.png'
import treatmentRoomImage from '../../assets/clinic-treatment-room.png'
import centralLocationImage from '../../assets/facilities/central-location.png'
import doctorAvailabilityImage from '../../assets/facilities/doctor-availability.png'
import parkingImage from '../../assets/facilities/parking.png'
import pickupDropoffImage from '../../assets/facilities/pickup-dropoff.png'
import wheelchairAccessImage from '../../assets/facilities/wheelchair-access.png'

const reasons = [
  {
    icon: BriefcaseMedical,
    title: 'All-in-One Care',
    description:
      'Comprehensive dental services under one roof for individuals and families.',
  },
  {
    icon: BadgeCheck,
    title: 'Experienced Doctors',
    description:
      'Experienced dental professionals dedicated to quality dental care.',
  },
  {
    icon: HeartHandshake,
    title: 'Patient-Centric Approach',
    description:
      'Comfortable, caring and personalized treatment for every patient.',
  },
  {
    icon: Stethoscope,
    title: 'Technology-Driven Services',
    description:
      'Modern dental technology to support effective and comfortable treatments.',
  },
]

const treatments = [
  {
    icon: ShieldCheck,
    title: 'Tooth Extraction',
    description: 'Safe and painless removal of impacted or decayed teeth.',
  },
  {
    icon: Smile,
    title: 'Artificial Complete Denture',
    description: 'Full mouth replacement to restore confidence and function.',
  },
  {
    icon: CircleCheck,
    title: 'Tooth Filling',
    description: 'Composite fillings for cavity treatment and tooth restoration.',
  },
  {
    icon: Sparkles,
    title: 'Teeth Cleaning or Scaling',
    description: 'Preventive care to remove plaque and protect gums.',
  },
  {
    icon: Sparkles,
    title: 'Bleaching',
    description: 'Cosmetic whitening treatments for a brighter smile.',
  },
  {
    icon: Stethoscope,
    title: 'Orthodontic Treatment',
    description: 'Braces and aligners to straighten and align teeth.',
  },
]

const appointmentTreatments = [
  'Teeth Cleaning & Scaling',
  'Tooth Filling',
  'Tooth Extraction',
  'Artificial Complete Denture',
  'Dental Implants',
  'Laser Dentistry',
  'Root Canal Therapy',
  'Wisdom Tooth Extraction',
  'Fixed Partial Denture (Bridge)',
  'Teeth Whitening (Bleaching)',
  'Veneers',
  'Pediatric Dentistry',
  'Flap Surgery',
  'Orthodontic Braces',
  'Clear Aligners',
]

const testimonials = [
  {
    quote:
      '"The doctors are extremely kind and attentive. My braces treatment is progressing really well. 5/5."',
    name: 'Manisha M',
    rating: '5/5',
  },
  {
    quote:
      '"I got my teeth cleaned and whitened here, and the results were amazing. The staff is so humble and professional. I\'ve recommended Sakthi Dental Clinic to my entire family."',
    name: 'Arun Kumar',
  },
  {
    quote:
      '"Their attention to detail is outstanding. My daughter needed braces and the entire process from consultation to regular follow ups has been so smooth. Really grateful for their care."',
    name: 'Revathi S.',
  },
]

const facilities = [
  {
    image: centralLocationImage,
    title: 'Convenient Central Location',
    description: 'Easy access to the clinic.',
  },
  {
    image: parkingImage,
    title: 'Hassle-Free Parking',
    description: 'Convenient parking facilities for patients.',
  },
  {
    image: doctorAvailabilityImage,
    title: 'Doctors Available Daily',
    description: '9 AM–9 PM.',
  },
  {
    image: pickupDropoffImage,
    title: 'Pickup & Drop-off',
    description: 'Convenient pickup and drop-off support.',
  },
  {
    image: wheelchairAccessImage,
    title: 'Wheelchair Access',
    description: 'Accessibility support for patients.',
  },
]

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="home-section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="home-section-description">{description}</p>}
    </div>
  )
}

function handleAppointmentLinkClick(event) {
  const appointmentPanel = document.getElementById('appointment-form')

  if (!appointmentPanel) {
    return
  }

  event.preventDefault()
  window.history.pushState(null, '', '#appointment-form')
  appointmentPanel.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function HomeHero() {
  return (
    <section className="home-hero">
      <img
        className="home-hero-image"
        src={receptionImage}
        alt="Reception area at Sakthi Dental Clinic"
      />
      <div className="home-hero-overlay" aria-hidden="true" />
      <div className="site-container home-hero-content">
        <div className="home-hero-copy">
          <p className="home-hero-kicker">
            <span aria-hidden="true" />
            Thoughtful dental care in Hosur
          </p>
          <h1>Specialized Dental Care for Women, Children &amp; Families</h1>
          <p className="home-hero-description">
            Experience compassionate, expert-led dental services tailored to your
            needs, all in a modern and welcoming environment.
          </p>
          <div className="home-hero-actions">
            <a
              className="button button-primary"
              href="#appointment-form"
              onClick={handleAppointmentLinkClick}
            >
              Fix an Appointment
            </a>
            <Link className="button button-secondary" to="/contact">
              Contact Us <ArrowRight aria-hidden="true" size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function AppointmentPanel() {
  const [submitted, setSubmitted] = useState(false)

  function handleAppointmentSubmit(event) {
    event.preventDefault()
    if (submitted) return

    event.currentTarget.reset()
    setSubmitted(true)
  }

  return (
    <section
      className="appointment-panel site-container"
      id="appointment-form"
      aria-labelledby="appointment-panel-title"
    >
      <h2 id="appointment-panel-title">Book Your Appointment</h2>
      <form
        className="appointment-form-grid"
        onChange={() => {
          if (submitted) setSubmitted(false)
        }}
        onSubmit={handleAppointmentSubmit}
      >
        {submitted && (
          <p aria-live="polite" className="appointment-form-success" role="status">
            Your appointment request has been submitted successfully! Our team
            will contact you to confirm your appointment.
          </p>
        )}
        <div className="appointment-field">
          <label htmlFor="appointment-name">Name</label>
          <input
            autoComplete="name"
            id="appointment-name"
            name="name"
            placeholder="Your name"
            required
          />
        </div>
        <div className="appointment-field">
          <label htmlFor="appointment-phone">Phone</label>
          <input
            autoComplete="tel"
            id="appointment-phone"
            name="phone"
            placeholder="Your phone number"
            pattern="(?:\+91(?: |-)?)?[6-9][0-9]{9}"
            required
            type="tel"
            title="Enter a valid 10-digit Indian mobile number, optionally with +91."
          />
        </div>
        <div className="appointment-field">
          <label htmlFor="appointment-email">Email</label>
          <input
            autoComplete="email"
            id="appointment-email"
            name="email"
            placeholder="you@example.com"
            required
            type="email"
          />
        </div>
        <div className="appointment-field">
          <label htmlFor="appointment-date">Preferred Date</label>
          <input
            id="appointment-date"
            name="date"
            required
            type="date"
          />
        </div>
        <div className="appointment-field">
          <label htmlFor="appointment-time">Preferred Time</label>
          <input
            id="appointment-time"
            name="time"
            required
            type="time"
          />
        </div>
        <div className="appointment-field appointment-treatment">
          <label htmlFor="appointment-treatment">Treatment Selection</label>
          <select
            defaultValue=""
            id="appointment-treatment"
            name="treatment"
            required
          >
            <option disabled value="">
              Select a treatment
            </option>
            {appointmentTreatments.map((treatment) => (
              <option key={treatment} value={treatment}>
                {treatment}
              </option>
            ))}
          </select>
        </div>
        <button
          className="button button-primary appointment-submit"
          disabled={submitted}
          type="submit"
        >
          Book Appointment
        </button>
      </form>
    </section>
  )
}

function AssuranceBanner() {
  return (
    <section className="assurance-section site-container" aria-label="Our promise">
      <div className="assurance-banner">
        <div className="assurance-icon" aria-hidden="true">
          <HeartHandshake size={30} strokeWidth={1.7} />
        </div>
        <div>
          <h2>You are always in safe hands.</h2>
          <p>We are ready to help, anytime.</p>
        </div>
      </div>
    </section>
  )
}

function WhyChooseUs() {
  return (
    <section className="home-section why-section">
      <div className="site-container why-layout">
        <figure className="why-image-wrap">
          <img
            className="why-image"
            src={treatmentRoomImage}
            alt="Dental treatment room at Sakthi Dental Clinic"
            loading="lazy"
          />
        </figure>
        <div className="why-content">
          <SectionHeading
            description="Thoughtful, dependable dental care for individuals and families."
            eyebrow="Care you can feel good about"
            title="Why Choose Sakthi Dental Clinic?"
          />
          <div className="reason-grid">
            {reasons.map(({ icon: Icon, title, description }, index) => (
              <article className="reason-card" key={title}>
                <span className="card-index">0{index + 1}</span>
                <div className="reason-icon" aria-hidden="true">
                  <Icon size={25} strokeWidth={1.7} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CoreTreatments() {
  return (
    <section className="home-section home-services-section">
      <div className="site-container">
        <SectionHeading
          description="Explore a selection of dental services for you and your family."
          eyebrow="Thoughtful care, all in one place"
          title="Explore Our Services"
        />
        <div className="treatment-grid">
          {treatments.map(({ icon: Icon, title, description }) => (
            <article className="treatment-card" key={title}>
              <div className="treatment-icon" aria-hidden="true">
                <Icon size={24} strokeWidth={1.7} />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="treatment-card-rule" aria-hidden="true" />
            </article>
          ))}
        </div>
        <div className="section-action">
          <Link className="button button-secondary" to="/treatments">
            View Full List of Treatments
            <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </div>
      </div>
    </section>
  )
}

function PatientTestimonials() {
  return (
    <section className="home-section testimonial-section">
      <div className="site-container">
        <SectionHeading
          description="A few words shared by patients about their experiences."
          eyebrow="Kind words"
          title="What Our Patients Say"
        />
        <div className="testimonial-grid">
          {testimonials.map(({ quote, name, rating }) => (
            <figure className="testimonial-card" key={name}>
              <Quote className="testimonial-quote-icon" aria-hidden="true" size={27} />
              <blockquote>{quote}</blockquote>
              <figcaption>
                <span className="testimonial-avatar" aria-hidden="true">
                  {name.charAt(0)}
                </span>
                <span className="testimonial-name">— {name}</span>
                {rating && <span className="testimonial-rating">{rating}</span>}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function ClinicFacilities() {
  return (
    <section className="home-section facilities-section">
      <div className="site-container facilities-layout">
        <div className="facilities-content">
          <SectionHeading
            description="Thoughtful details to make every visit more comfortable."
            eyebrow="A comfortable visit"
            title="Convenience & Comfort for Every Patient"
          />
          <ul className="facility-grid">
            {facilities.map(({ image, title, description }) => (
              <li className="facility-item" key={title}>
                <span className="facility-icon" aria-hidden="true">
                  <img className="facility-icon-image" src={image} alt="" />
                </span>
                <span className="facility-copy">
                  <strong>{title}</strong>
                  <span>{description}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <figure className="facilities-image-wrap">
          <img
            className="facilities-image"
            src={amenitiesImage}
            alt="Patient treatment area at Sakthi Dental Clinic"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  )
}

function HomeCallToAction() {
  return (
    <section className="home-cta-section">
      <div className="site-container home-cta">
        <div>
          <p className="eyebrow">Here for your family</p>
          <h2>Let’s take the next step toward a healthier smile.</h2>
          <p>Our team is ready to help you find the care that feels right.</p>
        </div>
        <div className="home-cta-actions">
          <a
            className="button button-light"
            href="#appointment-form"
            onClick={handleAppointmentLinkClick}
          >
            Fix an Appointment
          </a>
          <Link className="button button-outline-light" to="/contact">
            Contact Us <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export {
  AssuranceBanner,
  AppointmentPanel,
  ClinicFacilities,
  CoreTreatments,
  HomeCallToAction,
  HomeHero,
  PatientTestimonials,
  WhyChooseUs,
}
