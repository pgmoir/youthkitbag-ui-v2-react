import { JSX, useEffect } from 'react';
import {
  HeroSectionGroups,
  HeroSectionOrganise,
  HeroSectionSignup,
  HeroSectionTitle,
  HeroSectionTrade,
  HeroSectionTrust,
} from './HeroSections';

export default function LoggedOutHome(): JSX.Element {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <div>
      <HeroSectionTitle />
      <HeroSectionOrganise />
      <HeroSectionGroups />
      <HeroSectionTrust />
      <HeroSectionTrade />
      <HeroSectionSignup />
    </div>
  );
}
