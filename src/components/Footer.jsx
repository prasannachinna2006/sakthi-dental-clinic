import { Link } from 'react-router-dom'
import logo from '../assets/sakthi-dental-clinic-logo.png'
import '../styles/footer.css'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Treatments', to: '/treatments' },
  { label: 'FAQs', to: '/faqs' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
]

const treatments = [
  'Teeth Cleaning',
  'Tooth Filling',
  'Tooth Extraction',
  'Dental Implants',
  'Root Canal',
  'Orthodontics',
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid site-container">
        <section className="footer-brand" aria-label="About Sakthi Dental Clinic">
          <Link className="footer-logo-link" to="/" aria-label="Sakthi Dental Clinic home">
            <img className="footer-logo" src={logo} alt="Sakthi Dental Clinic" />
          </Link>
          <p>
            Compassionate dental care for women, children and families in Hosur.
          </p>
        </section>

        <nav className="footer-column" aria-label="Quick links">
          <h2 className="footer-heading">Quick Links</h2>
          <ul className="footer-list">
            {quickLinks.map(({ label, to }) => (
              <li key={to}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <section className="footer-column" aria-labelledby="footer-treatments">
          <h2 className="footer-heading" id="footer-treatments">Treatments</h2>
          <ul className="footer-list">
            {treatments.map((treatment) => (
              <li key={treatment}>{treatment}</li>
            ))}
          </ul>
        </section>

        <section className="footer-column" aria-labelledby="footer-contact">
          <h2 className="footer-heading" id="footer-contact">Contact</h2>
          <address className="footer-contact">
            <p>B2/8, SBM Layout, Anthivadi, Hosur, Tamil Nadu 635109, India.</p>
            <p>
              <a href="tel:+919862890897">+91 9862890897</a>
            </p>
            <p>
              <a href="tel:+919363298118">+91 9363298118</a>
            </p>
            <p>
              <a href="mailto:info@sakthidentalclinic.in">
                info@sakthidentalclinic.in
              </a>
            </p>
          </address>
        </section>
      </div>

      <div className="footer-bottom">
        <div className="site-container footer-bottom-inner">
          <p>Sakthi Dental Clinic</p>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
