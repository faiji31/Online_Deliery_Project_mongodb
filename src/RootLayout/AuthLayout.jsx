import React from 'react';
import Logo from '../component/Logo/Logo';
import { Outlet } from 'react-router';
import AuthImg from '../assets/authImage.png'

const AuthLayout = () => {
      return (
            <div className='max-w-7xl mx-auto items-center h-full'>
                  <Logo></Logo>
                  <div className='flex'>
                        <div className='flex-1'>
                              <Outlet></Outlet>
                        </div>
                        <div className='flex-1'>
                                <img src={AuthImg} alt="" />
                        </div>
                  </div>
            </div>
      );
};

export default AuthLayout;