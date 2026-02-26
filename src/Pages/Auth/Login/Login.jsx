import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
  const { signInUser } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (data) => {
    signInUser(data.email, data.password)
      .then(result => {
        navigate(location?.state || '/');
        console.log(result)
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 sm:px-6 lg:px-8">
      
      <div className="card w-full max-w-md bg-base-100 shadow-2xl">
        
        <h3 className="text-2xl sm:text-3xl font-bold text-center pt-6">
          Welcome Back
        </h3>
        <p className="text-center text-sm text-gray-500 mb-2">
          Please Login
        </p>

        <form onSubmit={handleSubmit(handleLogin)} className="card-body">
          <fieldset className="space-y-3">

            {/* Email */}
            <div>
              <label className="label">Email</label>
              <input
                type="email"
                {...register('email', { required: true })}
                className="input input-bordered w-full"
                placeholder="Email"
              />
              {errors.email?.type === 'required' &&
                <p className="text-red-500 text-sm">Email is Required</p>}
            </div>

            {/* Password */}
            <div>
              <label className="label">Password</label>
              <input
                type="password"
                {...register('password', { required: true, minLength: 6 })}
                className="input input-bordered w-full"
                placeholder="Password"
              />
              {errors.password?.type === 'required' &&
                <p className="text-red-500 text-sm">Password is Required</p>}
              {errors.password?.type === 'minLength' &&
                <p className="text-red-500 text-sm">Minimum 6 characters required</p>}
            </div>

            <div className="text-right">
              <a className="link link-hover text-sm">Forgot password?</a>
            </div>

            <button className="btn btn-neutral w-full mt-4">
              Login
            </button>

          </fieldset>

          <p className="text-center text-sm mt-3">
            New to Zap?{" "}
            <Link
              state={location?.state}
              className="text-blue-500 underline"
              to="/register"
            >
              Register
            </Link>
          </p>
        </form>

        <div className="px-6 pb-6">
          <SocialLogin />
        </div>

      </div>
    </div>
  );
};

export default Login;