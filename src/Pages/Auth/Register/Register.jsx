import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';
import axios from 'axios';

const Register = () => {
  const { registerUser, updateuserProfile } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const location = useLocation();

  const handleRegistration = (data) => {
    const profileImage = data.Photo[0];

    registerUser(data.email, data.password)
      .then(result => {
        const formData = new FormData();
        formData.append('image', profileImage);
        console.log(result)

        const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`;

        axios.post(image_API_URL, formData)
          .then(res => {

            const userProfile = {
              displayName: data.name,
              photoURL: res.data.data.url
            };

            updateuserProfile(userProfile)
              .then(() => {
                navigate(location?.state || '/');
              })
              .catch(error => console.log(error));

          });
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 sm:px-6 lg:px-8">
      
      <div className="card w-full max-w-md shadow-2xl bg-base-100">
        <h3 className="text-2xl sm:text-3xl font-bold text-center pt-6">
          Please Register Here
        </h3>

        <form className="card-body" onSubmit={handleSubmit(handleRegistration)}>
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
                <p className="text-red-500 text-sm">Email is required</p>}
            </div>

            {/* Name */}
            <div>
              <label className="label">Name</label>
              <input
                type="text"
                {...register('name', { required: true })}
                className="input input-bordered w-full"
                placeholder="Your Name"
              />
              {errors.name?.type === 'required' &&
                <p className="text-red-500 text-sm">Your Name is required</p>}
            </div>

            {/* Photo */}
            <div>
              <label className="label">Photo</label>
              <input
                type="file"
                {...register('Photo', { required: true })}
                className="file-input file-input-bordered w-full"
              />
              {errors.Photo &&
                <p className="text-red-500 text-sm">Your Photo is required</p>}
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
                <p className="text-red-500 text-sm">Password is required</p>}
              {errors.password?.type === 'minLength' &&
                <p className="text-red-500 text-sm">Password minimum length is 6</p>}
            </div>

            <button className="btn btn-neutral w-full mt-4">
              Register
            </button>

          </fieldset>

          <p className="text-center text-sm mt-3">
            Already have an account?{" "}
            <Link
              state={location?.state}
              className="text-blue-500 underline"
              to="/login"
            >
              Login
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

export default Register;