import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='bg-pink-600'>
      <nav className='flex justify-between items-center bg-gray-900 md:py-4'>
        <NavLink
          to='/'
          exact
          activeClassName='text-blue-500'
          className='text-blue-400 text-4xl bold hover:text-pink-500 decorative pl-2 py-1  md:text-6xl lg:text-7xl md:pl-8 w-1/2 lg:w-7/12'
        >
          Chris Grady
        </NavLink>
        <div className='inline-flex flex-col lg:flex-row items-end px-3 py-1 w-1/2 lg:w-5/12 md:mr-6 lg:mx-0'>
          <NavLink
            to='/posts'
            className='text-pink-200 hover:text-pink-500 rounded py-0.5 px-1 md:text-3xl md:p-2 lg:mr-6'
            activeClassName='bg-blue-400'
          >
            Blog Posts
          </NavLink>
          <NavLink
            to='/projects'
            className='text-pink-200 hover:text-pink-500 rounded py-0.5 px-1 md:text-3xl md:p-2 lg:mr-6'
            activeClassName='bg-blue-400'
          >
            Projects
          </NavLink>
          <NavLink
            to='/about'
            className='text-pink-200 hover:text-pink-500 rounded py-0.5 px-1 md:text-3xl md:p-2 lg:mr-6'
            activeClassName='bg-blue-400'
          >
            About Me
          </NavLink>
        </div>
      </nav>

      <div className='bg-pink-600 flex justify-evenly mx-auto py-2 md:py-6'>
        <a
          href='https://github.com/grittygrady'
          className='rounded-full '
          target='_blank'
          rel='noopener noreferrer'
        >
          <button
            className='bg-blue-400 flex justify-center items-center h-8 w-8 rounded-full outline-none mr-2 p-3 md:h-16 md:w-16 md:text-4xl'
            type='button'
          >
            <i className='flex fab fa-github'></i>
          </button>
        </a>

        <a
          href='https://www.linkedin.com/in/gradychristopher/'
          className='rounded-full'
          target='_blank'
          rel='noopener noreferrer'
        >
          <button
            className='bg-blue-400 flex justify-center items-center h-8 w-8  rounded-full outline-none mr-2 p-3 md:h-16 md:w-16 md:text-4xl'
            type='button'
          >
            <i className='flex fab fa-linkedin-in'></i>
          </button>
        </a>
        <a
          href='https://grittygrady.github.io/chris-grady-portfolio/'
          className='rounded-full'
          target='_blank'
          rel='noopener noreferrer'
        >
          <button
            className='bg-blue-400 flex justify-center items-center h-8 w-8  rounded-full outline-none mr-2 p-3 md:h-16 md:w-16 md:text-4xl'
            type='button'
          >
            <i className='fas fa-book-dead'></i>
          </button>
        </a>
        <a
          href='https://www.instagram.com/gradythe80sbaby/'
          className='rounded-full'
          target='_blank'
          rel='noopener noreferrer'
        >
          <button
            className='bg-blue-400 flex justify-center items-center h-8 w-8 md:h-16 md:w-16 md:text-4xl  rounded-full outline-none mr-2 p-3'
            type='button'
          >
            <i className='flex fab fa-instagram'></i>
          </button>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
