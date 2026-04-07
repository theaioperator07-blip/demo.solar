import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import HowItWorks from './components/HowItWorks';
import WhySolar from './components/WhySolar';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <SocialProof />
      <HowItWorks />
      <WhySolar />
      <Reviews />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
