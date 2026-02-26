import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';
import axios from 'axios';



const Register = () => {
  const { registerUser} =useAuth();
  const {register, handleSubmit , formState:{errors}} = useForm();
const handleRegistration =(data)=>{
  console.log('after register',data.Photo[0])
  const ProfileImage = data.Photo[0]
  registerUser(data.email,data.password)
  .then(result =>{
    console.log(result.user)
    const formData = new FormData()
    formData.append('image', ProfileImage)


    const image_API_URL=`https://api.imgbb.com/1/upload?&key=${import.meta.env.VITE_image_host_key}`

    axios.post(image_API_URL,formData)
    .then(res=>{
      console.log('after image upload', res.data)

    })
  })
  .catch(error=>{
    console.log(error)
  })

}
  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <h3 className='text-3xl  text-center'>Please Register Here</h3>
      <form className='card-body' onSubmit={handleSubmit(handleRegistration)}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" {...register('email',{required: true})} className="input" placeholder="Email" />
          {errors.email?.type =='required' &&  <p className='text-red-500'>Email is required</p>}

           <label className="label">Name</label>
          <input type="text" {...register('name',{required: true})} className="input" placeholder="Your Name" />
          {errors.name?.type =='required' &&  <p className='text-red-500'>Your Name is required</p>}


          <label className="label">Photo</label>
          <input type="file" {...register('Photo',{required: true})} className="file-input" placeholder="Your Photo" />
          {errors.name?.type =='required' &&  <p className='text-red-500'>Your Photo is required</p>}


          <label className="label">Password</label>
          <input type="password" {...register('password',{required: true,
          minLength:6})} className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>

           {errors.password?.type =='required' &&  <p className='text-red-500'>Password is required</p>}
           {
            errors.password?.type ==='minLength' && <p className='text-red-500'>Password minimum length is 6</p>
           }
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        <p>Already have an account <Link className='text-blue-400 underline' to='/login'>Login</Link></p>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;