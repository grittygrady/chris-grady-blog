import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const Navbar = () => {
  return (
    <header className='bg-pink-600'>
      <nav className='flex justify-between items-center bg-gray-900'>
        <NavLink
          to='/'
          exact
          activeClassName='text-blue-500'
          className='text-blue-400 text-4xl bold hover:text-pink-500 decorative  pl-2 py-1 md:text-5xl w-1/2'
        >
          Chris Grady
        </NavLink>
        <div className='inline-flex flex-col items-end px-3 py-1 w-1/2'>
          <NavLink
            to='/posts'
            className='text-pink-200 hover:text-pink-500 rounded p-y-0.5 px-1 filter shadow-2xl'
            activeClassName='bg-blue-400'
          >
            Blog Posts
          </NavLink>
          <NavLink
            to='/projects'
            className='text-pink-200 hover:text-pink-500 rounded p-y-0.5 px-1'
            activeClassName='bg-blue-400'
          >
            Projects
          </NavLink>
          <NavLink
            to='/about'
            className='text-pink-200 hover:text-pink-500 rounded p-y-0.5 px-1'
            activeClassName='bg-blue-400'
          >
            About Me
          </NavLink>
        </div>
      </nav>

      <div className='bg-pink-600 flex justify-evenly mx-auto py-2 md:py-1'>
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
    </header>
  );
};

export default Navbar;
