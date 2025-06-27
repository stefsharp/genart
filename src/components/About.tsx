import React from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="about-container">
      <h1>{t('aboutTitle')}</h1>
      <p>{t('aboutDescription')}</p>
    </div>
  );
};

export default About;
