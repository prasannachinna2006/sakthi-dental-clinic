import { Clock3, Mail, MapPin, Phone, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import '../styles/contact.css'

const treatments = [
  'Wisdom Teeth Removal',
  'Veneer Treatment',
  'Tooth-Filling',
  'Teeth Extraction',
  'Teeth Cleaning',
  'Root Canal Treatment',
  'Pediatric Dentistry',
  'Orthodontic Treatment',
  'Laser Surgery',
  'Implants',
  'Flap Surgery',
  'Fixed Partial Denture',
  'Bleaching',
  'Artificial Complete Denture',
  'Aligner',
]

const initialFormValues = {
  fullName: '',
  phone: '',
  email: '',
  treatment: '',
  preferredDate: '',
  message: '',
}

const fieldIds = {
  fullName: 'contact-full-name',
  phone: 'contact-phone',
  email: 'contact-email',
  treatment: 'contact-treatment',
  preferredDate: 'contact-preferred-date',
  message: 'contact-message',
}

const initialEmailFormValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const emailFieldIds = {
  name: 'email-modal-name',
  email: 'email-modal-address',
  subject: 'email-modal-subject',
  message: 'email-modal-message',
}

function validateEmailForm(values) {
  const errors = {}

  if (!values.name.trim()) {
    errors.name = 'Enter your name.'
  }

  if (!values.email.trim()) {
    errors.email = 'Enter your email address.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }

  if (!values.subject.trim()) {
    errors.subject = 'Enter a subject.'
  }

  if (!values.message.trim()) {
    errors.message = 'Enter a message.'
  }

  return errors
}

function validateForm(values) {
  const errors = {}
  const phoneDigits = values.phone.replace(/\D/g, '')

  if (!values.fullName.trim()) {
    errors.fullName = 'Enter your full name.'
  }

  if (!values.phone.trim()) {
    errors.phone = 'Enter your phone number.'
  } else if (
    !/^\+?[\d\s()-]+$/.test(values.phone.trim()) ||
    phoneDigits.length < 10 ||
    phoneDigits.length > 15
  ) {
    errors.phone = 'Enter a valid phone number with 10 to 15 digits.'
  }

  if (!values.email.trim()) {
    errors.email = 'Enter your email address.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }

  if (!values.treatment) {
    errors.treatment = 'Select a treatment.'
  }

  if (!values.message.trim()) {
    errors.message = 'Enter a message.'
  }

  return errors
}

function Contact() {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [fieldErrors, setFieldErrors] = useState({})
  const [formNotice, setFormNotice] = useState(null)
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false)
  const [emailFormValues, setEmailFormValues] = useState(initialEmailFormValues)
  const [emailFieldErrors, setEmailFieldErrors] = useState({})
  const [emailFormSuccess, setEmailFormSuccess] = useState(false)
  const emailDialogRef = useRef(null)

  useEffect(() => {
    document.title = 'Contact Sakthi Dental Clinic | Hosur'
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        'content',
        'Contact Sakthi Dental Clinic in Hosur for consultations and dental care. Find our address, phone numbers, email and contact form.',
      )
  }, [])

  useEffect(() => {
    const dialog = emailDialogRef.current
    if (!dialog) return

    if (isEmailModalOpen && !dialog.open) {
      dialog.showModal()
      dialog.querySelector('input')?.focus()
    } else if (!isEmailModalOpen && dialog.open) {
      dialog.close()
    }
  }, [isEmailModalOpen])

  function openEmailModal() {
    setEmailFormValues(initialEmailFormValues)
    setEmailFieldErrors({})
    setEmailFormSuccess(false)
    setIsEmailModalOpen(true)
  }

  function handleEmailModalClose() {
    setIsEmailModalOpen(false)
    setEmailFormValues(initialEmailFormValues)
    setEmailFieldErrors({})
    setEmailFormSuccess(false)
  }

  function closeEmailModal() {
    handleEmailModalClose()
    if (emailDialogRef.current?.open) {
      emailDialogRef.current.close()
    }
  }

  function handleEmailFormChange(event) {
    const { name, value } = event.target
    setEmailFormValues((currentValues) => ({ ...currentValues, [name]: value }))
    setEmailFieldErrors((currentErrors) => {
      if (!currentErrors[name]) return currentErrors

      const nextErrors = { ...currentErrors }
      delete nextErrors[name]
      return nextErrors
    })
  }

  function handleEmailFormSubmit(event) {
    event.preventDefault()
    const errors = validateEmailForm(emailFormValues)
    setEmailFieldErrors(errors)

    if (Object.keys(errors).length > 0) {
      document.getElementById(emailFieldIds[Object.keys(errors)[0]])?.focus()
      return
    }

    setEmailFormValues(initialEmailFormValues)
    setEmailFormSuccess(true)
  }

  function handleChange(event) {
    const { name, value } = event.target
    setFormValues((currentValues) => ({ ...currentValues, [name]: value }))
    setFieldErrors((currentErrors) => {
      if (!currentErrors[name]) {
        return currentErrors
      }

      const nextErrors = { ...currentErrors }
      delete nextErrors[name]
      return nextErrors
    })
    setFormNotice(null)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validateForm(formValues)
    setFieldErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setFormNotice({
        type: 'error',
        message: 'Please correct the highlighted fields.',
      })
      const firstInvalidField = Object.keys(nextErrors)[0]
      document.getElementById(fieldIds[firstInvalidField])?.focus()
      return
    }

    setFormNotice({
      type: 'info',
      message:
        'Your message has not been sent. This frontend-only form does not deliver messages. Please call or email the clinic directly.',
    })
  }

  return (
    <div className="contact-page">
      <section aria-labelledby="contact-page-title" className="contact-hero">
        <div className="site-container contact-hero-content">
          <p className="eyebrow">WE ARE HERE TO HELP</p>
          <h1 id="contact-page-title">Contact Us</h1>
          <p>
            Reach out to Sakthi Dental Clinic for consultations, dental care or
            enquiries. Our team will be happy to help.
          </p>
        </div>
      </section>

      <section
        aria-labelledby="contact-information-title"
        className="contact-information-section"
      >
        <div className="site-container">
          <div className="contact-section-heading">
            <p className="eyebrow">GET IN TOUCH</p>
            <h2 id="contact-information-title">We are easy to reach</h2>
          </div>

          <div className="contact-information-grid">
            <article className="contact-information-card">
              <span aria-hidden="true" className="contact-information-icon">
                <MapPin size={22} />
              </span>
              <h3>Visit the clinic</h3>
              <address>
                B2/8, SBM Layout, Anthivadi, Hosur, Tamil Nadu 635109, India.
              </address>
            </article>

            <article className="contact-information-card">
              <span aria-hidden="true" className="contact-information-icon">
                <Phone size={22} />
              </span>
              <h3>Call us</h3>
              <div className="contact-information-links">
                <a href="tel:+919862890897">+91 9862890897</a>
                <a href="tel:+919363298118">+91 9363298118</a>
              </div>
            </article>

            <article className="contact-information-card">
              <span aria-hidden="true" className="contact-information-icon">
                <Mail size={22} />
              </span>
              <h3>Email us</h3>
              <button
                className="contact-information-email"
                onClick={openEmailModal}
                type="button"
              >
                info@sakthidentalclinic.in
              </button>
            </article>

            <article className="contact-information-card">
              <span aria-hidden="true" className="contact-information-icon">
                <Clock3 size={22} />
              </span>
              <h3>Doctor availability</h3>
              <p>Daily, 9 AM–9 PM</p>
            </article>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="contact-form-title"
        className="contact-form-section"
      >
        <div className="site-container">
          <div className="contact-form-panel">
            <div className="contact-section-heading contact-form-heading">
              <p className="eyebrow">SEND AN ENQUIRY</p>
              <h2 id="contact-form-title">How can we help?</h2>
              <p>
                Share a few details and the treatment you are interested in.
              </p>
            </div>

            <form
              className="contact-form"
              noValidate
              onSubmit={handleSubmit}
            >
              {formNotice && (
                <p
                  aria-live={
                    formNotice.type === 'error' ? 'assertive' : 'polite'
                  }
                  className={`contact-form-notice contact-form-notice--${formNotice.type}`}
                  role={formNotice.type === 'error' ? 'alert' : 'status'}
                >
                  {formNotice.message}
                </p>
              )}

              <div className="contact-form-grid">
                <div className="contact-field">
                  <label htmlFor={fieldIds.fullName}>Full Name</label>
                  <input
                    aria-describedby={
                      fieldErrors.fullName ? 'contact-full-name-error' : undefined
                    }
                    aria-invalid={Boolean(fieldErrors.fullName)}
                    autoComplete="name"
                    className={`contact-control${fieldErrors.fullName ? ' contact-control--invalid' : ''}`}
                    id={fieldIds.fullName}
                    name="fullName"
                    onChange={handleChange}
                    required
                    value={formValues.fullName}
                  />
                  {fieldErrors.fullName && (
                    <span
                      className="contact-field-error"
                      id="contact-full-name-error"
                    >
                      {fieldErrors.fullName}
                    </span>
                  )}
                </div>

                <div className="contact-field">
                  <label htmlFor={fieldIds.phone}>Phone Number</label>
                  <input
                    aria-describedby={
                      fieldErrors.phone ? 'contact-phone-error' : undefined
                    }
                    aria-invalid={Boolean(fieldErrors.phone)}
                    autoComplete="tel"
                    className={`contact-control${fieldErrors.phone ? ' contact-control--invalid' : ''}`}
                    id={fieldIds.phone}
                    inputMode="tel"
                    name="phone"
                    onChange={handleChange}
                    required
                    type="tel"
                    value={formValues.phone}
                  />
                  {fieldErrors.phone && (
                    <span className="contact-field-error" id="contact-phone-error">
                      {fieldErrors.phone}
                    </span>
                  )}
                </div>

                <div className="contact-field">
                  <label htmlFor={fieldIds.email}>Email Address</label>
                  <input
                    aria-describedby={
                      fieldErrors.email ? 'contact-email-error' : undefined
                    }
                    aria-invalid={Boolean(fieldErrors.email)}
                    autoComplete="email"
                    className={`contact-control${fieldErrors.email ? ' contact-control--invalid' : ''}`}
                    id={fieldIds.email}
                    name="email"
                    onChange={handleChange}
                    required
                    type="email"
                    value={formValues.email}
                  />
                  {fieldErrors.email && (
                    <span className="contact-field-error" id="contact-email-error">
                      {fieldErrors.email}
                    </span>
                  )}
                </div>

                <div className="contact-field">
                  <label htmlFor={fieldIds.treatment}>Select Treatment</label>
                  <select
                    aria-describedby={
                      fieldErrors.treatment
                        ? 'contact-treatment-error'
                        : undefined
                    }
                    aria-invalid={Boolean(fieldErrors.treatment)}
                    className={`contact-control${fieldErrors.treatment ? ' contact-control--invalid' : ''}`}
                    id={fieldIds.treatment}
                    name="treatment"
                    onChange={handleChange}
                    required
                    value={formValues.treatment}
                  >
                    <option disabled value="">
                      Select a treatment
                    </option>
                    {treatments.map((treatment) => (
                      <option key={treatment} value={treatment}>
                        {treatment}
                      </option>
                    ))}
                  </select>
                  {fieldErrors.treatment && (
                    <span
                      className="contact-field-error"
                      id="contact-treatment-error"
                    >
                      {fieldErrors.treatment}
                    </span>
                  )}
                </div>

                <div className="contact-field">
                  <label htmlFor={fieldIds.preferredDate}>
                    Preferred Date <span>(optional)</span>
                  </label>
                  <input
                    autoComplete="off"
                    className="contact-control"
                    id={fieldIds.preferredDate}
                    name="preferredDate"
                    onChange={handleChange}
                    type="date"
                    value={formValues.preferredDate}
                  />
                </div>

                <div className="contact-field contact-field--wide">
                  <label htmlFor={fieldIds.message}>Message</label>
                  <textarea
                    aria-describedby={
                      fieldErrors.message ? 'contact-message-error' : undefined
                    }
                    aria-invalid={Boolean(fieldErrors.message)}
                    className={`contact-control contact-message${fieldErrors.message ? ' contact-control--invalid' : ''}`}
                    id={fieldIds.message}
                    name="message"
                    onChange={handleChange}
                    required
                    rows="5"
                    value={formValues.message}
                  />
                  {fieldErrors.message && (
                    <span
                      className="contact-field-error"
                      id="contact-message-error"
                    >
                      {fieldErrors.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="contact-form-actions">
                <button className="contact-submit" type="submit">
                  Submit Message
                </button>
                <p>
                  Frontend-only demo: messages entered here are not sent to the
                  clinic.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="contact-location-title"
        className="contact-location-section"
      >
        <div className="site-container contact-location-layout">
          <div className="contact-location-copy">
            <p className="eyebrow">FIND US IN HOSUR</p>
            <h2 id="contact-location-title">Visit Sakthi Dental Clinic</h2>
            <p>
              B2/8, SBM Layout, Anthivadi, Hosur, Tamil Nadu 635109, India.
            </p>
          </div>
          <div className="contact-map-wrap">
            <iframe
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Sakthi%20Dental%20Clinic%2C%20B2%2F8%2C%20SBM%20Layout%2C%20Anthivadi%2C%20Hosur%2C%20Tamil%20Nadu%20635109%2C%20India&output=embed"
              title="Map showing Sakthi Dental Clinic at its Hosur address"
            />
          </div>
        </div>
      </section>

      <section
        aria-labelledby="contact-cta-title"
        className="contact-cta-section"
      >
        <div className="site-container">
          <div className="contact-cta-panel">
            <div>
              <p className="contact-cta-eyebrow">WE ARE HERE FOR YOU</p>
              <h2 id="contact-cta-title">Would you like to speak with us?</h2>
              <p>
                Call or email Sakthi Dental Clinic for your questions and
                enquiries.
              </p>
            </div>
            <div className="contact-cta-actions">
              <a className="contact-cta-link contact-cta-link--light" href="tel:+919862890897">
                <Phone aria-hidden="true" size={18} />
                Call the clinic
              </a>
              <button
                className="contact-cta-link contact-cta-link--email contact-cta-link--outline"
                onClick={openEmailModal}
                type="button"
              >
                <Mail aria-hidden="true" size={18} />
                Email us
              </button>
            </div>
          </div>
        </div>
      </section>

      <dialog
        aria-describedby="email-modal-description"
        aria-labelledby="email-modal-title"
        className="email-modal"
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeEmailModal()
          }
        }}
        onKeyDown={(event) => {
          if (event.key === 'Escape') {
            event.preventDefault()
            closeEmailModal()
          }
        }}
        onCancel={handleEmailModalClose}
        onClose={handleEmailModalClose}
        ref={emailDialogRef}
      >
        <div className="email-modal-content">
          <div className="email-modal-heading">
            <div>
              <p className="eyebrow">EMAIL THE CLINIC</p>
              <h2 id="email-modal-title">Send us a message</h2>
              <p id="email-modal-description">
                Share your question with Sakthi Dental Clinic.
              </p>
            </div>
            <button
              aria-label="Close email form"
              className="email-modal-close"
              onClick={closeEmailModal}
              type="button"
            >
              <X aria-hidden="true" size={20} />
            </button>
          </div>

          {emailFormSuccess ? (
            <div aria-live="polite" className="email-modal-success" role="status">
              <p>
                Your message has been sent successfully! Thank you for
                contacting Sakthi Dental Clinic.
              </p>
              <p className="email-modal-demo-note">
                This is a frontend-only confirmation; no email was actually
                sent to the clinic.
              </p>
              <div className="email-modal-actions">
                <button
                  className="contact-submit"
                  onClick={closeEmailModal}
                  type="button"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form
              className="email-modal-form"
              noValidate
              onSubmit={handleEmailFormSubmit}
            >
              {Object.keys(emailFieldErrors).length > 0 && (
                <p
                  className="contact-form-notice contact-form-notice--error"
                  role="alert"
                >
                  Please correct the highlighted fields.
                </p>
              )}

              <div className="email-modal-fields">
                <div className="email-modal-field">
                  <label htmlFor={emailFieldIds.name}>Name</label>
                  <input
                    aria-describedby={
                      emailFieldErrors.name
                        ? 'email-modal-name-error'
                        : undefined
                    }
                    aria-invalid={Boolean(emailFieldErrors.name)}
                    autoComplete="name"
                    className="email-modal-control"
                    id={emailFieldIds.name}
                    name="name"
                    onChange={handleEmailFormChange}
                    required
                    value={emailFormValues.name}
                  />
                  {emailFieldErrors.name && (
                    <span
                      className="contact-field-error"
                      id="email-modal-name-error"
                    >
                      {emailFieldErrors.name}
                    </span>
                  )}
                </div>

                <div className="email-modal-field">
                  <label htmlFor={emailFieldIds.email}>Email Address</label>
                  <input
                    aria-describedby={
                      emailFieldErrors.email
                        ? 'email-modal-address-error'
                        : undefined
                    }
                    aria-invalid={Boolean(emailFieldErrors.email)}
                    autoComplete="email"
                    className="email-modal-control"
                    id={emailFieldIds.email}
                    name="email"
                    onChange={handleEmailFormChange}
                    required
                    type="email"
                    value={emailFormValues.email}
                  />
                  {emailFieldErrors.email && (
                    <span
                      className="contact-field-error"
                      id="email-modal-address-error"
                    >
                      {emailFieldErrors.email}
                    </span>
                  )}
                </div>

                <div className="email-modal-field">
                  <label htmlFor={emailFieldIds.subject}>Subject</label>
                  <input
                    aria-describedby={
                      emailFieldErrors.subject
                        ? 'email-modal-subject-error'
                        : undefined
                    }
                    aria-invalid={Boolean(emailFieldErrors.subject)}
                    className="email-modal-control"
                    id={emailFieldIds.subject}
                    name="subject"
                    onChange={handleEmailFormChange}
                    required
                    value={emailFormValues.subject}
                  />
                  {emailFieldErrors.subject && (
                    <span
                      className="contact-field-error"
                      id="email-modal-subject-error"
                    >
                      {emailFieldErrors.subject}
                    </span>
                  )}
                </div>

                <div className="email-modal-field">
                  <label htmlFor={emailFieldIds.message}>Message</label>
                  <textarea
                    aria-describedby={
                      emailFieldErrors.message
                        ? 'email-modal-message-error'
                        : undefined
                    }
                    aria-invalid={Boolean(emailFieldErrors.message)}
                    className="email-modal-control email-modal-message"
                    id={emailFieldIds.message}
                    name="message"
                    onChange={handleEmailFormChange}
                    required
                    rows="5"
                    value={emailFormValues.message}
                  />
                  {emailFieldErrors.message && (
                    <span
                      className="contact-field-error"
                      id="email-modal-message-error"
                    >
                      {emailFieldErrors.message}
                    </span>
                  )}
                </div>
              </div>

              <p className="email-modal-demo-note">
                Frontend-only demo: messages entered here are not emailed to
                the clinic.
              </p>
              <div className="email-modal-actions">
                <button
                  className="email-modal-cancel"
                  onClick={closeEmailModal}
                  type="button"
                >
                  Cancel
                </button>
                <button className="contact-submit" type="submit">
                  Send
                </button>
              </div>
            </form>
          )}
        </div>
      </dialog>
    </div>
  )
}

export default Contact
