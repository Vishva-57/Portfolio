import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';

const App = () => {
  return (
    <main
      className="relative w-full"
      style={{ overflowX: 'clip', background: '#0C0C0C' }}
    >
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ServicesSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
    </main>
  );
};

export default App;
