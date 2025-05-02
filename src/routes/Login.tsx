import { JSX } from 'react';
import { Link } from 'react-router-dom';

function Login(): JSX.Element {
  return (
    <section id="login" className="hero min-h-180">
      <div className="hero-content">
        <div className="card bg-base-300 shrink-0 shadow-2xl min-w-lg">
          <div className="card-body">
            <h2 className="text-3xl font-semibold text-center">
              Access your kitbags!
            </h2>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                className="input w-full"
                placeholder="Enter your email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input w-full"
                placeholder="Create your password"
              />
              <button className="btn btn-xl btn-primary mt-4 text-base-300 mb-3">
                Log In
              </button>
            </fieldset>
            <div className="text-center">
              <span>If you don&apos;t have an account, </span>
              <Link to="/#signup" className="link">
                then sign up for a new account.
              </Link>
            </div>
            <div className="text-center">
              <span>Or for the forgetful, </span>
              <Link to="/forgot-password" className="link">
                then reset your password.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
