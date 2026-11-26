import { ArrowRight } from 'lucide-react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import alignerImage from '../assets/treatments/aligner.png'
import artificialCompleteDentureImage from '../assets/treatments/artificial-complete-denture.png'
import bleachingImage from '../assets/treatments/bleaching.png'
import flapSurgeryImage from '../assets/treatments/flap-surgery.png'
import fixedPartialDentureImage from '../assets/treatments/fixed-partial-denture.png'
import implantsImage from '../assets/treatments/implants.png'
import laserSurgeryImage from '../assets/treatments/laser-surgery.png'
import orthodonticTreatmentImage from '../assets/treatments/orthodontic-treatment.png'
import pediatricDentistryImage from '../assets/treatments/pediatric-dentistry.png'
import rootCanalTreatmentImage from '../assets/treatments/root-canal-treatment.png'
import teethCleaningImage from '../assets/treatments/teeth-cleaning.png'
import teethExtractionImage from '../assets/treatments/teeth-extraction.png'
import toothFillingImage from '../assets/treatments/tooth-filling.jpg'
import veneerTreatmentImage from '../assets/treatments/veneer-treatment.jpg'
import wisdomTeethRemovalImage from '../assets/treatments/wisdom-teeth-removal.png'
import '../styles/treatments.css'

const treatments = [
  {
    name: 'Wisdom Teeth Removal',
    image: wisdomTeethRemovalImage,
    description:
      'If impacted or problematic, wisdom teeth can cause discomfort and oral health risks. At Sakthi Dental Clinic, we specialize in gentle and effective wisdom tooth removal, using modern techniques and anesthesia options to ensure a smooth, pain-free experience. We also provide comprehensive post-operative care to support quick recovery and lasting comfort.',
  },
  {
    name: 'Veneer Treatment',
    image: veneerTreatmentImage,
    description:
      'Transform your smile with dental veneers, thin, custom-made shells designed to cover imperfections such as chips, gaps, or discoloration. At Sakthi Dental Clinic, we offer high-quality veneers that enhance your teeth’s appearance, giving you a flawless and natural-looking smile.',
  },
  {
    name: 'Tooth-Filling',
    image: toothFillingImage,
    description:
      'At Sakthi Dental Clinic, we specialize in restoring smiles through expert tooth filling services. Whether tooth damage is caused by cavities, trauma, or wear from habits like teeth grinding or nail-biting, our team uses high-quality materials and the latest techniques to repair and protect your teeth. We focus on sealing gaps effectively to prevent future decay and ensure long-term oral health. Our goal is to preserve your natural tooth structure while enhancing both function and appearance, giving you a healthier, more confident smile.',
  },
  {
    name: 'Teeth Extraction',
    image: teethExtractionImage,
    description:
      'When a tooth is beyond repair, Sakthi Dental Clinic ensures that the extraction process is handled with the utmost care and comfort. Our experienced dental team evaluates every option before recommending removal, but when necessary, we perform extractions using gentle techniques to minimize discomfort. We prioritize creating a stress-free environment, explaining each step to our patients. Your health and comfort are always our focus, and we aim to make tooth extraction as smooth and painless as possible, supporting you through every stage of recovery.',
  },
  {
    name: 'Teeth Cleaning',
    image: teethCleaningImage,
    description:
      'At Sakthi Dental Clinic, we offer advanced, non-surgical gum care using modern LASER technology for precise and effective treatment. Whether you’re dealing with early signs of gum disease or a more advanced condition, our skilled professionals ensure thorough cleaning to restore gum health. Scaling is advised for moderate cases to remove plaque and tartar buildup, while more severe periodontal issues may require deep cleaning procedures like root planing, supported by LASER treatment. This approach not only treats existing problems but also serves as a crucial preparatory step before any surgical intervention.',
  },
  {
    name: 'Root Canal Treatment',
    image: rootCanalTreatmentImage,
    description:
      'When tooth infections reach deep into the pulp, root canal treatment becomes essential. At Sakthi Dental Clinic, we carefully remove infected tissue, clean the area thoroughly, and seal the tooth to prevent future issues. Our focus is on relieving pain, eliminating infection, and preserving your natural tooth structure for long-term dental health.',
  },
  {
    name: 'Pediatric Dentistry',
    image: pediatricDentistryImage,
    description:
      'At Sakthi Dental Clinic, we provide gentle and comprehensive dental care for children. Our friendly team creates a welcoming environment, ensuring young patients feel safe and comfortable during their visits. From routine check-ups to preventive treatments, we focus on building healthy dental habits for a lifetime of bright smiles.',
  },
  {
    name: 'Orthodontic Treatment',
    image: orthodonticTreatmentImage,
    description:
      'Correct misaligned teeth with customized orthodontic treatments at Sakthi Dental Clinic. We offer a variety of braces, metal, ceramic, or lingual, to suit your preferences. Our goal is to achieve improved alignment, better bite function, and a confident, harmonious smile.',
  },
  {
    name: 'Laser Surgery',
    image: laserSurgeryImage,
    description:
      'At Sakthi Dental Clinic, we utilize advanced laser technology to perform precise, minimally invasive dental treatments. From soft tissue surgeries to gum care, laser procedures offer faster healing, reduced discomfort, and enhanced accuracy. Whether you’re undergoing gum reshaping or other corrective treatments, our state-of-the-art laser equipment ensures efficient, safe, and comfortable care tailored to your needs.',
  },
  {
    name: 'Implants',
    image: implantsImage,
    description:
      'Dental implants at Sakthi Dental Clinic offer a modern and reliable solution for replacing missing teeth. Using biocompatible materials like titanium, we securely place artificial roots into the jawbone, creating a stable foundation for prosthetic teeth. Our advanced implant procedures restore both the appearance and strength of your smile, ensuring a natural feel and long-lasting results. Trust our experienced team to help you regain optimal oral function and confidence with cutting-edge implant technology.',
  },
  {
    name: 'Flap Surgery',
    image: flapSurgeryImage,
    description:
      'For advanced gum disease, flap surgery may be necessary. Our skilled team at Sakthi Dental Clinic performs this procedure by lifting the gum tissue to remove deep-seated plaque and bacteria, then repositioning it for optimal healing. This treatment helps prevent further periodontal issues and supports gum health.',
  },
  {
    name: 'Fixed Partial Denture',
    image: fixedPartialDentureImage,
    description:
      'Our expertly crafted fixed partial dentures offer a secure solution for replacing missing teeth by anchoring prosthetic teeth to adjacent natural teeth or implants. At Sakthi Dental Clinic, we focus on custom-made dental bridges that restore your smile’s appearance while improving chewing function and maintaining oral stability.',
  },
  {
    name: 'Bleaching',
    image: bleachingImage,
    description:
      "Brighten your smile with professional teeth whitening services at Sakthi Dental Clinic. We treat both external and internal stains, using safe bleaching agents to lighten your teeth by several shades. Whether addressing discoloration from food, beverages, or age, our whitening treatments restore your smile's natural radiance and boost your confidence.",
  },
  {
    name: 'Artificial Complete Denture',
    image: artificialCompleteDentureImage,
    description:
      'At Sakthi Dental Clinic, we craft high-quality complete dentures to restore both function and aesthetics for patients with missing teeth. Our dentures are designed with precision using durable materials, providing a natural look and a comfortable fit. Whether you’re replacing several teeth or a full arch, our customized solutions help you regain confidence and improve daily functionality. We focus on delivering practical, long-lasting dentures that enhance your smile and overall oral health.',
  },
  {
    name: 'Aligner',
    image: alignerImage,
    description:
      'For a discreet alternative to traditional braces, Sakthi Dental Clinic offers clear aligners. These transparent, removable trays gradually shift your teeth into perfect alignment, providing comfort and flexibility throughout your orthodontic journey.',
  },
]

