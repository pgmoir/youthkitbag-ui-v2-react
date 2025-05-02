import { JSX } from 'react';

function Navbar(): JSX.Element {
  return (
    <nav className="navbar bg-primary text-primary-content">
      <a href="/" className="link link-hover text-base-300">
        YouthKitbag
      </a>
    </nav>
  );
}

export default Navbar;
