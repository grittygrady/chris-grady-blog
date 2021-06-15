import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const Navbar = () => {
  return (
    <header className='bg-pink-600'>
      <div className='container'>
        <nav className='flex justify-between items-center'>
          <NavLink
            to='/'
            exact
            activeClassName='text-blue-500'
            className=' text-pink-100 text-3xl bold hover:text-gray-900 decorative active:text-blue-500 pl-2 py-1 md:text-5xl w-1/2'
          >
            Chris Grady
          </NavLink>

          <div className='flex flex-col items-end px-3 py-1 w-1/2'>
            <NavLink
              to='/posts'
              className='text-pink-200 hover:text-gray-900 active:text-blue-500 rounded'
              activeClassName='text-blue-500 bg-blue-800'
            >
              Blog Posts
            </NavLink>
            <NavLink
              to='/projects'
              className='text-pink-200 hover:text-gray-900 active:text-blue-500 rounded'
              activeClassName='text-blue-500 bg-blue-800'
            >
              Projects
            </NavLink>
            <NavLink
              to='/about'
              className='text-pink-200 hover:text-gray-900 active:text-blue-500 rounded'
              activeClassName='text-blue-500 bg-blue-800'
            >
              About Me
            </NavLink>
          </div>
        </nav>
        <div className=' flex justify-evenly mx-auto py-2 md:py-1'>
          <SocialIcon
            url='https://github.com/grittygrady'
            className='mr-4'
            target='_blank'
            fgColor='#fce7f3'
            style={{ height: 30, width: 30 }}
          />
          <SocialIcon
            url='https://www.instagram.com/gradythe80sbaby/'
            className='mr-4'
            target='_blank'
            fgColor='#fce7f3'
            style={{ height: 30, width: 30 }}
          />
          <SocialIcon
            url='https://www.linkedin.com/in/gradychristopher/'
            className='mr-4'
            target='_blank'
            fgColor='#fce7f3'
            style={{ height: 30, width: 30 }}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
