import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';



const Register = () => {
  const { registerUser} =useAuth();
  const {register, handleSubmit , formState:{errors}} = useForm();
const handleRegistration =(data)=>{
  console.log('after register',data)
  registerUser(data.email,data.password)
  .then(result =>{
    console.log(result.user)
  })
  .catch(error=>{
    console.log(error)
  })

}
  return (
    <div>
      <form onSubmit={handleSubmit(handleRegistration)}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" {...register('email',{required: true})} className="input" placeholder="Email" />
          {errors.email?.type =='required' &&  <p className='text-red-500'>Email is required</p>}
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
      </form>
    </div>
  );
};

export default Register;