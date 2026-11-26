import { useLayoutEffect } from 'react'
import { HashRouter, useLocation } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'

function ScrollToTop() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <AppRoutes />
    </HashRouter>
  )
}

export default App
