
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import TopAntiviruses from './pages/TopAntiviruses';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Reviews from './pages/Reviews';
import Resources from './pages/Resources';
import CybersecurityGuides from './pages/CybersecurityGuides';
import AntivirusDetail from './pages/AntivirusDetail';
import Disclaimer from './pages/Disclaimer';
import CookiePolicy from './pages/CookiePolicy';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="top-antiviruses" element={<TopAntiviruses />} />
        <Route path="antivirus/:id" element={<AntivirusDetail />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="resources" element={<Resources />} />
        <Route path="cybersecurity-guides" element={<CybersecurityGuides />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />

        {/* Legal Pages */}
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-of-service" element={<TermsOfService />} />
        <Route path="disclaimer" element={<Disclaimer />} />
        <Route path="cookie-policy" element={<CookiePolicy />} />

        {/* Fallback */}
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
