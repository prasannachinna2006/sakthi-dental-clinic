import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function SiteLayout() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <main className="site-main" id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default SiteLayout
