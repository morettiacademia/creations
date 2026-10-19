import './App.css';
import { CHECKOUT_URL, CONNECTIONS_URL } from './config';
import Header from './components/Header';
import Hero from './components/Hero';
import Pain from './components/Pain';
import Repositioning from './components/Repositioning';
import Presentation from './components/Presentation';
import Pillars from './components/Pillars';
import Journey from './components/Journey';
import Encounters from './components/Encounters';
import Missions from './components/Missions';
import Accompaniment from './components/Accompaniment';
import Mentors from './components/Mentors';
import MethodImpacto from './components/MethodImpacto';
import CalendarSection from './components/CalendarSection';
import Deliverables from './components/Deliverables';
import Connections from './components/Connections';
import Offer from './components/Offer';
import Faq from './components/Faq';
import CtaFinal from './components/CtaFinal';
import Footer from './components/Footer';
import StickyMobileCta from './components/StickyMobileCta';

function scrollToOffer() {
  document.getElementById('oferta')?.scrollIntoView({ block: 'start' });
}

function goToCheckout() {
  window.open(CHECKOUT_URL, '_blank');
}

function goToConnections() {
  window.open(CONNECTIONS_URL, '_blank');
}

export default function App() {
  return (
    <div className="page">
      <Header onCtaClick={scrollToOffer} />
      <main>
        <Hero onCtaClick={scrollToOffer} />
        <Pain />
        <Repositioning />
        <Presentation />
        <Pillars onCtaClick={scrollToOffer} />
        <Journey />
        <Encounters onCtaClick={scrollToOffer} />
        <Missions />
        <Accompaniment />
        <Mentors onCtaClick={scrollToOffer} />
        <MethodImpacto />
        <CalendarSection />
        <Deliverables />
        <Connections onCtaClick={goToConnections} />
        <Offer onCheckoutClick={goToCheckout} />
        <Faq />
        <CtaFinal onCheckoutClick={goToCheckout} />
      </main>
      <Footer />
      <StickyMobileCta onCtaClick={scrollToOffer} />
    </div>
  );
}
