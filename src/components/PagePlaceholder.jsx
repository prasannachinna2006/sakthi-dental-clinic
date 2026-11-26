import { useEffect } from 'react'

function PagePlaceholder({ title, description }) {
  useEffect(() => {
    document.title = `${title} | Sakthi Dental Clinic`
    const metaDescription = document.querySelector('meta[name="description"]')

    if (metaDescription) {
      metaDescription.setAttribute('content', description)
    }
  }, [description, title])

  return (
    <section className="page-placeholder site-container" aria-labelledby="page-title">
      <p className="eyebrow">Sakthi Dental Clinic · Hosur</p>
      <h1 className="page-title" id="page-title">{title}</h1>
      <p className="page-placeholder-message">
        This page&apos;s content will be implemented in its respective phase.
      </p>
    </section>
  )
}

export default PagePlaceholder
