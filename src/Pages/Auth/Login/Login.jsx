import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
  const {signInUser} = useAuth()
  const {register, handleSubmit, formState:{errors}} = useForm()

  const handleLogin =(data)=>{

    console.log('after login',data)
    signInUser(data.email,data.password)
    .then(result =>{
      console.log(result.user)

    })
    .catch(error=>{
      console.log(error)
    })

  }
  return (
    <div>
         <form onSubmit={handleSubmit(handleLogin)}>
            <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
              <h3 className='text-3xl text-center'>Welcome Back</h3>
              <p className='text-center'>Please Login</p>
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" {...register('email',{required: true})} className="input" placeholder="Email" />
          {
            errors.email?.type === 'required' && <p className='text-red-500'>Email is Required</p>
          }
          <label className="label">Password</label>
          <input type="password" {...register('password',{required:true, minLength:6})} className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          {
            errors.password?.type === 'required' && <p className='text-red-500'>Password is Required</p>
          }
          <button className="btn btn-neutral mt-4">Login</button>
         
        </fieldset>
         <p>New to Zap <Link className='text-blue-400 underline' to='/register'>Register</Link></p>
      </div>
      <SocialLogin></SocialLogin>
    </div>
    
         </form>
    </div>
  );
};

export default Login;