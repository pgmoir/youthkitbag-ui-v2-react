import { JSX } from 'react';
import {
  HeroSectionGroups,
  HeroSectionOrganise,
  HeroSectionSignup,
  HeroSectionTitle,
  HeroSectionTrade,
  HeroSectionTrust,
} from './HeroSections';

export default function LoggedOutHome(): JSX.Element {
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
