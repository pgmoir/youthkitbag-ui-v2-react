import { JSX } from 'react';
import { Link } from 'react-router-dom';

function ForgotPassword(): JSX.Element {
  return (
    <section id="login" className="hero min-h-180">
      <div className="hero-content">
        <div className="card bg-base-300 shrink-0 shadow-2xl max-w-lg">
          <div className="card-body">
            <h2 className="text-3xl font-semibold text-center">
              Forgotten your password?
            </h2>
            <div className="text-center">
              <span>
                If you have forgotten your password, then enter your email here
                and you will be sent a link to create a new password. Please be
                aware that this link is time limited, and will expire in an hour
                after sending. If actually you know your password,{' '}
              </span>
              <Link to="/login" className="link">
                log in direct to your kitbag.
              </Link>
            </div>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                className="input w-full"
                placeholder="Enter your email"
              />
              <button className="btn btn-xl btn-primary mt-4 text-base-300 mb-3">
                Reset Password
              </button>
            </fieldset>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ForgotPassword;
