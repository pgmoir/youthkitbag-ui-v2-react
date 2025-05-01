import { JSX } from 'react';
import HeroSection from '../components/HeroSection';

export default function LoggedOutLanding(): JSX.Element {
  return (
    <div className="flex flex-col items-center text-center">
      <HeroSection />
    </div>
  );
}
