import React, { ReactNode } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Gallery from '../components/ui/Gallery';
import About from '../components/ui/About';
import ContactForm from '../components/ui/ContactForm';
import { useScrollAnimation } from '../hooks/useScrollAnimation';


const AnimatedSection = ({ children }: { children: ReactNode }) => {
  const [ref, isVisible] = useScrollAnimation();
  
  const sectionRef = ref as React.RefObject<HTMLDivElement>;

  return (
    <div ref={sectionRef} className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}>
      {children}
    </div>
  );
};

function HomePage() {
  return (
    <div className="App">
      <Header />
      <main>
        <AnimatedSection>
          <Gallery />
        </AnimatedSection>
        <AnimatedSection>
          <About />
        </AnimatedSection>
        <AnimatedSection>
          <ContactForm />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;