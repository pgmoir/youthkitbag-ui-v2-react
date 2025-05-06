'use client';

import { JSX, useActionState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  type FormActionState,
  signUpAction,
  type SignUpFormData,
} from '../../server/signupAction';

function SignUp(): JSX.Element {
  const navigate = useNavigate();

  const [state, formAction, isPending] = useActionState<
    FormActionState<SignUpFormData>,
    FormData
  >(signUpAction, { success: false });

  useEffect(() => {
    if (state?.errorMessage) {
      toast.error(state?.errorMessage);
    }
  }, [state?.errorMessage]);

  useEffect(() => {
    if (state?.success) {
      toast.success('Signup successful! Redirecting...', {
        autoClose: 500, // pause for half a second to confirm
        onClose: () => {
          navigate('/dashboard');
        },
      });
    }
  }, [state?.success, state?.message, navigate]);

  return (
    <section id="signup" className="hero min-h-180">
      <div className="hero-content">
        <div className="card bg-base-300 shrink-0 shadow-2xl min-w-lg">
          <div className="card-body">
            <h2 className="text-3xl font-semibold text-center">
              Let&apos;s get started!
            </h2>
            <form className="mb-2" action={formAction}>
              <fieldset className="fieldset">
                <div>
                  <legend className="fieldset-legend">First Name</legend>
                  <input
                    name="firstName"
                    className="input w-full"
                    placeholder="Enter your first name"
                    defaultValue={state.data?.firstName}
                  />
                  {state?.errors?.firstName && (
                    <p className="text-red-500 text-sm mt-1">
                      {state.errors.firstName}
                    </p>
                  )}
                </div>
                <div>
                  <legend className="fieldset-legend">Last Name</legend>
                  <input
                    name="lastName"
                    className="input w-full"
                    placeholder="Enter your last name"
                    defaultValue={state.data?.lastName}
                  />
                  {state?.errors?.lastName && (
                    <p className="text-red-500 text-sm mt-1">
                      {state.errors.lastName}
                    </p>
                  )}
                </div>
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
                  {isPending ? (
                    <span>Signing up...</span>
                  ) : (
                    <span>Sign Up</span>
                  )}
                </button>
              </fieldset>
              {state?.errorMessage && (
                <p className="text-red-600 mt-1 text-md text-center">
                  {state.errorMessage}
                </p>
              )}
            </form>
            <div className="text-center">
              <span>If you already have a kitbag, </span>
              <Link to="/log-in" className="link">
                then log in for access
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
