import { JSX } from 'react';
import { Link } from 'react-router-dom';

function AuthNavbar(): JSX.Element {
  return (
    <nav className="sticky top-0 z-50 navbar bg-neutral text-neutral-content">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-xl">
          YouthKitbag
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex"></div>
      <div className="navbar-end">
        <Link to="/sign-up" className="btn text-base">
          Sign Up
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
          ></ul>
        </div>
      </div>
    </nav>
  );
}

export default AuthNavbar;
