import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  return (
    <div className="lang-switcher">
      <button
        className={i18n.language === 'en' ? 'active' : ''}
        onClick={() => i18n.changeLanguage('en')}
        aria-label="Switch to English"
      >EN</button>
      <button
        className={i18n.language === 'fr' ? 'active' : ''}
        onClick={() => i18n.changeLanguage('fr')}
        aria-label="Passer en français"
      >FR</button>
    </div>
  );
};

export default LanguageSwitcher;
