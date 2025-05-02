import { JSX } from 'react';
import {
  HeroSectionGroups,
  HeroSectionOrganise,
  HeroSectionTitle,
} from './HeroSections';

export default function LoggedOutHome(): JSX.Element {
  return (
    <div>
      <HeroSectionTitle />
      <HeroSectionOrganise />
      <HeroSectionGroups />
    </div>
  );
}
