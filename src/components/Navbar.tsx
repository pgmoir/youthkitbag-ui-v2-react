import { JSX } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar(): JSX.Element {
  return (
    <nav className="navbar bg-neutral text-neutral-content">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-xl">
          YouthKitbag
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base">
          <li>
            <Link to="/#kitbags">Kitbags</Link>
          </li>
          <li>
            <NavLink to="/#groups">Groups</NavLink>
          </li>
          <li>
            <Link to="/#trust">Trust</Link>
          </li>
          <li>
            <Link to="/#market">Market</Link>
          </li>
          <li>
            <Link to="/#signup">Sign Up</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/signin" className="btn text-base">
          Sign In
        </Link>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-neutral text-neutral-content rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/#kitbags">Kitbags</Link>
            </li>
            <li>
              <Link to="/#groups">Groups</Link>
            </li>
            <li>
              <Link to="/#trust">Trust</Link>
            </li>
            <li>
              <Link to="/#market">Market</Link>
            </li>
            <li>
              <Link to="/#signup">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
