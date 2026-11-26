import {
  Award,
  BadgeCheck,
  Compass,
  HeartHandshake,
} from 'lucide-react'
import consultationRoomImage from '../../assets/clinic-consultation-room.png'

const teamMembers = [
  { name: 'Dr. Anupriya', role: 'Founder' },
  { name: 'Dr. Ananya Iyer', role: 'Prosthodontist' },
  { name: 'Dr. Meera Subramanian', role: 'Endodontist' },
  { name: 'Dr. Arvind Kumar', role: 'Dental Surgeon' },
  { name: 'Dr. Sneha N', role: 'Orthodontist' },
  { name: 'Dr. Srinivas Rohit Ramanujam', role: 'Implantologist' },
  { name: 'Dr. Balu', role: 'Laser Surgeon' },
  { name: 'Dr. Vikram Raj Kishore', role: 'Aligners Partner' },
  { name: 'Dr. Ajay Jumar', role: 'Oral & Maxillofacial Surgeon' },
]

const values = [
  {
    icon: Compass,
    title: 'Our Vision',
    description:
      'To be a trusted dental care destination known for compassionate service, clinical excellence and a patient-first approach, helping individuals and families achieve healthy and confident smiles.',
  },
  {
    icon: HeartHandshake,
    title: 'Our Mission',
    description:
      'Our mission is to deliver personalised, ethical and quality dental care through experienced professionals, modern dental practices and a welcoming environment. We aim to make every dental visit comfortable while building long-term relationships based on trust, care and patient satisfaction.',
  },
]

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="about-section-heading">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

function AboutIntroduction() {
  return (
    <section className="about-intro-section">
      <div className="site-container about-intro-layout">
        <div className="about-intro-copy">
          <p className="eyebrow">Our clinic</p>
          <h1>About Sakthi Dental Clinic</h1>
          <p>
            Sakthi Dental Clinic is dedicated to providing compassionate,
            quality-driven dental care for women, children and families. With a
            commitment to patient comfort, personalised care and modern dental
            practices, our clinic strives to create a welcoming environment
            where every patient feels confident and cared for.
          </p>
          <p>
            We believe that good oral health plays an important role in overall
            well-being. Our experienced dental team works to provide
            comprehensive dental services while prioritising patient comfort,
            trust and satisfaction.
          </p>
        </div>
        <figure className="about-intro-image-wrap">
          <img
            className="about-intro-image"
            src={consultationRoomImage}
            alt="Treatment room at Sakthi Dental Clinic in Hosur"
            loading="lazy"
          />
          <figcaption className="about-image-caption">
            <span className="about-image-caption-icon" aria-hidden="true">
              <BadgeCheck size={19} />
            </span>
            A welcoming space for your care
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

function FounderSection() {
  return (
    <section className="about-founder-section">
      <div className="site-container founder-layout">
        <div className="founder-visual">
          <div className="founder-visual-mark" aria-hidden="true">
            <Award size={38} strokeWidth={1.6} />
          </div>
          <p className="founder-visual-kicker">Our Founder</p>
          <h3>Dr. Anupriya</h3>
          <p className="founder-visual-caption">
            A commitment to compassionate, quality dental care.
          </p>
          <div className="founder-milestones">
            <div>
              <strong>2000</strong>
              <span>Graduated</span>
            </div>
            <div>
              <strong>2004</strong>
              <span>Founded the clinic</span>
            </div>
            <div>
              <strong>20+</strong>
              <span>Years of experience</span>
            </div>
          </div>
        </div>

        <div className="founder-copy">
          <p className="eyebrow">The story behind our care</p>
          <h2>Meet Our Founder — Dr. Anupriya</h2>
          <p>
            Dr. Anupriya graduated in 2000 and began her professional journey
            at Mathura Clinic, where she gained six years of valuable
            experience.
          </p>
          <p>
            In 2004, she founded Sakthi Dental Clinic in Hosur with the vision
            of providing compassionate, accessible and quality dental care to
            the community.
          </p>
          <p>
            Over the years, she has also served as a consultant at Primary
            Health Center and Chandara Hospital for more than a decade,
            contributing to her extensive clinical experience and dedication
            to patient care.
          </p>
          <p>
            With over 20 years of experience, Dr. Anupriya continues to lead
            Sakthi Dental Clinic with a commitment to professional excellence,
            patient comfort and quality dentistry.
          </p>
        </div>
      </div>
    </section>
  )
}

function VisionMissionSection() {
  return (
    <section className="about-values-section">
      <div className="site-container">
        <div className="about-values-grid">
          {values.map(({ icon: Icon, title, description }) => (
            <article className="about-value-card" key={title}>
              <span className="about-value-icon" aria-hidden="true">
                <Icon size={27} strokeWidth={1.7} />
              </span>
              <h2>{title}</h2>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function getInitials(name) {
  return name
    .replace(/^Dr\.\s*/, '')
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
}

function TeamSection() {
  return (
    <section className="about-team-section">
      <div className="site-container">
        <SectionHeading
          description="Our experienced team of dental professionals is committed to providing comprehensive, personalised and compassionate dental care."
          eyebrow="The people who care for you"
          title="Meet Our Dental Team"
        />
        <ul className="about-team-grid">
          {teamMembers.map(({ name, role }) => (
            <li className="about-team-card" key={name}>
              <span className="team-initials" aria-hidden="true">
                {getInitials(name)}
              </span>
              <h3>{name}</h3>
              <p>{role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export {
  AboutIntroduction,
  FounderSection,
  TeamSection,
  VisionMissionSection,
}
