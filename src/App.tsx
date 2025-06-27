import { useState } from 'react';
import './App.css';
import PaintingGrid from './components/PaintingGrid';
import type { Painting } from './components/PaintingGrid';
import PaintingModal from './components/PaintingModal';
import Footer from './components/Footer';
import LanguageSwitcher from './components/LanguageSwitcher';
import About from './components/About';
import { useTranslation } from 'react-i18next';
import PAINTINGS from './paintings';

function App() {
  const { t } = useTranslation();
  const [selected, setSelected] = useState<Painting | null>(null);
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div className="app-root">
      <LanguageSwitcher />
      <header>
        <h1 style={{ fontFamily: 'Montserrat, Segoe UI, Arial, sans-serif', color: '#f3f3f3', fontWeight: 700, fontSize: '2.5rem', margin: '2rem 0 1rem 0', letterSpacing: '0.04em' }}>
          {t('galleryTitle')}
        </h1>
        <nav style={{ marginBottom: '2rem' }}>
          <button className="about-btn" onClick={() => setShowAbout((v) => !v)}>
            {t('aboutTitle')}
          </button>
        </nav>
      </header>
      {showAbout ? (
        <About />
      ) : (
        <PaintingGrid
          paintings={PAINTINGS}
          onSelect={setSelected}
        />
      )}
      {selected && (
        <PaintingModal
          painting={selected}
          onClose={() => setSelected(null)}
          title={t(`paintingTitle${selected.id}`)}
          description={t(`paintingDescription${selected.id}`)}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
