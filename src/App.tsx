import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <div className="fixed inset-0 z-0">
        <iframe
          src='https://my.spline.design/retrofuturismbganimation-Z2GBGul3o6yS1ji4oCoYO9rL/'
          className="w-full h-full pointer-events-none"
          style={{ border: 'none' }}
          title="3D Background"
          loading="lazy"
        />
      </div>
      <div
        className="relative z-10"
        style={{
          background: 'rgba(8,8,12,0.88)',
          fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
        }}
      >
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