function Treatments() {
  useEffect(() => {
    document.title = 'Dental Treatments in Hosur | Sakthi Dental Clinic'
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        'content',
        'Explore dental treatments at Sakthi Dental Clinic in Hosur, including preventive, restorative, cosmetic and family dental care.',
      )
  }, [])

  return (
    <div className="treatments-page">
      <section
        aria-labelledby="treatments-page-title"
        className="treatments-hero"
      >
        <div className="site-container treatments-hero-content">
          <p className="eyebrow">PERSONALIZED DENTAL CARE IN HOSUR</p>
          <h1 id="treatments-page-title">Our Dental Treatments</h1>
          <p className="treatments-hero-description">
            Explore our comprehensive range of dental treatments designed to
            support your oral health, restore your smile and provide
            comfortable, personalised dental care.
          </p>
        </div>
      </section>

      <section
        aria-label="Dental treatments"
        className="treatments-list-section"
      >
        <div className="site-container treatments-list">
          {treatments.map((treatment, index) => (
            <article
              aria-labelledby={`treatment-title-${index + 1}`}
              className={`treatment-section${index % 2 === 1 ? ' treatment-section--reverse' : ''}`}
              key={treatment.name}
            >
              <div className="treatment-image-wrap">
                <img
                  alt={`Treatment image: ${treatment.name}`}
                  className="treatment-image"
                  decoding="async"
                  loading="lazy"
                  src={treatment.image}
                />
              </div>
              <div className="treatment-content">
                <h2 id={`treatment-title-${index + 1}`}>{treatment.name}</h2>
                <p>{treatment.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="treatments-cta-title"
        className="treatments-cta-section"
      >
        <div className="site-container">
          <div className="treatments-cta-panel">
            <div className="treatments-cta-copy">
              <p className="treatments-cta-eyebrow">YOUR SMILE, OUR PRIORITY</p>
              <h2 id="treatments-cta-title">
                Ready to Care for Your Smile?
              </h2>
              <p>
                Our team is here to help you explore the right dental care for
                your needs.
              </p>
            </div>
            <Link className="treatments-cta-link" to="/contact">
              Book Your Appointment
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Treatments
