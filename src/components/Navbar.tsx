import { JSX } from 'react';
import { Link } from 'react-router-dom';

function Navbar(): JSX.Element {
  return (
    <nav className="nav-container">
      <Link to="/" className="nav-logo">
        YouthKitbag
      </Link>
    </nav>
  );
}

export default Navbar;
