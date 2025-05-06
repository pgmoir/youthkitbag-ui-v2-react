'use client';

import { JSX, useActionState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAction, LoginActionState } from '../server/login';

function Login(): JSX.Element {
  const [state, formAction, isPending] = useActionState<
    LoginActionState,
    FormData
  >(loginAction, { success: false });

  useEffect(() => {
    if (state?.errorMessage) {
      toast.error(state?.errorMessage);
    }
  }, [state]);

  return (
    <section id="login" className="hero min-h-180">
      <div className="hero-content">
        <div className="card bg-base-300 shrink-0 shadow-2xl min-w-lg">
          <div className="card-body">
            <h2 className="text-3xl font-semibold text-center">
              Access your kitbags!
            </h2>
            <form className="mb-2" action={formAction}>
              <fieldset className="fieldset">
                <div>
                  <legend className="fieldset-legend">Email</legend>
                  <input
                    name="email"
                    type="email"
                    className="input w-full"
                    placeholder="Enter your email"
                    defaultValue={state.data?.email}
                  />
                  {state?.errors?.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {state.errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <legend className="fieldset-legend">Password</legend>
                  <input
                    name="password"
                    type="password"
                    className="input w-full"
                    placeholder="Create your password"
                    defaultValue={state.data?.password}
                  />
                  {state?.errors?.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {state.errors.password}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="btn btn-xl btn-primary mt-4 text-base-300"
                  disabled={isPending}
                >
                  {isPending ? <span>Logging in...</span> : <span>Log In</span>}
                </button>
              </fieldset>
              {state?.errorMessage && (
                <p className="text-red-600 mt-1 text-md text-center">
                  {state.errorMessage}
                </p>
              )}
            </form>
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
