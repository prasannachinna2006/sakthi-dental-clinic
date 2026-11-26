import { Navigate, Route, Routes } from 'react-router-dom'
import SiteLayout from '../layouts/SiteLayout'
import About from '../pages/About'
import Contact from '../pages/Contact'
import FAQs from '../pages/FAQs'
import Home from '../pages/Home'
import PrivacyPolicy from '../pages/PrivacyPolicy'
import Treatments from '../pages/Treatments'

function AppRoutes() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Treatments />} path="/treatments" />
        <Route element={<FAQs />} path="/faqs" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<PrivacyPolicy />} path="/privacy-policy" />
        <Route element={<Navigate replace to="/" />} path="*" />
      </Route>
    </Routes>
  )
}

export default AppRoutes
